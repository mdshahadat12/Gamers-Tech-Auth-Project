import ProfilePic from "../assets/Logo.png";

const Profile = () => {
    return (
        <div className="h-[80vh]">
            <div><img className="h-[150px] w-[150px] rounded-full mx-auto my-10" src={ProfilePic} alt="" /></div>
            <h1 className="text-center text-xl font-semibold">Name: Md Shahadat</h1>
            <div className="grid grid-cols-2 my-10">
                <div className="px-20">
                    <h2 className="text-left">E-mail</h2>
                    <h2 className="text-right">mdsadt2@gmail.com</h2>
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