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
  slidesToShow?: number;
  slidesToScroll?: number;
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

const CustomDots = ({ dots }: { dots: ReactNode }) => {
  return (
    <ul
      className={`flex justify-center items-center gap-1 mt-3
      [&_li.slick-active_div]:border-none [&_li.slick-active_div]:bg-black 
      [&_li.slick-active_div]:w-1.5 [&_li.slick-active_div]:h-1.5`}
    >
      {dots}
    </ul>
  );
};

const CustomPaging = () => {
  return <div className="w-2 h-2 border border-black rounded-full"></div>;
};

const Carousel = ({
  items,
  slidesToShow = 3,
  slidesToScroll = 1,
}: CarouselProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    swipeToSlide: true,
    pauseOnHover: true,
    variableWidth: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    nextArrow: <CustomArrow type="next" />,
    prevArrow: <CustomArrow type="prev" />,
    appendDots: (dots) => <CustomDots dots={dots} />,
    customPaging: () => <CustomPaging />,
  };

  return (
    <div className="w-full max-w-[960px] mx-auto ">
      <Slider {...settings} className="px-4 ">
        {items}
      </Slider>
    </div>
  );
};

export default Carousel;
