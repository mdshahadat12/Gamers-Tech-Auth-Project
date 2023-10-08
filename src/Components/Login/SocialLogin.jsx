import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const SocialLogin = () => {
    const {signInWithGoogle,signInWithGitHub,setUser} = useContext(AuthContext)
    const handleLgin = (logIn) => {
        logIn()
        .then(result=>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error=>console.log(error))
    }
    return (
        <>
            <div className="inline-flex items-center justify-center w-full">
                 <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                 <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
            </div>
            <div className="flex justify-center gap-4">
                <button onClick={()=>handleLgin(signInWithGoogle)}><FcGoogle  className="text-5xl"></FcGoogle></button>
                <button onClick={()=>handleLgin(signInWithGitHub)}><AiFillGithub className="text-5xl"></AiFillGithub></button>
            </div>
        </>
    );
};

export default SocialLogin;