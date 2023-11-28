import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import coverImg from '../../assets/gallery/cover1.jpg';
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from 'react-infinite-scroll-component';
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const getArticles = async ({ pageParam = 0 }) => {
    const res = await fetch(`http://localhost:5000/trainer?offset=${pageParam}`);
    const data = await res.json();
    return { ...data, prevOffset: pageParam };
};

const Gallery = () => {
    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ['articles'],
        queryFn: getArticles,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffset + 10 > lastPage.articlesCount) {
                return false;
            }
            return lastPage.prevOffset + 10;
        }
    });

    console.log("Data:", data); // Log the entire data object to inspect its structure

    const articles = data?.result?.articles || []; // Modify the structure to match your data
    console.log(articles)
    return (
        <div>
            <Helmet>
                <title>Fitness Tracker | Gallery</title>
            </Helmet>
            <Cover
                img={coverImg}
                coverTitle='Our Gallery'
                coverDescription='Explore our gallery slider showcasing vibrant snapshots of our fitness community in action. From workout sessions to success stories, immerse yourself in the inspiring moments shared by users, highlighting dedication, progress, and the spirit of achieving fitness goals together'
            />
            <div>
                <SectionTitle heading='Our Gallery' />
            </div>
            <div>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchNextPage}
                    hasMore={hasNextPage}
                    loader={<div>Loading.....</div>}
                >
                    <div className="">
                        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4">
                            {articles.map((article, index) => (
                                <div className="border-2 p-2 bg-slate-200 rounded" key={index}>
                                    <p> {index + 1} </p>
                                    <h3>{article.category}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default Gallery;
