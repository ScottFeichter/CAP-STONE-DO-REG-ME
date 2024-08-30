import { csrfFetch } from "./xCsrf";

/**===================ACTION TYPE CONSTANTS: =====================*/

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

/** =====================ACTION CREATORS: ========================*/

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

/** ======================THUNKS: ================================*/


/** LOGIN */
export const thunkLogin = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  // console.log('THUNK LOGIN RAN - USER: ', user, 'RESPONSE:', response, 'DATA: ', data);
  dispatch(setUser(data.user));
  return response;
};


/** SIGNUP */
export const thunkSignup = (user) => async (dispatch) => {
  const { username, firstName, lastName, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      firstName,
      lastName,
      email,
      password
    })
  });
  const data = await response.json();
  // console.log('THUNK SIGNUP RAN - USER: ', user, 'RESPONSE:', response, 'DATA: ', data);
  dispatch(setUser(data.user));
  return response;
};


/** RESTORE */
export const thunkRestoreUser = () => async (dispatch) => {
  const response = await csrfFetch('/api/session');
  const data = await response.json()
  console.log(`THUNK RESTORE USER RAN - DATA`, data);
  dispatch(setUser(data.user));
  return data.user;
}


/** LOGOUT */
export const thunkLogout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {method: 'DELETE'});

  // console.log(`LOGOUT RAN - RESPONSE.STATUS`, response.status);
  dispatch(removeUser());
  return response;
}




/** ======================INITIAL SESSION STATE: ==================*/

const initialSessionState = { user: null };

/** ===========================REDUCER: ===========================*/

const sessionReducer = (sessionState = initialSessionState, action) => {
  switch (action.type) {
    case SET_USER:
      // console.log("SESSION STATE FROM SESSION REDUCER", sessionState, "ACTION.TYPE = ", action.type, "ACTION.PAYLOAD = ", action.payload)
      return { ...sessionState, user: action.payload };
      case REMOVE_USER:
        // console.log("SESSION STATE FROM SESSION REDUCER", sessionState, "ACTION.TYPE = ", action.type, "ACTION.PAYLOAD = ", action.payload)
        return { ...sessionState, user: null };
      default:
        return sessionState;
    }
};

export default sessionReducer;
