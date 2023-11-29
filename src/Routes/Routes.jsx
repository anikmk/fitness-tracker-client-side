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
import AllSubscriber from "../Pages/Dashboard/AllSubscribers/AllSubscriber";
import AllTrainers from "../Pages/Dashboard/AllTrainers/AllTrainers";
import AddNewClass from "../Pages/Dashboard/AddNewClass/AddNewClass";
import Class from "../Pages/Class/Class";
import ClassDetails from "../Pages/Class/ClassDetails";
import AddNewForum from "../Pages/Dashboard/AddNewForum/AddNewForum";
import Community from "../Pages/Community/Community";
import BlogDetails from "../Pages/Home/Blog/BlogDetails";
import AllUsers from "../Pages/Dashboard/Allusers/AllUsers";
import AppliendTrainers from "../Pages/Dashboard/AppliedTrainers/AppliendTrainers";
import Recommended from "../Pages/Dashboard/MamberDashboard/Recommended/Recommended";
import ManageMember from "../Pages/Dashboard/ManageMember/ManageMember";



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
          element:<Gallery></Gallery>
        },
        {
          path:'trainer',
          element:<Trainer></Trainer>
        },
        {
          path:'class',
          element:<Class></Class>
        },
        {
          path:'community',
          element:<Community></Community>
        },
        {
          path:'classdetails/:id',
          element:<PrivetRouter><ClassDetails></ClassDetails></PrivetRouter>,
          loader:async({params}) => await fetch(`http://localhost:5000/entryclass/${params.id}`)
          // todo :get api from server
        },
        {
          path:'trainerdetails/:id',
          element:<PrivetRouter><TrainerDetails></TrainerDetails></PrivetRouter>,
          loader:async({params}) => await fetch(`http://localhost:5000/trainer/${params.id}`)
        },
        {
          path:'blogdetails',
          element:<BlogDetails></BlogDetails>
        },
        // secure path
        {
          path:'betrainer',
          element:<PrivetRouter><BeTrainer></BeTrainer></PrivetRouter>
        },
        {
          path:'trainerbooked',
          element:<PrivetRouter><TrainerBooked></TrainerBooked></PrivetRouter>
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
        // admin routes
        {
          path:'users',
          element:<AllUsers></AllUsers>
        },
        {
          path:'subscribers',
          element:<PrivetRouter><AllSubscriber></AllSubscriber></PrivetRouter>
        },
        {
          path:'alltrainers',
          element:<AllTrainers></AllTrainers>
        },
        {
          path:'appliedtrainer',
          element:<AppliendTrainers></AppliendTrainers>
        },
        // admin trainer
        {
          path:'managemembers',
          element:<ManageMember></ManageMember>
        },
        {
          path:'addnewclass',
          element:<AddNewClass></AddNewClass>
        },
        {
          path:'addnewforum',
          element:<AddNewForum></AddNewForum>
        },
        // normal user
        {
          path:'recommended',
          element:<Recommended></Recommended>
        }
      ]
    }
  ]);