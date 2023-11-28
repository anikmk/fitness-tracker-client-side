import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const AllTrainers = () => {
    const axiosSecure = useAxiosSecure();

    const {data: trainers = [] } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/trainer');
            return res.data;
        }
    })
    return (
        <div>
            all trainers : {trainers.length}
            <div className="w-[80%] mx-auto">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            Index
          </label>
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      {
        trainers.map((trainer,index)=><tr key={trainer._id}>
            <th>
              <label>
                {index++}
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={trainer.profileImage} />
                  </div>
                </div>
              </div>
            </td>
            <td>
              {trainer.trainerName}
            </td>
            <td> {trainer.email} </td>
            <th>
            <Link to='/payment'>
            <button className="mt-4 px-3 py-2 bg-[#80f221] text-black rounded font-medium text-lg hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#ffffff46]"> Pay</button>
            </Link>
            </th>
          </tr>)
      }
      
    </tbody>
    
  </table>
</div>

            </div>
        </div>
    );
};

export default AllTrainers;