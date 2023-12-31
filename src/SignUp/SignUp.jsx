import logo from '../../src/assets/login/authentication2.png'
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SocialLogin from "../Components/SocialLogin/SocialLogin";


const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {register,handleSubmit, reset, formState: { errors } } = useForm();
  const {createUser,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit= (data) => {
    console.log(data)
    createUser(data.email,data.password)
    .then(result=>{
      console.log(result.user)
      updateUserProfile(data.name,data.photoURL)
      .then(()=>{
        // create user entry in the database
        const userInfo = {
          name:data.name,
          email:data.email,
          role:'member'
        }
        axiosPublic.post('/users', userInfo)
        .then(res=>{
          if(res.data.insertedId){
            console.log('user aadded to the data base')
            reset();
         Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
          }
        })
        
      })
      .catch(error=>{
        console.log(error.message)
      })
    })
    .catch(error=>{
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: `${error.message}`,
        showConfirmButton: false,
        timer: 2000
      });
    })
}

  // console.log(watch("example")) 
  return (
   <>
   <Helmet>
    <title>
      Fitness Tracker | SignUp
    </title>
   </Helmet>
    <div className="hero  py-24 bg-base-200">
    <div className="hero-content grid grid-cols-1 md:first-letter lg:grid-cols-2">
      <div className="text-center lg:text-left">
        <img className='w-full' src={logo} alt="" />
      </div>
      <div className="card shrink-0 lg:w-[70%] shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name",{ required: true })}
              placeholder="name"
              className="input input-bordered"
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">photo URL</span>
            </label>
            <input
              type="text"
              name="name"
              {...register("photoURL",{ required: true })}
              placeholder="photo URL"
              className="input input-bordered"
            />
            {errors.name && <span>photo URL is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              {...register("email",{ required: true })}
              placeholder="email"
              className="input input-bordered"
            />
            {errors.name && <span>photo URL is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              {...register("password")}
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value='Sign Up' />
          </div>
        </form> 

        <SocialLogin></SocialLogin>
        <p className="text-center pb-4 text-lg">Already have an account <Link to='/login' className="text-blue-600">Sign In</Link> </p>
      </div>
    </div>
    </div>
   </>
)};

export default SignUp;
