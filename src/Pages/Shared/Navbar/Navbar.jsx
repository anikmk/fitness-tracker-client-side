import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogOutUser = () => {
    logOutUser();
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to='/trainer'>Trainer</Link>
      </li>
      <li>
        <Link>Classes</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link>Community</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-black text-white h-20 fixed z-10 bg-opacity-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Fitness Tracker</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="avatar  mr-4">
              <div className=" w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
            <button
              onClick={handleLogOutUser}
              className="px-6 py-3 bg-[#80f221] text-black rounded font-semibold flex items-center text-xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-white"
            >
              LogOut
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className=" px-6 py-3 bg-[#80f221] text-black rounded font-semibold flex items-center text-xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-white">
              {" "}
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
