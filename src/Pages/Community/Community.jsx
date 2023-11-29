import Cover from "../Shared/Cover/Cover";
import communityImg from '../../assets/community/community.jpg'
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import { Helmet } from "react-helmet-async";

const Community = () => {
    const axiosPublic = useAxiosPublic();
    const [communites,setCommunites] = useState([]);
    axiosPublic.get('/entryforum')
    .then(res=>{
        setCommunites(res.data)
    })
    const handleLike = (id,prevLike) => {
            const info = {
                like:prevLike
            }
        axiosPublic.patch(`/entryforum/${id}`,info)
        .then(res=>{
            console.log(res.data)
        })
    }
    const handleDisLike = (id,prevDislike) => {
            const info = {
                dislike:prevDislike
            }
        axiosPublic.patch(`/entryforum/${id}`,info)
        .then(res=>{
            console.log(res.data)
        })
    }
    return (
        <div>
            <Helmet>
                <title>Fitness Tracker | Community</title>
            </Helmet>
            <Cover img={communityImg} coverTitle='Vibrant Community' coverDescription='Dive into Thought-provoking Posts: Explore a diverse range of discussions, from queries to solutions, fostering an inclusive space for knowledge exchange and interactive engagement within our community forum.'></Cover>
            <div className="py-14">
                <SectionTitle heading='Gain knowledge' subHeading='Explore Community Conversations: Engage with Varied Topics, Ask Queries, and Share Insights. An Interactive Space Fostering Learning, Support, and Knowledge Sharing Amongst Participants.'></SectionTitle>
            </div>
            <div className="w-[80%] mx-auto pb-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    communites.map(community=><div key={community._id} className="bg-base-300 p-6 text-center">
                    <h2> <span className="text-xl font-bold">Question: </span> {community.question} </h2>
                    <p> <span className="text-xl font-bold">Answer: </span> {community.answer} </p>
                    <div className="flex justify-between">
                    <button onClick={()=>handleLike(community._id,community.like)} className="mt-5 bg-[#80f221] text-black rounded-full font-semibold text-2xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#ffffff46]">
                        <div className="flex">
                        <AiTwotoneLike /><span> {community.like} </span>
                        </div>
                    </button>

                    <button onClick={()=>handleDisLike(community._id,community.dislike)} className="mt-5 px-2 py-2 bg-[#80f221] text-black rounded-full font-semibold text-2xl hover:shadow-[#7ff2219a] shadow-xl hover:bg-[#ffffff46]"><AiTwotoneDislike /> <span> {community.dislike} </span> </button>
                    </div>
                </div>)
                }

                </div>
            </div>
        </div>
    );
};

export default Community;