import { Link } from "react-router-dom";
import Cover from "../../Pages/Shared/Cover/Cover";
import { FaArrowTrendUp } from "react-icons/fa6";
import SectionTitle from "../SectionTitle/SectionTitle";


const TrainerBooked = () => {
    return (
        <div>
            <Cover coverTitle='Choice Plan' coverDescription='see defferent type of plan .which plan are you want to get'></Cover>

            <div className=" bg-base-200 py-20">
            <SectionTitle heading='Choice Your Plan'></SectionTitle>
                <div className="w-[70%] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                <div className='bg-white py-8 px-4 hover:shadow-[#7ff2219a] shadow-xl rounded-md hover:bg-[#7ff22146]'>
                    <div>
                    <h3 className='text-3xl font-semibold'>Silver Plan</h3>
                    <p className='text-[#80f221] font-extrabold'>_______________</p>
                    <h4 className="font-bold mb-2">Clases:</h4>
                    <ul>
                        <li className="ml-3">- 3 yoga classes per week</li>
                        <li className="ml-3 mb-2">- 2 cardio classes per week</li>
                    </ul>
                    <h4 className="font-bold mb-2">Facilities:</h4>
                    <ul>
                        <li className="ml-3">- Group workout sessions</li>
                        <li className="ml-3">- Locker room access</li>
                        <li className="ml-3">- Access to basic nutrition guidance</li>
                    </ul>
                    <p className='text-[#80f221] font-extrabold'>_______________</p>
                <Link to='/payment'>
                <button className="mt-4 px-4 py-3 bg-[#80f221] text-black rounded-full font-semibold flex items-center text-lg hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#ffffff46] mx-auto"> Join Now<FaArrowTrendUp  className="ml-2"/></button>
                </Link>
                </div>
                </div>
                <div className='bg-white py-8 px-4 hover:shadow-[#7ff2219a] shadow-xl rounded-md hover:bg-[#7ff22146]'>
                    <div>
                    <h3 className='text-3xl font-semibold'>Gold Plan</h3>
                    <p className='text-[#80f221] font-extrabold'>_______________</p>
                    <h4 className="font-bold mb-2">Clases:</h4>
                    <ul>
                        <li className="ml-3">- 3 yoga classes per week</li>
                        <li className="ml-3 mb-2">- 2 cardio classes per week</li>
                    </ul>
                    <h4 className="font-bold mb-2">Facilities:</h4>
                    <ul>
                        <li className="ml-3">- Sauna and steam room access</li>
                        <li className="ml-3">- Group workout sessions</li>
                        <li className="ml-3">- Access to nutrition consultation</li>
                    </ul>
                    <p className='text-[#80f221] font-extrabold'>_______________</p>
                <Link to='/payment'>
                <button className="mt-4 px-4 py-3 bg-[#80f221] text-black rounded-full font-semibold flex items-center text-lg hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#ffffff46] mx-auto"> Join Now<FaArrowTrendUp  className="ml-2"/></button>
                </Link>
                </div>
                </div>
                <div className='bg-white py-8 px-4 hover:shadow-[#7ff2219a] shadow-xl rounded-md hover:bg-[#7ff22146]'>
                    <div>
                    <h3 className='text-3xl font-semibold'>Diamond Plan</h3>
                    <p className='text-[#80f221] font-extrabold'>_______________</p>
                    <h4 className="font-bold mb-2">Clases:</h4>
                    <ul>
                        <li className="ml-3">- Unlimited yoga classes per week</li>
                        <li className="ml-3 mb-2">- Unlimited cardio classes per week</li>
                    </ul>
                    <h4 className="font-bold mb-2">Facilities:</h4>
                    <ul>
                        <li className="ml-3">- 24/7 access to gym equipment</li>
                        <li className="ml-3">- VIP locker room access</li>
                        <li className="ml-3">- Personal training sessions twice a week</li>
                    </ul>
                    <p className='text-[#80f221] font-extrabold'>_______________</p>
                <Link to='/payment'>
                <button className="mt-4 px-4 py-3 bg-[#80f221] text-black rounded-full font-semibold flex items-center text-lg hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#ffffff46] mx-auto"> Join Now<FaArrowTrendUp  className="ml-2"/></button>
                </Link>
                </div>
                </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerBooked;