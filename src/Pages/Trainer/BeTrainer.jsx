import { useForm } from "react-hook-form";
import Cover from "../Shared/Cover/Cover";
import { FaArrowTrendUp } from "react-icons/fa6";


const BeTrainer = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async(data) => {
        console.log(data)
      };
    return (
        <div>
            <Cover coverTitle='Become a Trainer'></Cover>


        <div className="w-[80%] mx-auto py-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Full Name.."
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter Email.."
              className="input input-bordered w-full"
            />
          </div>

          </div>
          <div className="flex gap-6">
            
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Skill?</span>
              </label>
              <select
                {...register("category")}
                className="select select-bordered w-full"
              >
                <option disabled value='default'>
                  select a category
                </option>
                <option value="weightlifting">Weightlifting</option>
                <option value="yoga">Yoga</option>
                <option value="cardio">Cardio</option>
              </select>
            </div>
            
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text"> Age</span>
              </label>
              <input
                type="number"
                {...register("age")}
                placeholder="Age"
                className="input input-bordered w-full"
              />
            </div>
          </div>
           <div className="form-control">
              <label className="label">
                <span className="label-text">Available Time Week</span>
              </label>
              <input
              {...register("availableTimeWeek")}
                className="input input-bordered w-full"
                placeholder="Available Time in a Week"
              ></input>
            </div>
           <div className="form-control">
              <label className="label">
                <span className="label-text">Available Time Day</span>
              </label>
              <input
              {...register("availableTimeDay")}
                className="input input-bordered w-full"
                placeholder="Available Time in a Day"
              ></input>
            </div>
            <div className="form-control w-full my-6">
                <input {...register("image")} type="file" className="file-input w-full mx-w-xs" />
            </div>
            <button className="mt-4 px-6 py-3 bg-[#80f221] text-black rounded-full font-semibold flex items-center text-xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#ffffff46] mx-auto"> Apply Now<FaArrowTrendUp  className="ml-2"/></button>
        </form>
        </div>
        </div>
    );
};

export default BeTrainer;