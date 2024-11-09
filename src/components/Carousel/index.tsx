import React, { ReactNode } from "react";
import Slider, { Settings } from "react-slick";
import { twMerge } from "tailwind-merge";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CustomArrowProps {
  type: "prev" | "next";
  onClick?: () => void;
}

interface CarouselProps {
  items: any[];
}

const CustomArrow = ({ type, onClick }: CustomArrowProps) => {
  return (
    <div
      className={twMerge(
        `absolute z-[5] flex items-center justify-center text-[0px] top-1/2 p-0
      cursor-pointer border-none outline-none leading-none rounded-full`,
        `${type === "prev" ? "-left-9" : "-right-9"}`
      )}
      onClick={onClick}
    >
      <span
        className={`w-[32px] h-[32px] text-xl text-light-neutrals-700 font-bold ${
          type === "prev" ? "rotate-180" : ""
        }`}
      >
        {">"}
      </span>
    </div>
  );
};

const Carousel = ({ items }: CarouselProps) => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    swipeToSlide: true,
    pauseOnHover: true,
    variableWidth: true,
    adaptiveHeight: true,
    speed: 500,
    nextArrow: <CustomArrow type="next" />,
    prevArrow: <CustomArrow type="prev" />,
  };

  return (
    <Slider {...settings} className="px-4 w-full max-h-fit">
      {items}
    </Slider>
  );
};

export default Carousel;
