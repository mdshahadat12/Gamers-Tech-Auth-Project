import { useContext } from "react";
import ProfilePic from "../assets/Logo.png";
import { AuthContext } from "../Context/AuthProvider";

const Profile = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className="my-10">
            <div><img className="h-[150px] w-[150px] rounded-full mx-auto my-10" src={user?.photoURL?user?.photoURL:ProfilePic} alt="" /></div>
            <h1 className="text-center text-xl font-semibold">Name: {user?.displayName}</h1>
            <div className="grid grid-cols-2 my-10">
                <div className="px-20">
                    <h2 className="text-left">E-mail</h2>
                    <h2 className="text-right">{user?.email}</h2>
                    <hr />
                    <h2 className="text-left">Country</h2>
                    <h2 className="text-right">Bangladesh</h2>
                    <hr />
                    <h2 className="text-left">Phone</h2>
                    <h2 className="text-right">+8801738915326</h2>
                    
                </div>
                <div className="px-20">
                    <h2 className="text-left">Address</h2>
                    <h2 className="text-right">Sherpur, Bogura, Bangladesh</h2>
                    <hr />
                    <h2 className="text-left">Date of Birth</h2>
                    <h2 className="text-right">25-02-2003</h2>
                    <hr />
                    <h2 className="text-left">Phone</h2>
                    <h2 className="text-right">+8801738915326</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;