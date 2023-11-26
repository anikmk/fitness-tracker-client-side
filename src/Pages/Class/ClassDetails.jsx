import { useLoaderData } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { FaArrowTrendUp, FaCircleArrowRight } from "react-icons/fa6";


const ClassDetails = () => {
    const detailsInfo = useLoaderData([]);
    const {availableTimeDay,availableTimeWeek,category,email,profileImage,trainerName} = detailsInfo;

    console.log(detailsInfo)
    return (
        <div>
           <Cover img={profileImage} coverTitle={`Hey i am ${trainerName}`} coverDescription={`Discover the expertise of ${trainerName}, a seasoned trainer with 10+ years' experience. Tailored sessions, personalized guidance, and unwavering support pave the way to your fitness success with ${trainerName} by your side.`}></Cover>
           <div className="py-14">
            <SectionTitle heading='About Trainer' subHeading={`Meet ${trainerName}, our Strength Training Specialist: With over a decade of experience, ${trainerName} passion for sculpting strong, resilient bodies shines through. His personalized regimens and focus on technique refinement propel you towards achieving robust, enduring ${category}.`}></SectionTitle>
           </div>

           <div className="bg-white py-5 mb-8">
            <div className="w-[80%] mx-auto">
                <div className="flex items-center gap-11">
                    <div className="w-[50%]">
                    <h3 className="text-3xl pb-3 mb-3 font-bold border-b-2 border-[#80f221]">Decade of Experience</h3>
                    <p className="mb-4">{`"${trainerName}: 10+ years of expertise in sculpting bodies and transforming lives. Personalized workouts, technique finesse, and a holistic approach for lasting fitness success."`}</p>
                    <ul className="ml-5 mb-8">
                        <li className="flex items-center text-lg font-semibold mb-2">
                        <FaCircleArrowRight className="mr-2 text-[#80f221]"/>
                        Available Time In A Day: {availableTimeDay}
                        </li>
                        <li className="flex items-center text-lg font-semibold mb-2">
                        <FaCircleArrowRight className="mr-2 text-[#80f221]"/>
                        Availbale Time In A Week: {availableTimeWeek}
                        </li>
                        <li className="flex items-center text-lg font-semibold mb-2">
                        <FaCircleArrowRight className="mr-2 text-[#80f221]"/>
                        Strong Skill: {category}
                        </li>
                        <li className="flex items-center text-lg font-semibold mb-2">
                        <FaCircleArrowRight className="mr-2 text-[#80f221]"/>
                        Professional Guidance
                        </li>
                        <li className="flex items-center text-lg font-semibold mb-2">
                        <FaCircleArrowRight className="mr-2 text-[#80f221]"/>
                        Motivating Atmosphere
                        </li>
                        
                    </ul>
                    <button className="mt-4 px-6 py-3 bg-[#80f221] text-black rounded-full font-semibold flex items-center text-xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#7ff22146]"> Join Now <FaArrowTrendUp  className="ml-2"/></button>
                    </div>
                    <div className="w-50% overflow-hidden">
                        <img src={profileImage} className="w-[70%] mx-auto rounded-b-full shadow-2xl cursor-zoom-in object-cover transition-transform transform-gpu hover:scale-110" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ClassDetails;