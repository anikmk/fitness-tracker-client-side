import { FaArrowTrendUp } from 'react-icons/fa6';
import errorImg from '../../assets/errorPage/error.svg'

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <img className='flex mx-auto mt-6' width={400} src={errorImg} alt="" />
            <div className='mt-10'>
            <p> Opps Page Not Found </p>
            <button className="mt-4 px-6 py-3 bg-[#80f221] text-black rounded-full font-semibold flex items-center text-xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#ffffff46] mx-auto"> Go Back<FaArrowTrendUp  className="ml-2"/></button>
            </div>
        </div>
    );
};

export default ErrorPage;