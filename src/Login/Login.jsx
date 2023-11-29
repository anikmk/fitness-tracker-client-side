import logo from '../assets/login/authentication2.png'
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Components/SocialLogin/SocialLogin";



const Login = () => {
  const {loginUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = {email,password}
        console.log(userInfo)
        if(password.length <  6){
          Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "password must be 6 chr",
            showConfirmButton: false,
            timer: 1500
          });
        }
        loginUser(email,password)
        .then(result=>{
          console.log(result.user)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from,{replace:true});
        })
        .catch(error=>{
          Swal.fire({
            position: "top-end",
            icon: "warning",
            title: `${error.message} Check your Pass or email`,
            showConfirmButton: false,
            timer: 2000
          });
        })
    }
    return (
        <>
        <Helmet>
          <title>Fitness Tracker | Sign In</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
            <div className="text-center  lg:text-left">
            <img src={logo} alt="" />
            </div>
            <div className="card shrink-0 lg:w-[70%] file:shadow-2xl bg-base-100">
              <form onSubmit={handleSignIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input type="submit" className="btn btn-primary" value='Sign IN'/>
                </div>
              </form>
              <SocialLogin></SocialLogin>
              <p className="text-center pb-4 text-lg">do not have an account <Link to='/signup' className="text-blue-600">Sign Up</Link> </p>
            </div>
          </div>
        </div>
        </>
    );
};

export default Login;