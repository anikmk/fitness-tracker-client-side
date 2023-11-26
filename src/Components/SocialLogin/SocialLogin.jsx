import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleLogin()
        .then(result=>{
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name:result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                console.log(res.data)
                navigate('/');
            })
        })
    }
    return (
        <div>
            <div>
            <button onClick={handleGoogleSignIn} className="btn btn-primary flex mx-auto mb-3">
               <FaGoogle></FaGoogle> LogIn with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;