
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/Footer';

const Layout = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;