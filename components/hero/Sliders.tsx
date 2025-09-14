"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { heroSlides } from "@/utils/heroData";
import Slider from "./Slide";

export default function Sliders() {
  return (
    <section
      className="hero-swiper relative w-full overflow-hidden"
      aria-label="Hero slider"
    >
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop
        className="h-full"
      >
        {heroSlides &&
          heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Slider slide={slide} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
