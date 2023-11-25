import Cover from "../Shared/Cover/Cover";
import alltrainers from '../../assets/trainer/alltrainers.jpg'
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { FaArrowTrendUp } from "react-icons/fa6";

const Trainer = () => {
    return (
        <div>
            <Cover img={alltrainers} coverTitle='all trainers' coverDescription='Meet our dedicated trainers! Our expert team combines passion and expertise to guide you on your fitness journey. With tailored programs, personalized attention, and proven results, our trainers are committed to empowering you to reach your fitness goals. Experience top-notch coaching and motivation for a healthier, stronger you!'></Cover>
            <div className="py-14">
            <SectionTitle heading='Our Traines' subHeading='Expert trainers dedicated to your success. Personalized guidance, tailored workouts, and unwavering support for your fitness goals. Experience transformational coaching and a vibrant fitness community. Join us for a journey toward better health and wellness!'></SectionTitle>
            </div>

            <div className="w-[80%] mx-auto pb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="card bg-base-100 hover:shadow-[#7ff2219a] shadow-xl rounded-md hover:bg-[#7ff22146]">
            <figure className="px-10 pt-6">
              <img
                src=''
                alt="coach1"
                className="rounded-full w-[40%]"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-bold">Jhons meal | <span className='font-medium text-lg'>Founder & CEO</span></h2>
              <p className='text-[#80f221] font-extrabold -mt-3'>_______________</p>
              <p>John brings a decade of experience in fitness technology and a passion for making fitness accessible to everyone.</p>

              <div className="card-actions">
              <button className="mt-4 px-6 py-3 bg-[#80f221] text-black rounded-full font-semibold flex items-center text-xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#ffffff46]"> Start Today <FaArrowTrendUp  className="ml-2"/></button>
              </div>
            </div>
          </div>

            </div>
            </div>
        </div>
    );
};

export default Trainer;