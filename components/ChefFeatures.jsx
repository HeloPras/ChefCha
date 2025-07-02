"use client";

import React from 'react';
import ChefCard from './ChefCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// Example placeholder image
const Placeholder = "/chef-placeholder.png";

const ChefFeaturesCarousel = () => {
  return (
    <div className="w-full py-10 bg-gray-50">
      <div className="max-w-[1200px] mx-auto mt-6 relative">

        <h2 className="text-[#c81415] font-bold text-sm mb-1">STANDOUT CHEFS</h2>
        <h1 className="font-bold text-5xl mb-6">Featured Chefs</h1>

        <div className="flex justify-between mb-4 px-4">
          <button className="custom-prev-chef bg-[#fc8019] text-white px-4 py-1 rounded-md hover:bg-orange-600">
            Prev
          </button>
          <button className="custom-next-chef bg-[#fc8019] text-white px-4 py-1 rounded-md hover:bg-orange-600">
            Next
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.custom-prev-chef',
            nextEl: '.custom-next-chef',
          }}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
        >
          <SwiperSlide>
            <ChefCard
              name="Chef Sandeep"
              specialty="Italian Cuisine Specialist"
              image="/chef1.png"
              rating="4.9"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ChefCard
              name="Chef Aayush"
              specialty="Nepali Traditional Dishes"
              image="/chef2.png"
              rating="4.8"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ChefCard
              name="Chef Renuka"
              specialty="Vegan & Healthy Options"
              image="/chef3.png"
              rating="4.7"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ChefCard
              name="Chef Pratiksha"
              specialty="BBQ and Grill Master"
              image="/chef4.png"
              rating="4.6"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ChefCard
              name="Chef Pratiksha"
              specialty="BBQ and Grill Master"
              image="/chef4.png"
              rating="4.6"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ChefFeaturesCarousel;
