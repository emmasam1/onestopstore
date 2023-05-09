import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import images from "../../assets/data/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper";

import Box from "@mui/material/Box";


const Slider = () => {

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {images.map(e => {
            return(
                <SwiperSlide key={e.id}>
          <Box
            component="img"
            sx={{
              height: 390,
              width: "100%",
            }}
            alt="Slider"
            src={e.image}
            className="slider_image"
          />
        </SwiperSlide>
            )
        })}
      </Swiper>
    </>
  );
};

export default Slider;
