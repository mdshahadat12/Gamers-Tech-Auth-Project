import Banner from "../Components/Home/Banner";
import CardContainer from "../Components/Home/CardContainer";
import CardContainerUpComming from "../Components/Home/CardContainerUpComming";
import Message from "../Components/Home/Message";
import About from "./About";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Home = () => {
    return (
        <div>
            <div data-aos="fade-up"><Banner></Banner></div>
            <h1 className="text-2xl text-center font-bold">Our Running Events</h1>
            <CardContainer></CardContainer>
            <h1 className="text-2xl text-center font-bold">Our Upcomming Events</h1>
            <CardContainerUpComming></CardContainerUpComming>
            <About></About>
            <Message></Message>
        </div>
    );
};

export default Home;