import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import coverImg from '../../assets/gallery/cover1.jpg'

const Gallery = () => {
    return (
        <div>
            <Helmet>
                <title>Fitness Tracker | Gallery</title>
            </Helmet>
            <Cover img={coverImg} coverTitle='Our Gallery' coverDescription='Explore our gallery slider showcasing vibrant snapshots of our fitness community in action. From workout sessions to success stories, immerse yourself in the inspiring moments shared by users, highlighting dedication, progress, and the spirit of achieving fitness goals together'></Cover>
        </div>
    );
};

export default Gallery;