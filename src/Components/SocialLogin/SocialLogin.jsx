import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";


const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleLogin()
        .then(result=>{
            console.log(result.user)
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