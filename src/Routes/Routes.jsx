import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivetRouter from "./PrivetRouter";
import Trainer from "../Pages/Trainer/Trainer";
import TrainerDetails from "../Pages/Trainer/TrainerDetails";
import BeTrainer from "../Pages/Trainer/BeTrainer";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import TrainerBooked from "../Components/TrainerBooked/TrainerBooked";
import Payment from "../Components/Payment/Payment";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
          path:'trainerdetails/:id',
          element:<TrainerDetails></TrainerDetails>,
          loader:async({params}) => await fetch(`http://localhost:5000/trainer/${params.id}`)
        },
        // secure path
        {
          path:'betrainer',
          element:<BeTrainer></BeTrainer>
        },
        {
          path:'trainerbooked',
          element:<TrainerBooked></TrainerBooked>
        },
        {
          path:'payment',
          element:<Payment></Payment>
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

    {
      path:'dashboard',
      element:<PrivetRouter><Dashboard></Dashboard></PrivetRouter>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        }
      ]
    }
  ]);