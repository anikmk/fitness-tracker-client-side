import { Link, useLoaderData } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import { FaArrowTrendUp } from "react-icons/fa6";

const TrainerDetails = () => {
    const detailsInfo = useLoaderData([]);
    const {slot} = detailsInfo;
    console.log(slot.length)
    // console.log(detailsInfo.slot.length)
    return (
        <div>
            <Cover coverTitle='Trainer Details' coverDescription='Meet our skilled trainers! With diverse expertise and years of experience, our dedicated team offers tailored guidance and motivation. Personalized sessions cater to your fitness goals, ensuring an empowering journey toward a healthier, fitter you.'></Cover>
            <div className="w-[70%] mx-auto py-14">
                <Link to='/trainerbooked'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-14 gap-6">
                   {
                    slot.map(singleSlot=> <div
                    key={singleSlot.slotId}
                     className="bg-slate-200 shadow-xl rounded py-5 px-10">
                    <div className="space-y-3">
                    <h2 className="text-xl font-semibold">Available Slots</h2>
                    <p>Total available hours: {slot.length} </p>
                    <p>Total available slots: {singleSlot.availableTime} </p>
                    </div>

                </div>)
                   }

                </div>
                </Link>
                <Link to='/betrainer'>
                <button className="mt-4 px-6 py-3 bg-[#80f221] text-black rounded-full font-semibold flex items-center text-xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#ffffff46] mx-auto"> Know More<FaArrowTrendUp  className="ml-2"/></button>
                </Link>
            </div>
           
        </div>
    );
};

export default TrainerDetails;
