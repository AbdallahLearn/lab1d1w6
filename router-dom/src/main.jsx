import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import router from './router/Router'
import App from './App';
// import Login from './component/Login';
// import Error from './component/Error';
// import './index.css'

import {
  // createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     errorElement: <Error />,

//   },
//   {
//     path: "/login",
//     element: <Login/>,

//   },
//   {
//     path: "*", 
//     element: <Error />, 
//   },
 
  
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router ={router}/>
  </StrictMode>
)
