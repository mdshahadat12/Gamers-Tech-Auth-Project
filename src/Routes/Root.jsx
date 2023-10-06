import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Layout from "../Pages/Layout";
import Registration from "../Pages/registration";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Dashboard from "../Pages/Dashboard";


const Router = createBrowserRouter([
    {
        path: "/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/registration",
                element: <Registration></Registration>
            },
            {
                path:"/profile",
                element: <Profile></Profile>
            },
            {
                path:"/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path:"/about",
                element:<About></About>
            }
        ]
    }
])



export default Router;