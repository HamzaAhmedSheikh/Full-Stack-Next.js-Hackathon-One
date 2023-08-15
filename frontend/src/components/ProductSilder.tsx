'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
// import ProductCard from './ProductCard';
import AllProducts from "../app/(site)/products/page";

import 'swiper/css';
import 'swiper/css/autoplay';


export default function ProductSection() { 
    return (
        <section className='mt-[60px] lg:mt-[150px] max-w-[450px] md:max-w-[950px] lg:max-w-[1400px] mx-auto px-4'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <span className='text-sm text-[#0000FF] text-center uppercase text-[14px] font-inconsolata 
                font-bold tracking-[1px]'>
                    Products
                </span>
                <h1 className='font-bold font-arimo tracking-[1px] text-3xl text-center'>
                    Check What We Have
                </h1>
            </div>
            <div className='flex items-center justify-center mx-auto pl-[10px] md:pl-[50px] lg:pl-0 mt-[50px]'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={150}
                    slidesPerView={3}
                    autoplay={{ delay: 10000 }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        950: {
                            slidesPerView: 3,
                            spaceBetween: 150
                        }
                    }}
                >
                    {/*Slide 1 */}
                    <SwiperSlide>
                        {/* <AllProducts /> */}
                    </SwiperSlide>
                    {/*Slide 2 */}
                    <SwiperSlide>
                        {/* <ProductCard /> */}
                    </SwiperSlide>
                    {/*Slide 3 */}
                    <SwiperSlide>
                        {/* <ProductCard /> */}
                    </SwiperSlide>
                    {/*Slide 4 */}
                    <SwiperSlide>
                        {/* <ProductCard /> */}
                    </SwiperSlide>
                    {/*Slide 5 */}
                    <SwiperSlide>
                        {/* <ProductCard /> */}
                    </SwiperSlide>
                    {/*Slide 6 */}
                    <SwiperSlide>
                        {/* <ProductCard /> */}
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>


    );
};
