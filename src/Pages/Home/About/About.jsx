import { FaCircleArrowRight,FaArrowTrendUp  } from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import aboutimage1 from '../../../assets/home/banner/slider1.jpg'

const About = () => {
    return (
        <div className="bg-white py-12">
            <div className="w-[80%] mx-auto">
                <SectionTitle heading='About Us'></SectionTitle>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="">
                    <h3 className="text-3xl font-semibold mb-3">Body & mind</h3>
                    <p className="mb-4">Pilates is a low-impact, resistance-based fitness program. Pilates can be modified for any fitness level from patients requiring rehabilitation-based fitness to elite athletes.</p>
                    <ul className="ml-5 mb-8">
                        <li className="flex items-center text-lg font-semibold mb-2">
                        <FaCircleArrowRight className="mr-2 text-[#80f221]"/>
                        Teaching bodyawareness
                        </li>
                        <li className="flex items-center text-lg font-semibold mb-2">
                        <FaCircleArrowRight className="mr-2 text-[#80f221]"/>
                        Promoting good posture with easy graceful movement
                        </li>
                        <li className="flex items-center text-lg font-semibold mb-2">
                        <FaCircleArrowRight className="mr-2 text-[#80f221]"/>
                        Improving flexibility, agility and economy of motion
                        </li>
                        <li className="flex items-center text-lg font-semibold mb-2">
                        <FaCircleArrowRight className="mr-2 text-[#80f221]"/>
                        Toning and strengthening the body
                        </li>
                        <li className="flex items-center text-lg font-semibold mb-2">
                        <FaCircleArrowRight className="mr-2 text-[#80f221]"/>
                        Rehabilitation-based fitness
                        </li>
                        
                    </ul>
                    <button className="mt-4 px-6 mb-5 md:mb-0 py-3 bg-[#80f221] text-black rounded-full font-semibold flex items-center text-xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#7ff22146]"> Start Today <FaArrowTrendUp  className="ml-2"/></button>
                    </div>
                    <div className="relative">
                        <img width={500} src={aboutimage1} className="" alt="" />
                        <div className="absolute top-20 left-20 text-white">
                        <h3>Our Story</h3>
                        <p>Founded by fitness enthusiasts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;