import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import GameCard from "../GameCard/GameCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.scss";

const Slider = ({ games, exchangeRate, addToCart, cart }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

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