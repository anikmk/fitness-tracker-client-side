import { FaArrowTrendUp, FaCircleArrowRight } from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import blogImg from '../../../assets/community/community.jpg'
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <div className="bg-white py-12">
            <div className="w-[80%] mx-auto">
                <SectionTitle heading='Our Blogs'></SectionTitle>
                <div className="lg:flex flex-row-reverse items-center gap-12">
                    <div className="lg:w-[60%] w-[90%]">
                    <h3 className="text-3xl font-semibold mb-3">Lets Going On</h3>
                    <p className="mb-4">Welcome to our vibrant blog hub! Delve into insightful articles, expert advice, and engaging discussions on fitness, nutrition, and wellness. Explore a treasure trove of information, guiding you toward a healthier, fitter lifestyle.</p>
                    <ul className="ml-5 mb-8">
                        <li className="flex items-center text-lg font-semibold mb-2">
                        <FaCircleArrowRight className="mr-2 text-[#80f221]"/>
                        Fitness Insights: Dive into our expert-driven articles exploring the latest fitness trends, workout techniques, and wellness tips to elevate your fitness journey.
                        </li>
                        <li className="flex items-center text-lg font-semibold mb-2">
                        <FaCircleArrowRight className="mr-2 text-[#80f221]"/>
                        Nutrition Know-How: Explore comprehensive nutrition guides, recipes, and dietary insights designed to fuel your body and support a healthier lifestyle.
                        </li>
                        <li className="flex items-center text-lg font-semibold mb-2">
                        <FaCircleArrowRight className="mr-2 text-[#80f221]"/>
                        Exercise Explorations: Discover a wealth of exercise routines, training methodologies, and expert advice to optimize workouts and achieve your fitness aspirations.
                        </li>
                        
                    </ul>
                    <Link to='/blogdetails'>
                    <button className="mt-4 px-6 mb-5 md:mb-0 py-3 bg-[#80f221] text-black rounded-full font-semibold flex items-center text-xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#7ff22146]"> More <FaArrowTrendUp  className="ml-2"/></button>
                    </Link>
                    </div>
                    <div className="relative lg:mt-0 mt-6 lg:w-[40%] w-[90%]">
                        <img src={blogImg} className="" alt="" />
                        <div className="absolute top-[50%] left-28 text-white">
                        <h3>Our Story</h3>
                        <p>Founded by fitness enthusiasts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;