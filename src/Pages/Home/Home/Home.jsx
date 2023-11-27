import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import NewsLatter from "../NewsLatter/NewsLatter";
import OurTeam from "../OurTeam/OurTeam";
import Testimonials from "../Testimonials/Testimonials";
import Blog from "../Blog/Blog";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Fitness Tracker | Home</title>
            </Helmet>
           <Banner></Banner>
           <Featured></Featured>
           <About></About>
           <OurTeam></OurTeam>
           <Blog></Blog>
           <Testimonials></Testimonials>
           <NewsLatter></NewsLatter>
        </div>
    );
};

export default Home;