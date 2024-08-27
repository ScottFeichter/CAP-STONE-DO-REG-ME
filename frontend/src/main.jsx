import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import configureStore from './redux/zStore.js';
import { restoreCSRF, csrfFetch } from './redux/xCsrf.js';
import * as sessionActions from './redux/sessionReducer.js';

import { router } from "./router/Router.jsx";
import './index.css'

const store = configureStore();

// import.meta.env.MODE
// process.env.NODE_ENV

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF()

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
  </React.StrictMode>
)
