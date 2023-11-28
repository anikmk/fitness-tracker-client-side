import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AllUser from "./AllUser";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [users,setUsers] = useState([]);
    axiosSecure.get('/users')
    .then(res=>{
        setUsers(res.data)
    })
    
    return (
        <div>
          {
                    users.map(user=><AllUser key={user._id} user={user}>

                    </AllUser>)
                }
        </div>
    );
};

export default AllUsers;