
import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const AllSubscriber = () => {
    const [subscribers,setSubscribers] = useState([]);
    console.log(subscribers)
    const axiosPublic = useAxiosPublic();
    axiosPublic.get('/newslatter')
    .then(res=>{
        setSubscribers(res.data)
    })
    return (
        <div>
            <SectionTitle heading='All Subscribers' subHeading=''></SectionTitle>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
        {
            subscribers.map((subscribe,index)=> <tr key={subscribe._id}>
                <th>{index++}</th>
                <td> {subscribe.name} </td>
                <td> {subscribe.email} </td>
              </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSubscriber;