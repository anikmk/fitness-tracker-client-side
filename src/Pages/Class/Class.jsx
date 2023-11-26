import Cover from "../Shared/Cover/Cover";
import clasesImg from '../../assets/classes/classes.jpg'
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { FaArrowTrendUp, FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Class = () => {
    const axiosPublic = useAxiosPublic();
    const [clases,setClases] = useState([]);
    console.log(clases)
    axiosPublic.get('/entryclass')
    .then(res=>{
        setClases(res.data)
    })
    return (
        <div>
            <Cover img={clasesImg} coverTitle='Show All Clases' coverDescription='Say Someting About Class'></Cover>
            <div className="py-14">
                <SectionTitle heading='All Clases' subHeading='Explore our fitness classes! From high-energy workouts to mindful practices, our diverse classes cater to all levels. Join our community for engaging sessions designed to boost your fitness and well-being.'></SectionTitle>
            </div>
            <div className="w-[80%] mx-auto pb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                clases.map(singleClass=><div
                key={singleClass._id} className="card bg-base-100 hover:shadow-[#7ff2219a] shadow-xl rounded-md hover:bg-[#7ff22146] text-center">
                <figure className="px-10 pt-6">
                  <img
                    src={singleClass.profileImage}
                    alt="coach1"
                    className="rounded-full w-[40%]"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-bold"> {singleClass.trainerName} </h2>
                  <h2 className="text-xl font-bold">Class Name: {singleClass.category} </h2>
                  <p className='text-[#80f221] font-extrabold -mt-3'>_______________</p>
                    <div className="flex mx-auto text-xl gap-x-3 pt-3">
                        <FaFacebook></FaFacebook>
                        <AiFillTwitterCircle />
                        <AiFillInstagram />
                        <FaLinkedinIn />
                    </div>
                  <div className="">
                  <Link to={`/classdetails/${singleClass._id}`}>
                  <button className="mt-4 px-6 py-3 bg-[#80f221] text-black rounded-full font-semibold flex mx-auto items-center text-xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#ffffff46]">Details<FaArrowTrendUp  className="ml-2"/></button>
                  </Link>
                  </div>
                </div>
              </div>)
            }

            </div>
            </div>
        </div>
    );
};

export default Class;