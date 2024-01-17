"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Events() {
  const images = ["/about.jpg", "/about.jpg", "/about.jpg"];
  return (
    <div className="events-container">
      <div className="container2">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.replace("./public", "")}
                alt={`Event ${index + 1}`}
              />
              <div className="slideshow-container">
                <div className="slideshow-date">DD/MM/YYYY</div>
                <h2 className="slideshow-title">Event Title Here</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
