import Cover from "../../Shared/Cover/Cover";
import blogImg from '../../../assets/community/community.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";


const BlogDetails = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/blog.json')
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data)
        })
    },[])
    return (
        <div>
            <Cover img={blogImg} coverTitle='Our Blogs' coverDescription='Welcome to our vibrant blog hub! Delve into insightful articles, expert advice, and engaging discussions on fitness, nutrition, and wellness. Explore a treasure trove of information, guiding you toward a healthier, fitter lifestyle.'></Cover>
            <div className="py-14">
                <SectionTitle heading='What You Know' subHeading='Embark on a wellness journey with our blog oasis. Uncover fitness tips, nutritional insights, and holistic wellness advice. Let our articles inspire and guide you toward a healthier, happier life.'></SectionTitle>
            </div>
            <div className="w-[80%] mx-auto">
                <div className="">
                    <div>
                        {
                            blogs.map(blog=><div key={blog.postId} className="hero bg-base-200 mb-10">
                            <div className="hero-content flex-col lg:flex-row">
                              <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                              <div>
                                <h1 className="lg:text-2xl text-xl font-bold"> {blog.title} </h1>
                                <p className="py-2 font-bold"> {blog.author} </p>
                                <p className="py-2"> {blog.content} </p>
                                <p className="py-2 font-bold"> {blog.category} </p>
                                <p className="py-2">Publish: {blog.date} </p>
                              </div>
                            </div>
                          </div>)
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BlogDetails;