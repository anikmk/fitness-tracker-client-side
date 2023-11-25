import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRouter = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation();
    if(loader){
      return <div className="progress w-56"></div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRouter;