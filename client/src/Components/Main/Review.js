import React from "react";
import ReviewComp from "./ReviewComp";
import { Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import img1 from "../Img/pic1.png";
import img2 from "../Img/pic2.png";
import img3 from "../Img/pic3.png";
import img4 from "../Img/pic4.png";

import "swiper/css";

const Review = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="section">
      <div className="review" id="review">
        <h1 className="heading">
          <span>R</span>
          <span>E</span>
          <span>V</span>
          <span>I</span>
          <span>E</span>
          <span>W</span>
        </h1>

        <Swiper
          autoplay={{ delay: 3000 }}
          className="review-slider"
          style={{ height: "55%" }}
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <ReviewComp
              link={img1}
              name="Shruthi"
              data="I love the food and the service of this app. I am a regular customer here and I am very happy with the service."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewComp
              link={img2}
              name="Shubham"
              data="This App is the best app for food delivery. I have never seen such an app before. It is very user friendly and easy to use. I would recommend this app to everyone."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewComp
              link={img3}
              name="stellaa"
              data="This is the best food delivery app I have ever used,
              I love the food and the delivery is really fast."
            />
          </SwiperSlide>

          <SwiperSlide>
            <ReviewComp
              link={img4}
              name="Rahul"
              data="The food was delicious and the delivery was on time. I would definitely recommend this service to my friends and family."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
