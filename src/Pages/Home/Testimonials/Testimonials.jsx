import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import useReview from "../../../hooks/useReview";

const Testimonials = () => {
  const [reviews] = useReview();
  return (
    <div className="py-20 mx-20">
      <SectionTitle
        heading="Whats Our Client Say"
        subHeading="Real Stories, Real Transformations"
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p> {review.details} </p>
              <p> {review.name} </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
