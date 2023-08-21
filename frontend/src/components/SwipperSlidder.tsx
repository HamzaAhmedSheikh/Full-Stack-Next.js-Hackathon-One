"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "../../sanity/schemas/sanity-utils";




const SwipperSlidder: any = async () => {
  const products = await getProducts();
  return (
    <>
      <Swiper
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={10}
      >
        {products.map((data: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center px-5 py-10 items-center">
              <div className="flex flex-col justify-center items-start h-[400px] mx-10 w-full hover:scale-110 ease-in duration-300 gap-3">
              <Link href={`/products/${data.slug}`} className='cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300'>
                 {
                   data.image && (
                    <div>
                     <Image src={data.image} alt={data.name} width={380} height={400} loading="lazy" className="object-cover" />
                    </div>
                    )
                  }   
                  <div className="flex flex-col flex-1 pr-6 pl-1">
                    <div className="flex-1">
                      <p className="font-semibold leading-6 text-base text-[#212121] tracking-[0.03em] mt-2"> {data.name} </p>           
                      <p className="font-semibold leading-6 text-[1.25rem] text-[#212121] tracking-[0.03em] mt-4"> ${data.price} </p>
                    </div>
                  </div>        
             </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwipperSlidder;