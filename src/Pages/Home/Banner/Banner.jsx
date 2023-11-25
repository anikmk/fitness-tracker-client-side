import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from '../../../assets/home/banner/slider1.jpg'
import slider2 from '../../../assets/home/banner/slider2.jpg'
import slider3 from '../../../assets/home/banner/slider3.jpg'
import slider4 from '../../../assets/home/banner/slider4.jpg'
import './banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <Carousel>
           <div className="relative">
                <img src={slider1} alt="Slider 1" />
                <div className="absolute inset-0 flex items-center justify-center top-56">
                    <div className="bg-gradient-to-b from-transparent to-black p-8 text-center w-full h-full">
                        <h2 className="text-white text-4xl font-bold mb-4">Community Fitness <br /> Together Towards Wellness</h2>
                        <p className="text-white text-lg">Join our vibrant fitness community where support, motivation, and progress intersect. <br /> Embrace the journey towards better health alongside like-minded individuals. <br /> Together, we achieve our fitness goals and celebrate every milestone.</p>
                        <Link>
                        <button className="mt-4 px-6 py-2 bg-[#80f221] text-black rounded-full font-semibold">Show Classes</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src={slider2} alt="Slider 2" />
                <div className="absolute inset-0 flex items-center justify-center top-56">
                    <div className="bg-gradient-to-b from-transparent to-black p-8 text-center w-full h-full">
                        <h2 className="text-white text-4xl font-bold mb-4">Heading Title 2</h2>
                        <p className="text-white text-lg">Short Description 2</p>
                        <Link>
                        <button className="mt-4 px-6 py-2 bg-[#80f221] text-black rounded-full font-semibold">Show Classes</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src={slider3} alt="Slider 2" />
                <div className="absolute inset-0 flex items-center justify-center top-56">
                    <div className="bg-gradient-to-b from-transparent to-black p-8 text-center w-full h-full">
                        <h2 className="text-white text-4xl font-bold mb-4">Heading Title 2</h2>
                        <p className="text-white text-lg">Short Description 2</p>
                        <Link>
                        <button className="mt-4 px-6 py-2 bg-[#80f221] text-black rounded-full font-semibold">Show Classes</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src={slider4} alt="Slider 2" />
                <div className="absolute inset-0 flex items-center justify-center top-56">
                    <div className="bg-gradient-to-b from-transparent to-black p-8 text-center w-full h-full">
                        <h2 className="text-white text-4xl font-bold mb-4">Heading Title 2</h2>
                        <p className="text-white text-lg">Short Description 2</p>
                        <Link>
                        <button className="mt-4 px-6 py-2 bg-[#80f221] text-black rounded-full font-semibold">Show Classes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;