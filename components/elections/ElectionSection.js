"use client";
import React, { useEffect, useState } from "react";
import { electionData } from "./electionData";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import useMobile from "../../hooks/useMobile";

export default function ElectionSection({ currentTab }) {
  const Images = ["/Calendar1.png", "/Calendar2.png"];
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);
  const { mobile } = useMobile();

  const swiperRef = React.useRef(null);

  useEffect(() => {
    if (!swiperRef) return null;

    if (swiperRef.current?.swiper?.activeIndex === 0) {
      setLeftArrow(false);
      setRightArrow(true);
    } else if (swiperRef.current?.swiper?.activeIndex === 1) {
      setRightArrow(false);
      setLeftArrow(true);
    }
  }, [swiperRef, mobile, currentTab]);

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
    setLeftArrow(false);
    setRightArrow(true);
  };

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
    setRightArrow(false);
    setLeftArrow(true);
  };

  return (
    <section className="mt-[2rem]">
      {!currentTab || mobile ? (
        <>
          {mobile ? (
            <>
              <p className="font-gothamBold underline text-compsa-white text-lg">
                Timeline
              </p>
              {electionData.map((item, index) => (
                <div className="text" key={index}>
                  <p className="font-book font-bold text-lg">{item.title}</p>
                  <p className="text-sm">
                    {item.weekDay}, {item.month} {item.day} @ {item.time}
                  </p>

                  <p className=" mt-2 mb-10">{item.description}</p>
                </div>
              ))}
            </>
          ) : (
            <div className="flex flex-col gap-[2rem]">
              {electionData.map((item, index) => (
                <div key={index} className="flex gap-[2rem] min-h-[10rem] ">
                  <div className="flex-1 bg-white rounded-lg min-h-[10rem] py-[1.5rem] px-[1rem] flex flex-col items-center justify-center max-lg:gap-[1rem]">
                    <div className="font-book flex flex-col gap-[0.15rem] min-[1800px]:flex-row justify-center items-center text-sm lg:text-base font-bold">
                      <div className="mr-1">{item.weekDay}</div>
                      <div>{item.month}</div>
                    </div>
                    <div className="text-[2.5rem]  text-[#C686F3] mt-[0.25rem] font-bold">
                      {item.day}
                    </div>
                  </div>
                  <div className="flex-[4_4_0%] bg-white rounded-lg min-h-[10rem] py-[1rem] px-[2rem]">
                    <h2 className="font-gothamBold text-2xl text-[#5D15D2]">
                      {item.title}
                    </h2>
                    <p className="font-book text-sm">{item.time}</p>
                    <p className="mt-[.75rem]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <Swiper ref={swiperRef}>
          {Images.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                alt={`carousel-item-${index}`}
                // className="w-30vw h-auto"
                // className="w-3/4"
              />
            </SwiperSlide>
          ))}
          {leftArrow && (
            <button
              onClick={goPrev}
              className="text-[#5D15D2] text-3xl absolute top-[2.5rem] xl:top-[2.5rem] 2xl:top-[3rem] min-[1800px]:top-[4rem] left-[4rem] z-10"
            >
              <FaAngleLeft />
            </button>
          )}
          {rightArrow && (
            <button
              onClick={goNext}
              className="text-[#5D15D2] absolute text-3xl top-[2.5rem] xl:top-[2.5rem] 2xl:top-[3rem] ml-[85%] min-[1800px]:ml-[80%] min-[2000px]:left-[-4rem] z-10"
            >
              <FaAngleRight />
            </button>
          )}
        </Swiper>
      )}
    </section>
  );
}
