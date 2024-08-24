const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
};

const removeUser = () => ({
  type: REMOVE_USER
});

export const thunkAuthenticate = () => async (dispatch) => {
  const response = await fetch("/api/auth/");
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    // console.log("thunkAuthenticate RAN")
    dispatch(setUser(data));
  }
};

export const thunkLogin = (credentials) => async dispatch => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials)
  });

  // console.log("thunkLogin RAN")

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
  } else if (response.status < 500) {
    const errorMessages = await response.json();
    return errorMessages
  } else {
    return { server: "Something went wrong. Please try again" }
  }
};

export const thunkSignup = (user) => async (dispatch) => {

  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
  } else if (response.status < 500) {
    const errorMessages = await response.json();
    return errorMessages
  } else {
    const errorMessages = await response.json();
    return errorMessages
  }
};

export const thunkLogout = () => async (dispatch) => {
  await fetch("/api/auth/logout");
  dispatch(removeUser());
};

const initialState = {};

function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      console.log("STATE FROM SESSION REDUCER", state, "ACTION.TYPE = ", action.type, "ACTION.PAYLOAD = ", action.payload)
      return { ...state, user: action.payload };
    case REMOVE_USER:
      console.log("STATE FROM SESSION REDUCER", state, "ACTION.TYPE = ", action.type, "ACTION.PAYLOAD = ", action.payload)
      return { ...state, user: null };
    default:
      return state;
  }
}

export default sessionReducer;
