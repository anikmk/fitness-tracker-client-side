import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";

const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                        <li>
                    <NavLink to='/dashboard/subscribers'> <FaUser></FaUser>
                    All subscribers
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/alltrainers'> <FaUtensils></FaUtensils>
                    All Trainers
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/appliedtrainer'> <FaList></FaList>
                    Applied Trainer
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/balance'> <FaBook></FaBook>
                    Balance
                    </NavLink>
                    </li>
                        </> : <>
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