import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import feature1 from '../../../assets/home/feature/undraw_personal_trainer_re_cnua.svg'

const Featured = () => {
    return (
       <div className='bg-[#eaf0f0] py-20'>
        <div className='w-[80%] mx-auto'>
            <SectionTitle heading='Our Features' subHeading='Our Fitness Tracker offers comprehensive features designed to help you achieve your fitness goals efficiently. Track your workouts, monitor your progress, and stay motivated with our suite of features'></SectionTitle>
         <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-white py-8 px-4 hover:shadow-[#7ff2219a] shadow-xl rounded-md hover:bg-[#7ff22146]'>
                <div> <img width='100px' height='100px' className='rounded-b-full bg-[#80f221] p-2 mb-2' src={feature1} alt="" /> </div>
                <div>
                    <h3 className='text-3xl font-semibold'>Strength & Resistance</h3>
                    <p className='text-[#80f221] font-extrabold'>_______________</p>
                    <p>Engage in strength-building exercises such as weightlifting, resistance training, and bodyweight workouts. Track progress in muscle strength and endurance over time.</p>
                </div>
            </div>
            <div className='bg-white py-8 px-4 hover:shadow-[#7ff2219a] shadow-xl rounded-md hover:bg-[#7ff22146]'>
                <div> <img width='100px' height='100px' className='rounded-b-full bg-[#80f221] p-2 mb-2' src={feature1} alt="" /> </div>
                <div>
                    <h3 className='text-3xl font-semibold'>Strength & Resistance</h3>
                    <p className='text-[#80f221] font-extrabold'>_______________</p>
                    <p>Engage in strength-building exercises such as weightlifting, resistance training, and bodyweight workouts. Track progress in muscle strength and endurance over time.</p>
                </div>
            </div>
            <div className='bg-white py-8 px-4 hover:shadow-[#7ff2219a] shadow-xl rounded-md hover:bg-[#7ff22146]'>
                <div> <img width='100px' height='100px' className='rounded-b-full bg-[#80f221] p-2 mb-2' src={feature1} alt="" /> </div>
                <div>
                    <h3 className='text-3xl font-semibold'>Strength & Resistance</h3>
                    <p className='text-[#80f221] font-extrabold'>_______________</p>
                    <p>Engage in strength-building exercises such as weightlifting, resistance training, and bodyweight workouts. Track progress in muscle strength and endurance over time.</p>
                </div>
            </div>
            <div className='bg-white py-8 px-4 hover:shadow-[#7ff2219a] shadow-xl rounded-md hover:bg-[#7ff22146]'>
                <div> <img width='100px' height='100px' className='rounded-b-full bg-[#80f221] p-2 mb-2' src={feature1} alt="" /> </div>
                <div>
                    <h3 className='text-3xl font-semibold'>Strength & Resistance</h3>
                    <p className='text-[#80f221] font-extrabold'>_______________</p>
                    <p>Engage in strength-building exercises such as weightlifting, resistance training, and bodyweight workouts. Track progress in muscle strength and endurance over time.</p>
                </div>
            </div>
            <div className='bg-white py-8 px-4 hover:shadow-[#7ff2219a] shadow-xl rounded-md hover:bg-[#7ff22146]'>
                <div> <img width='100px' height='100px' className='rounded-b-full bg-[#80f221] p-2 mb-2' src={feature1} alt="" /> </div>
                <div>
                    <h3 className='text-3xl font-semibold'>Strength & Resistance</h3>
                    <p className='text-[#80f221] font-extrabold'>_______________</p>
                    <p>Engage in strength-building exercises such as weightlifting, resistance training, and bodyweight workouts. Track progress in muscle strength and endurance over time.</p>
                </div>
            </div>
            <div className='bg-white py-8 px-4 hover:shadow-[#7ff2219a] shadow-xl rounded-md hover:bg-[#7ff22146]'>
                <div> <img width='100px' height='100px' className='rounded-b-full bg-[#80f221] p-2 mb-2' src={feature1} alt="" /> </div>
                <div>
                    <h3 className='text-3xl font-semibold'>Strength & Resistance</h3>
                    <p className='text-[#80f221] font-extrabold'>_______________</p>
                    <p>Engage in strength-building exercises such as weightlifting, resistance training, and bodyweight workouts. Track progress in muscle strength and endurance over time.</p>
                </div>
            </div>
        </div>
       </div>
       </div>
    );
};

export default Featured;