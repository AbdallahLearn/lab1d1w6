import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import router from './router/Router'
import '../index.css'
import Login from '../component/Login';
import Error from '../component/Error';
import App from '../App';


import {
  createBrowserRouter
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error />,

  },
  {
    path: "/login",
    element: <Login/>,

  },
  {
    path: "*", 
    element: <Error />, 
  },
 
  
]);

export default router;

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//    <RouterProvider router ={router}/>
//   </StrictMode>
// )
