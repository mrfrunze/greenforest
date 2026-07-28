"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { products } from "@/utils/data";
import ProductTile from "./ProductTile";

const ProductSlider = () => {
    return (
        <section className="products-swiper products-band" aria-label="Products slider">
            <div className="mx-auto w-full max-w-screen-xl px-4 py-24">
                <Swiper
                    modules={[Pagination, A11y, Autoplay]}
                    grabCursor
                    watchOverflow
                    loop
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{ clickable: true }}
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id}>
                            <ProductTile  {...item} />
                        </SwiperSlide>
                    ))}                </Swiper>

            </div>

        </section>
    )
}

export default ProductSlider