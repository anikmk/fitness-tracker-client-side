import { useForm } from "react-hook-form";
import { FaArrowTrendUp } from "react-icons/fa6";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AddNewForum = () => {
    const { register, handleSubmit,reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async(data) => {
        const addFormInfo = {
            question:data.question,
            answer:data.answer,
            like:0,
            dislike:0
        }
        console.log(addFormInfo)
        const trainerRes = await axiosSecure.post('/entryforum',addFormInfo);
        console.log(trainerRes.data)
        if(trainerRes.data.insertedId){
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Data Added To The Forum Page",
            showConfirmButton: false,
            timer: 1500
          });
        }
        
      };
    return (
       <div className="w-[80%] mx-auto py-20">
        <form onSubmit={handleSubmit(onSubmit)}>
         <div className="flex gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Questions</span>
            </label>
            <input
              type="text"
              {...register("question")}
              placeholder="Enter Questions.."
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Answer</span>
            </label>
            <input
              type="text"
              {...register("answer")}
              placeholder="Answer"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <button className="mt-10 px-6 py-3 bg-[#80f221] text-black rounded-full font-semibold flex items-center text-xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#ffffff46] mx-auto">Added Forum<FaArrowTrendUp  className="ml-2"/></button>
       </form>
       </div>
    );
};

export default AddNewForum;