import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivetRouter from "./PrivetRouter";
import Trainer from "../Pages/Trainer/Trainer";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path:'gallery',
          element:<PrivetRouter><Gallery></Gallery></PrivetRouter>
        },
        {
          path:'trainer',
          element:<Trainer></Trainer>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      
      ],
    },
  ]);