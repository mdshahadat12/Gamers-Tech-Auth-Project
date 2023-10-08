/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({ children }) => {
  const { user,loading } = useContext(AuthContext);
  if(loading){
    return <div className="h-[450px] flex justify-center items-center"><span>Loading..</span></div>
  }
  if (user) {
    return <div>{children}</div>;
  }else{
    return <Navigate to={"/login"}></Navigate>
  }
};

export default PrivetRoute;
