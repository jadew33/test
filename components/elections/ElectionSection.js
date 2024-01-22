import React from "react";
import { electionData } from "../../app/elections/electionData";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import useMobile from "../../hooks/useMobile";

export default function ElectionSection({ currentTab }) {
  const Images = ["/Calendar1.png", "/Calendar2.png"];

  const swiperRef = React.useRef(null);

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const { mobile } = useMobile();

  return (
    <section className="mt-[2rem]">
      {!currentTab || mobile ? (
        <div className="flex flex-col gap-[2rem]">
          {electionData.map((item, index) => (
            <div key={index} className="flex gap-[2rem] min-h-[10rem] ">
              <div className="flex-1 bg-white rounded-lg min-h-[10rem] py-[1.7rem] px-[1rem] flex flex-col items-center justify-center max-lg:gap-[1rem]">
                <div className="font-bold flex flex-col gap-[0.5rem] min-[1800px]:flex-row justify-center items-center text-sm lg:text-base">
                  <div>{item.weekDay}</div>
                  <div>{item.month}</div>
                </div>
                <div className="text-5xl lg:text-7xl text-[#C686F3] mt-[0.5rem]">
                  {item.day}
                </div>
              </div>
              <div className="flex-[4_4_0%] bg-white rounded-lg min-h-[10rem] py-[1rem] px-[2rem]">
                <h2 className="font-gothamBold text-2xl text-[#5D15D2]">
                  {item.title}
                </h2>
                <p>{item.time}</p>
                <p className="mt-[1.5rem]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Swiper ref={swiperRef}>
          {Images.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Your carousel item content */}
              <img
                src={item}
                alt={`carousel-item-${index}`}
                className="w-full h-auto"
              />
            </SwiperSlide>
          ))}
          <button
            onClick={goPrev}
            className="text-[#5D15D2] text-3xl absolute top-[2rem] xl:top-[2.5rem] 2xl:top-[3rem] min-[1800px]:top-[4rem] left-[4rem] z-10"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={goNext}
            className="text-[#5D15D2] text-3xl absolute top-[2rem] xl:top-[2.5rem] 2xl:top-[3rem] min-[1800px]:top-[4rem] right-20 z-10"
          >
            <FaAngleRight />
          </button>
        </Swiper>
      )}
    </section>
  );
}
