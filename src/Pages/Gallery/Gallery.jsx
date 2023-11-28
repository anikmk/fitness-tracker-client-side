import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import coverImg from '../../assets/gallery/cover1.jpg';
import { useInfiniteQuery } from "@tanstack/react-query";

const getArticles = async ({pageParam = 0}) => {
    const res = await fetch(`http://localhost:5000/trainer?offset=${pageParam}`);
    const data = await res.json();
    return {...data, prevOffset: pageParam}

}
const Gallery = () => {
    // getArticles()
    const {data,fetchNextPage,hasNextPage} = useInfiniteQuery({
        queryKey: ['articles'],
        queryFn:getArticles,
        getNextPageParam: (lastPage) => {
            if(lastPage.prevOffset + 10 > lastPage.articlesCount){
                return false;
            }
            return lastPage.prevOffset + 10;
        }
    })
   console.log(data)
    const articles = data?.pages.reduce((acc,page)=>{
        return [...acc,...page?.articles || []]
    },[])
    console.log(articles)
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