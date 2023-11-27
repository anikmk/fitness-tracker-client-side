import  { useState } from 'react';

const ClassesSchedule = () => {
  const [activeTab, setActiveTab] = useState(1); // State to manage active tab

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="bg-base-300 py-12">
      <div className="w-[70%] mx-auto text-center">
        <div className="weekly-schedule">
          <div role="tablist" className="tabs tabs-lifted">
            {/* Tab 1 */}
            <input
              type="radio"
              id="tab1"
              name="my_tabs_2"
              role="tab"
              className="tab visually-hidden"
              aria-label="Saturday"
              checked={activeTab === 1}
              onChange={() => handleTabClick(1)}
            />
            
            <div role="tabpanel" className={`tab-content ${activeTab === 1 ? 'block' : 'hidden'}`}>
              <div className='bg-white p-10'>
                <div className='space-y-3'>
                <h2 className='text-3xl pb-3 mb-3 font-bold border-b-2 border-[#80f221]'>Saturday Schedule</h2>
                    <h2 className='text-lg font-semibold'> <span className='text-xl font-bold mr-3'>Exercise:(2Hours) ____ </span> 9 PM - 11 PM (Min)</h2>
                    <h2 className='text-lg font-semibold'> <span className='text-xl font-bold mr-3'>Exercise:(1:30Hours) ____ </span> 9:30 PM - 11:30 PM</h2>
                    <h2 className='text-lg font-semibold'> <span className='text-xl font-bold mr-3'>Exercise:(2Hours) ____ </span> 12 AM - 2 AM (Min)</h2>
                    <h2 className='text-lg font-semibold'> <span className='text-xl font-bold mr-3'>Exercise:(3:30Hours) ____ </span> 2:30 AM - 5 AM</h2>
                </div>
                
              </div>
            </div>

            {/* Tab 2 */}
            <input
              type="radio"
              id="san"
              name="my_tabs_2"
              role="tab"
              className="tab visually-hidden"
              aria-label="Monday"
              checked={activeTab === 2}
              onChange={() => handleTabClick(2)}
            />
            
            <div role="tabpanel" className={`tab-content ${activeTab === 2 ? 'block' : 'hidden'}`}>
            <div className='bg-white p-10'>
                <div className='space-y-3'>
                    <h2 className='text-3xl pb-3 mb-3 font-bold border-b-2 border-[#80f221]'>Monday Schedule</h2>
                <h2 className='text-lg font-semibold'> <span className='text-xl font-bold mr-3'>Exercise:(2Hours) ____ </span> 9 PM - 11 PM (Min)</h2>
                    <h2 className='text-lg font-semibold'> <span className='text-xl font-bold mr-3'>Exercise:(1:30Hours) ____ </span> 9:30 PM - 11:30 PM</h2>
                    <h2 className='text-lg font-semibold'> <span className='text-xl font-bold mr-3'>Exercise:(2Hours) ____ </span> 12 AM - 2 AM (Min)</h2>
                    <h2 className='text-lg font-semibold'> <span className='text-xl font-bold mr-3'>Exercise:(3:30Hours) ____ </span> 2:30 AM - 5 AM</h2>
                </div>
                
              </div>
            </div>

            {/* Tab 3 */}
            <input
              type="radio"
              id="tab3"
              name="my_tabs_2"
              role="tab"
              className="tab visually-hidden"
              aria-label="WednessDay"
              checked={activeTab === 3}
              onChange={() => handleTabClick(3)}
            />

            <div role="tabpanel" className={`tab-content ${activeTab === 3 ? 'block' : 'hidden'}`}>
            <div className='bg-white p-10'>
                <div className='space-y-3'>
                <h2 className='text-3xl pb-3 mb-3 font-bold border-b-2 border-[#80f221]'>WednessDay Schedule</h2>
                    <h2 className='text-lg font-semibold'> <span className='text-xl font-bold mr-3'>Exercise:(2Hours) ____ </span> 9 PM - 11 PM (Min)</h2>
                    <h2 className='text-lg font-semibold'> <span className='text-xl font-bold mr-3'>Exercise:(1:30Hours) ____ </span> 9:30 PM - 11:30 PM</h2>
                    <h2 className='text-lg font-semibold'> <span className='text-xl font-bold mr-3'>Exercise:(2Hours) ____ </span> 12 AM - 2 AM (Min)</h2>
                    <h2 className='text-lg font-semibold'> <span className='text-xl font-bold mr-3'>Exercise:(3:30Hours) ____ </span> 2:30 AM - 5 AM</h2>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesSchedule;
