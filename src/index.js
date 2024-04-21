import React from 'react';
import ReactDOM from 'react-dom/client';
 import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.js';
import About from './components/About.js';
import Layout from './Layout.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import reportWebVitals from './reportWebVitals';
const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/'element={<Layout/>} >

   <Route  path='home' element={<Home/>}/>
    <Route path='about' element={<About />} />
    <Route  path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup />} />

  </Route>
)
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


