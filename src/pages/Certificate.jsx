import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Certificate = () => {
  return (
    <section id="certificate" className="min-h-screen px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Certificates</h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="bg-white shadow p-4 rounded-lg">
            Front-End Developer - Dicoding
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white shadow p-4 rounded-lg">
            React Professional Certificate - Coursera
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white shadow p-4 rounded-lg">
            Web Development Certification - FreeCodeCamp
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white shadow p-4 rounded-lg">
            Web Development Certification - FreeCodeCamp
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Certificate;
