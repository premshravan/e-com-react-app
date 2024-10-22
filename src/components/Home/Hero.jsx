import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
const Hero = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("/api/slider.json")
      .then((response) => response.json())
      .then((data) => setSlides(data.heroSlider))
      .catch((error) => console.log("Error:", error));
  }, []);
  

  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {slides.length > 0 &&
          slides.map((slide) => (
            <SwiperSlide key={slide.id} className="max-h-[80vh] relative">
              <img src={slide.image} alt={`Slide` + slide.id} />
              <div className=" text_container absolute text-center sm:top-1/4 top:[20%] w-full h-full">
                <h1 className="font-bold text-yellow-300 sm:text-2xl md:text-3xl text-xl ">
                  {slide.title}
                </h1>
                <p className="italic py-2 text-sm">{slide.subtitle}</p>
                <Link to={slide.link}>
                  <button className="bg-lime-400 px-2 py-1 text-black rounded hover:bg-blue-400 transition ease-in duration-150 hover:scale-110">{slide.buttonText}</button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Hero;
