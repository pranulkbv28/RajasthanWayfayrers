import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './app/store.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import Signin from './pages/Signin/Signin.jsx';
import { Toaster } from "react-hot-toast";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signin",
    element: <Signin />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <Toaster />
        <RouterProvider router={router} />
      </>
    </Provider>
  </React.StrictMode>,
);
