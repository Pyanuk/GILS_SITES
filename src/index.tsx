import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';

import NotFoundPage from './components/pages/notfoundpage' 
import Regstart from './components/pages/regstart'
import Regmain from './components/pages/regmain';
import Login from './components/pages/login';
import Register1 from './components/pages/register1';
import Register2 from './components/pages/register2';
import Register3 from './components/pages/register3';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {path: "/", element: <Regmain/>},
  {path:"/regstart", element: <Regstart/>},
  {path:"/login", element: <Login/>},
  {path:"/register1", element: <Register1/>},
  {path:"/register2", element: <Register2/>},
  {path:"/register3", element: <Register3/>},


  {path:"*", element:<NotFoundPage/>}
]) 

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);


reportWebVitals();
