import React from "react";
import "./main.css";
import img1 from "../Img/allupakoida.jpg";
import img3 from "../Img/chola.jpg";
import img4 from "../Img/corn.jpg";
import img5 from "../Img/maggi.jpg";
import img6 from "../Img/momo.jpg";
import img7 from "../Img/nonvegthali.jpg";
import img8 from "../Img/paubhaji.jpg";
import img9 from "../Img/pizza.jpg";
import img10 from "../Img/puri.jpg";
import img11 from "../Img/rajmarice.jpg";
import img13 from "../Img/samosa.jpg";
import img14 from "../Img/burger.png";

import GalleryBox from "./Box";

const Gallery = () => {
  return (
    <div className="section">
      <div className="gallery" id="gallery">
        <h1 className="heading ">
          <span>G</span>
          <span>A</span>
          <span>L</span>
          <span>L</span>
          <span>E</span>
          <span>R</span>
          <span>Y</span>
        </h1>

        <div className="box-container">
          <GalleryBox
            img={img1}
            btn={false}
            food="Aloo Pakoda"
            data="Aloo pakora is a popular street food snack served not only in Mumbai but in other parts of India as well."
            styleName=""
          />

          <GalleryBox
            img={img3}
            btn={false}
            food="Chola"
            data="Chola is a popular dish in the Indian subcontinent, especially in the Indian states of Gujarat, Maharashtra, Madhya Pradesh, Rajasthan, and Goa."
            styleName=""
          />

          <GalleryBox
            img={img4}
            btn={false}
            food="Corn"
            data="Corn is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago."
            styleName=""
          />

          <GalleryBox
            img={img5}
            btn={false}
            food="Maggi"
            data="Maggi is a brand of instant noodles manufactured by Nestlé. It was first introduced in Switzerland in 1948."
            styleName=""
          />

          <GalleryBox
            img={img6}
            btn={false}
            food="Momo"
            data="Momo is a type of South Asian dumpling. It is a common fast food item in Nepal, Tibet, Bhutan, and parts of India."
            styleName=""
          />

          <GalleryBox
            img={img7}
            btn={false}
            food="Non-Veg Thali"
            data="A thali is a platter or a set of dishes used for serving food in India, Nepal, Pakistan, Bangladesh, Sri Lanka, and other South Asian countries."
            styleName=""
          />

          <GalleryBox
            img={img8}
            btn={false}
            food="Pav Bhaji"
            data="Pav bhaji is a fast food dish from the Indian state of Maharashtra. It consists of a thick vegetable curry served with a soft bread roll."
            styleName=""
          />

          <GalleryBox
            img={img9}
            btn={false}
            food="Pizza"
            data="Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients."
            styleName=""
          />

          <GalleryBox
            img={img10}
            btn={false}
            food="Puri"
            data="Puri is a deep-fried unleavened flatbread from the Indian subcontinent. It is a common breakfast item in India, Nepal, Pakistan, and Bangladesh."
            styleName=""
          />

          <GalleryBox
            img={img11}
            btn={false}
            food="Rajma Rice"
            data="Rajma rice is a popular dish in the Indian subcontinent, especially in the Indian states of Punjab, Haryana, Delhi, and Uttar Pradesh."
            styleName=""
          />

          <GalleryBox
            img={img13}
            btn={false}
            food="Samosa"
            data="Samosa is a fried or baked dish with a savory filling, such as spiced potatoes, onions, peas, lentils, macaroni, noodles, chicken, beef, lamb, or vegetables."
            styleName=""
          />

          <GalleryBox
            img={img14}
            btn={false}
            food="Burger"
            data="A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun."
            styleName=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
