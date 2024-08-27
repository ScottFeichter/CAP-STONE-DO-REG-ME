import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import sessionReducer from './sessionReducer.js';
import employeeDepartmentsReducer from './employeeDepartmentsReducer.js';
import academicDepartmentsReducer from './academicDepartmentsReducer.js';

const rootReducer = combineReducers({

  session: sessionReducer,
  employeeDepartments: employeeDepartmentsReducer,
  academicDepartments: academicDepartmentsReducer,

});



let enhancer;

// import.meta.env.MODE
// process.env.NODE_ENV

if (process.env.NODE_ENV === 'production') {
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
