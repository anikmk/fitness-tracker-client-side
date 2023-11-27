import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUserCog, FaUserGraduate, FaUsers, FaWpforms } from "react-icons/fa";
import { SiManageiq } from "react-icons/si";
import { MdOutlineClass } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Dashboard = () => {
    const {user} = useContext(AuthContext);

    const isAdmin = true;
    const isTrainer = false;
    return (
        <div className="flex">
            <div className="w-64 h-screen bg-orange-400">
            <div className="avatar  mr-4">
              <div className=" w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                
                <img src={user?.photoURL} />
              </div>
            </div>
                <ul className="menu text-base font-semibold">
                    {
                        isAdmin ? <>
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
                        isTrainer ? 
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
                    <NavLink to='/dashboard/userHome'> <FaHome></FaHome>
                    User Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar>
                    Reservation
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/'> <FaShoppingCart></FaShoppingCart>
                    My Cart 
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/review'> <FaAd></FaAd>
                    Review
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/bookings'> <FaAd></FaAd>
                    Bookings
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
    );
};

export default Dashboard;