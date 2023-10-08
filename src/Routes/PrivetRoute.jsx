/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  if (user) {
    return <div>{children}</div>;
  }else{
    navigate("/login");
  }
};

export default PrivetRoute;
