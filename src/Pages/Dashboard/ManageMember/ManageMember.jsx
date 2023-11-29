import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageMember = () => {
    const axiosSecure = useAxiosSecure();
    const [users,setUsers] = useState([]);
    console.log(users);
    axiosSecure.get('/users')
    .then(res=>{
        setUsers(res.data)
    })
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Numbers</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user,inx)=> <tr key={user._id}>
                <th> {inx+1} </th>
                <td> {user.name} </td>
                <td> {user.email} </td>
                <td>see more</td>
              </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageMember;