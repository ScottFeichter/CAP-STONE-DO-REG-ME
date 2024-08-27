import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import configureStore from './redux/zStore.js';
import { restoreCSRF, csrfFetch } from './redux/xCsrf.js';
import * as sessionActions from './redux/sessionReducer.js';
import { Modal, ModalProvider } from './context/Modal';
// import { router } from "./router";
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
    <ModalProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <Modal />
        </BrowserRouter>
      </Provider>
    </ModalProvider>
  </React.StrictMode>
)
