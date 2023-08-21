"use client";
import HeroBanner from '../../components/HeroBanner'
import { StateContext } from '@/context/StateContext'
import Newletter from '@/components/Newsletter'
import Features from '@/components/Features'
import Promote from '@/components/Promote'
import ProductSilder from '@/components/ProductSilder'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { getProducts } from '../../../sanity/schemas/sanity-utils';

import 'swiper/css';
import 'swiper/css/autoplay';
import ProductCard from '@/components/ProductCard'
import Products from '@/components/Products';

export default async function Home() {
  const products = await getProducts();
  return (
   <>
    <HeroBanner />
    <Promote />
    <Products />

    {/* <div className=''> */}
        {/* <div className='subtitle flex flex-col justify-evenly text-center mt-20'>
          <span className='font-bold text-[12px] leading-[15px] tracking-widest text-[#0062F5]'>PRODUCTS</span>
          <h2 className='font-bold text-[32px] leading-[40px] text-center tracking-[0.03em] text-[#212121]'>Check What We Have</h2>
        </div> 
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
                            spaceBetween: 90
                        }
                    }}     
                    // className='px-8'               
                >
                    Slide 1 
                   
                     <div>            
                    {products?.map((product: any) => (      
                         <SwiperSlide>                                        
                         <ProductCard key={product._id} product={product} />   
                        </SwiperSlide>                       
                    ))}                     
                    </div>              
                
                </Swiper>
                */}
            {/* </div>         */}


    
      
            
       






                
    
    <Features />
    <Newletter />
   </>
  )
}
