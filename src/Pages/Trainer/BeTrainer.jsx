import { useForm } from "react-hook-form";
import Cover from "../Shared/Cover/Cover";
import { FaArrowTrendUp } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const BeTrainer = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const onSubmit = async(data) => {
        console.log(data)
        // image update in image bb and then get api
        const imageFile = {image:data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers:{
            'content-type': 'multipart/form-data'
          }
        });
        if(res.data.success){
          // now send to the trainer info to the server with img rl
          const trainerInfo = {
            name:data.name,
            email:data.email,
            category:data.category,
            age:parseFloat(data.age),
            availableTimeWeek:data.availableTimeWeek,
            availableTimeDay:data.availableTimeDay,
            image:res.data.data.display_url
          }
          const trainerRes = await axiosPublic.post('/')
        }
        console.log(res.data)
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

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">available time in a day?</span>
              </label>
              <select
                {...register("availableTimeDay")}
                className="select select-bordered w-full"
              >
                <option disabled value='default'>
                  select Your available time
                </option>
                <option value="9-12">9 AM - 12 AM</option>
                <option value="1-5">1 PM - 5 PM</option>
                <option value="6-10"> 6 PM - 10 PM </option>
              </select>
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