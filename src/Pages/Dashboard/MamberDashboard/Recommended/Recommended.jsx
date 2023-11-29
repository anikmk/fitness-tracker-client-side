import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Recommended = () => {
    const [recommendeds,setRecommendeds] = useState([])
    useEffect(()=>{
        fetch('/recommended.json')
        .then(res=>res.json())
        .then(data=>{
            setRecommendeds(data)
        })
    },[])
    return (
        <div>
           <SectionTitle heading='Recommended clases' subHeading='Explore Our Top Fitness Picks: Dive into our recommended classes, curated for diverse interests and fitness levels, offering tailored workouts for an enriched exercise experience'>
           </SectionTitle>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                recommendeds.map(recommended=><div
                    key={recommended.classId} className="card bg-base-200 hover:shadow-[#7ff2219a] shadow-xl rounded-md hover:bg-[#7ff22146] text-center">
                    <div className="card-body">
                      <h2 className="text-xl font-bold"> Class Name:{recommended.className} </h2>
                      <h2 className="text-xl font-bold">Instractor Name: {recommended.instructor} </h2>
                      <p> {recommended.description} </p>
                      <p>Schedule: {recommended.schedule} </p>
                      <p>Location: {recommended.location} </p>
                      <p className='text-[#80f221] font-extrabold -mt-3'>_______________</p>
                        <div className="flex mx-auto text-xl gap-x-3 pt-3">
                            <FaFacebook></FaFacebook>
                            <AiFillTwitterCircle />
                            <AiFillInstagram />
                            <FaLinkedinIn />
                        </div>
                      <div className="">
                      <Link to='/class'>
                      <button className="mt-4 px-6 py-3 bg-[#80f221] text-black rounded-full font-semibold flex mx-auto items-center text-xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#ffffff46]">Details<FaArrowTrendUp  className="ml-2"/></button>
                      </Link>
                      </div>
                    </div>
                  </div>)
            }
           </div>
        </div>
    );
};

export default Recommended;