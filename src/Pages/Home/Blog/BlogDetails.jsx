import Cover from "../../Shared/Cover/Cover";
import blogImg from '../../../assets/community/community.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const BlogDetails = () => {
    return (
        <div>
            <Cover img={blogImg} coverTitle='Our Blogs' coverDescription='Welcome to our vibrant blog hub! Delve into insightful articles, expert advice, and engaging discussions on fitness, nutrition, and wellness. Explore a treasure trove of information, guiding you toward a healthier, fitter lifestyle.'></Cover>
            <div className="py-14">
                <SectionTitle heading='What You Know' subHeading='Embark on a wellness journey with our blog oasis. Uncover fitness tips, nutritional insights, and holistic wellness advice. Let our articles inspire and guide you toward a healthier, happier life.'></SectionTitle>

            </div>
        </div>
    );
};

export default BlogDetails;