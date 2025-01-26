import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import GameCard from "../GameCard/GameCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.scss";

const previewSlides = [
  { id: 1, image: "https://via.placeholder.com/300x400?text=Slide+1" },
  { id: 2, image: "https://via.placeholder.com/300x400?text=Slide+2" },
  { id: 3, image: "https://via.placeholder.com/300x400?text=Slide+3" },
  { id: 4, image: "https://via.placeholder.com/300x400?text=Slide+4" },
];

const Slider = ({ games, exchangeRate, addToCart, cart, preview }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  if (preview) {
    return (
      <Swiper
        modules={[Navigation, Pagination, Mousewheel]}
        spaceBetween={20}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        mousewheel={{ forceToAxis: true }}
        className="my-swiper"
        onSlideChange={handleSlideChange}
      >
        {previewSlides.map((slide, index) => (
          <SwiperSlide
            key={slide.id}
            className={index === activeIndex ? "active-slide" : ""}
          >
            <div className="preview-slide">
              {/* <img src={slide.image}  /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Mousewheel]}
      spaceBetween={20}
      slidesPerView={1.5}
      centeredSlides={true}
      loop={true}
      mousewheel={{ forceToAxis: true }}
      className="my-swiper"
      onSlideChange={handleSlideChange}
    >
      {games.map((game, index) => (
        <SwiperSlide
          key={game.game_id}
          className={index === activeIndex ? "active-slide" : ""}
        >
          <GameCard
            {...game}
            exchangeRate={exchangeRate}
            addToCart={addToCart}
            isInCart={cart.some((cartItem) => cartItem.name === game.name)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
