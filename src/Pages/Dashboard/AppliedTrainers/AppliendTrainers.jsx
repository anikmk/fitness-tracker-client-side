import useAppliedTrainers from "../../../hooks/useAppliedTrainers";
import AppliedTrainersTableRow from "./AppliedTrainersTableRow";


const AppliendTrainers = () => {
    const [appliedTrainers] = useAppliedTrainers([])
    console.log(appliedTrainers)
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        Numbers
        </th>
        <th>Imgae</th>
        <th>Trainer Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
           appliedTrainers.map((appliedTrainer,index)=><tr
           key={appliedTrainer._id}>
            <th>
              <label>
                {index + 1}
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={ appliedTrainer.profileImage} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
             {appliedTrainer.trainerName}
            </td>
            <td> {appliedTrainer.email} </td>
            <th>
              <button className="btn btn-ghost btn-xs"> {appliedTrainer.status} </button>
            </th>
          </tr>)
        }

    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default AppliendTrainers;