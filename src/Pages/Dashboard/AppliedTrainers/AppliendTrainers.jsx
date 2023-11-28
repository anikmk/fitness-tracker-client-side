import Swal from "sweetalert2";
import useAppliedTrainers from "../../../hooks/useAppliedTrainers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AppliendTrainers = () => {
    const [applied,refetch] = useAppliedTrainers();
    const axiosSecure = useAxiosSecure();
    console.log(applied)
    const handleConfirm = (id) => {
        
        axiosSecure.put(`/trainers/pending/${id}`,{status:'trainer'})
        .then(res=>{
            if(res.data.updatedCount > 0){
                refetch();
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            }
        })
    }
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
           applied.map((appliedTrainer,index)=><tr
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
              {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}> {appliedTrainer.status} </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box text-center text-lg">
            <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={ appliedTrainer.profileImage} alt="Avatar Tailwind CSS Component" />
                  </div>
            </div>
            <h3 className="font-bold text-lg"> {appliedTrainer.trainerName} </h3>
            <p className="py-2">Category:{appliedTrainer.category}</p>
            <p className="py-2">Age:{appliedTrainer.age}</p>
            <p className="py-2">available Time Week:{appliedTrainer.availableTimeWeek}</p>
            <p className="py-2">available Time Day:{appliedTrainer.availableTimeDay}</p>
            <div className="modal-action">
            <button onClick={()=>handleConfirm(appliedTrainer._id)} className="btn mr-5">Confirm</button>
            <button className="btn">Reject</button>
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Cancel</button>
            </form>
            </div>
            </div>
            </dialog>
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