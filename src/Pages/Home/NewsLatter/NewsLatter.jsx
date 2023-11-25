import { FaArrowTrendUp } from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import newslatter from "../../../assets/home/newslatter/newslatter.svg";

const NewsLatter = () => {
  return (
    <div className="bg-base-300 py-12 border-b-2 border-[#80f221]">
      <div className="w-[80%] mx-auto">
        <div className="md:flex items-center">
          <div className="w-[50%] lg:mr-12">
            <img src={newslatter} alt="" />
          </div>
          <div className="w-[50%] flex flex-col items-center">
            <SectionTitle
              heading="Newslatter"
              subHeading="subscrive to our newslatter and stay update"
            ></SectionTitle>
            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Enter Your Name.."
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="Enter Your Email.."
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="">
                <button className="mt-4 px-6 py-3 bg-[#80f221] text-black rounded-full font-semibold flex items-center text-xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#7ff22146] text-center"> Subscrive Now<FaArrowTrendUp  className="ml-2"/></button>
                </div>
                </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
