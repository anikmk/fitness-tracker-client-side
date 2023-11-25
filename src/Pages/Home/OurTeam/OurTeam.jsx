import { FaArrowTrendUp } from 'react-icons/fa6';
import coach1 from '../../../assets/home/team/coach1.jpg'
import coach2 from '../../../assets/home/team/coach2.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const OurTeam = () => {
  return (
    <div className="bg-[#eaf0f0] py-20">
      <div className="w-[80%] mx-auto">
        <SectionTitle heading='Our Teams' subHeading='"Our team at Your Fitness Tracker blends diverse expertise in fitness, technology, and community building, dedicated to empowering your wellness journey with innovative solutions and tailored guidance.'></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-100 hover:shadow-[#7ff2219a] shadow-xl rounded-md hover:bg-[#7ff22146]">
            <figure className="px-10 pt-6">
              <img
                src={coach1}
                alt="coach1"
                className="rounded-full w-[40%]"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-bold">Jhons meal | <span className='font-medium text-lg'>Founder & CEO</span></h2>
              <p className='text-[#80f221] font-extrabold -mt-3'>_______________</p>
              <p>John brings a decade of experience in fitness technology and a passion for making fitness accessible to everyone.</p>

              <div className="card-actions">
              <button className="mt-4 px-6 py-3 bg-[#80f221] text-black rounded-full font-semibold flex items-center text-xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#ffffff46]"> Start Today <FaArrowTrendUp  className="ml-2"/></button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 hover:shadow-[#7ff2219a] shadow-xl rounded-md hover:bg-[#7ff22146]">
            <figure className="px-10 pt-6">
              <img
                src={coach1}
                alt="coach1"
                className="rounded-full w-[40%]"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-bold">Alex Johnson | <span className='font-medium text-lg'>Head of Fitness Content</span></h2>
              <p className='text-[#80f221] font-extrabold -mt-3'>_______________</p>
              <p>With a background in nutrition and fitness coaching, Jane curates our workout plans and nutrition content</p>

              <div className="card-actions">
              <button className="mt-4 px-6 py-3 bg-[#80f221] text-black rounded-full font-semibold flex items-center text-xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#ffffff46]"> Start Today <FaArrowTrendUp  className="ml-2"/></button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 hover:shadow-[#7ff2219a] shadow-xl rounded-md hover:bg-[#7ff22146]">
            <figure className="px-10 pt-6">
              <img
                src={coach1}
                alt="coach1"
                className="rounded-full w-[40%]"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-bold">Jhons meal | <span className='font-medium text-lg'>Community Manager</span></h2>
              <p className='text-[#80f221] font-extrabold -mt-3'>_______________</p>
              <p>Sarah fosters our vibrant fitness community, engaging users and ensuring a supportive environment.</p>

              <div className="card-actions">
              <button className="mt-4 px-6 py-3 bg-[#80f221] text-black rounded-full font-semibold flex items-center text-xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#ffffff46]"> Start Today <FaArrowTrendUp  className="ml-2"/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
