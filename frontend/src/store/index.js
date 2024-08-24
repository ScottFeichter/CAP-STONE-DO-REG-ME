import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
// import sessionReducer from './session';

const rootReducer = combineReducers({

  // session: sessionReducer,
});



let enhancer;

// import.meta.env.MODE
// process.env.NODE_ENV

if (import.meta.env.MODE === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  // console.log("inside configureStore - store.getState(): ", store.getState());
  // console.log("CONFIGURE STORE RAN - RETURNS :", "ROOTREDUCER", rootReducer, "PRELOADED STATE: ", preloadedState, "ENHANCER: ", enhancer)
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
