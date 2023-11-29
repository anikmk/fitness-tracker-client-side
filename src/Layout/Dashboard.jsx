import { NavLink, Outlet } from "react-router-dom";
import { FaEnvelope, FaHome, FaList, FaSearch, FaUserCog, FaUserGraduate, FaUsers, FaWpforms } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { SiManageiq } from "react-icons/si";
import { MdLocalActivity, MdOutlineClass } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { useContext, } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import useAdmin from "../hooks/useAdmin";
import useCoach from "../hooks/useCoach";
import { FaCalendarPlus } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const [ isCoach, isCoachLoading] = useCoach();
  
  if (isAdminLoading) {
    return <div className="flex justify-center loading-spinner">Loading...</div>;
}
  if (isCoachLoading) {
    return <div className="flex justify-center loading-spinner">Loading...</div>;
}

        
    return (
        <>
        <Helmet>
            <title>Fitness Tracker | Dashboard</title>
        </Helmet>
        <div className=" lg:flex">
            <div className="w-64 h-screen bg-orange-400">
            <div className="text-center py-5">
            <div className="avatar  mr-4">
              <div className=" w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">              
                <img src={user?.photoURL} />
              </div>
            </div>
            <h2 className="pt-2 font-semibold"> {user?.displayName} </h2>
            <p> {user?.email} </p>
            </div>
                <ul className="menu text-base font-semibold">
                    {
                        isAdmin ? <>
                        <li>
                    <NavLink to='/dashboard/users'> 
                    <FaUsers />
                    All Users
                    </NavLink>
                    </li>
                        <li>
                    <NavLink to='/dashboard/subscribers'> 
                    <FaUsers />
                    All subscribers
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/alltrainers'> <FaUserGraduate />
                    All Trainers
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/appliedtrainer'> <FaList></FaList>
                    Applied Trainer
                    </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addnewforum'> <FaWpforms />
                        Add new Forum
                        </NavLink>
                        </li>
                    <li>
                    <NavLink to='/dashboard/balance'> <GiMoneyStack />
                    Balance
                    </NavLink>
                    </li>
                        </> : 
                        // Admin Trainer
                        isCoach ? 
                        <>
                        <li>
                        <NavLink to='/dashboard/manageslotes'> <SiManageiq />
                        Manage Slots
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to='/dashboard/managemembers'> <FaUserCog />
                        Manage member
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to='/dashboard/addnewforum'> <FaWpforms />
                        Add new Forum
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to='/dashboard/addnewclass'> <MdOutlineClass />
                        Add new Class
                        </NavLink>
                        </li>
                        </>
                        :
                        <>
                        <li>
                    <NavLink to='/dashboard/activitylog'> <MdLocalActivity />
                    Activity Log
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/memberprofile'> <IoMdSettings />
                    Profile Settings
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/recommended'> 
                    <FaCalendarPlus />
                    Recommended Classes
                    </NavLink>
                    </li>
                        </>
                    }
                    {/* divider */}
                    {/* shared menu items */}
                    <div className="divider"></div>
                    <li>
                    <NavLink to='/'> <FaHome></FaHome>
                     Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/order/salad'> <FaSearch></FaSearch>
                     Menu
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/order/contact'> <FaEnvelope></FaEnvelope>
                     Contact
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-7">
                <Outlet></Outlet>
            </div>
        </div>
        </>
    );
};

export default Dashboard;