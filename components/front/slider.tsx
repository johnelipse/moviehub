"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { Link } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function App() {
  return (
  
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
          <SwiperSlide>
            <Link href="/">
            <Image width={6912} height={3456} src="/images/service.png" alt="banner" />
            </Link>
          </SwiperSlide>
        <SwiperSlide>
        <Link href="/">
            <Image width={6912} height={3456} src="/images/Car Wash.png" alt="banner" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/">
            <Image width={6912} height={3456} src="/images/Bold Movie.png" alt="banner" />
            </Link>
        </SwiperSlide>
        </Swiper>
    
  );
}
