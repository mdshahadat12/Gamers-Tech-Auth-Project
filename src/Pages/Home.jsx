import Banner from "../Components/Home/Banner";
import CardContainer from "../Components/Home/CardContainer";
import Message from "../Components/Home/Message";
import About from "./About";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-2xl text-center font-bold">Our Running Events</h1>
            <CardContainer></CardContainer>
            <h1 className="text-2xl text-center font-bold">Our Upcomming Events</h1>
            <CardContainer></CardContainer>
            <About></About>
            <Message></Message>
        </div>
    );
};

export default Home;