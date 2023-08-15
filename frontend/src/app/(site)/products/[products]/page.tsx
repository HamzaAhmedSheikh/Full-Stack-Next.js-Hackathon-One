import React, { useState, useEffect, useContext } from 'react'
import { groq } from "next-sanity";
import { client } from "@/lib/sanityClient";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { CgShoppingCart } from "react-icons/cg";
import { useStateContext } from "@/context/StateContext";
import Counter from '@/components/Counter';
import { AddButton } from '@/components/Button';


type Props = {
    params: {
        products: string;
    };
}

async function getProduct(slug: string) {
  const query =  groq`*[_type == "product" && slug.current == "${slug}"][0]{
    _id,
    name,
    tags,
    price,
    "slug": slug.current,
    "image": image.asset->url,   
    details,
    care,
  }`;

  const product = await client.fetch(query, { slug });

  return product
}

 
  async function ProductDetails({ params }: Props) {       
    // const {decQty, incQty, qty, onAdd} = useStateContext();    
    const slug = params.products;
    let getProducts = await getProduct(slug);   

    

     
      return(       
       
        <div className="sm:max-w-[450px] md:max-w-[950px] lg:max-w-[1400px] mt-[100px] px-4 md:px-10 mx-autobg-[#FCFCFC]"> 
         <div className='product-detail-container flex justify-space-between'>s
          <div className='flex flex-[2] gap-8'>            
           <div className="flex flex-col gap-4"> 
            <Image src={getProducts.image} width={100} height={100} className="cursor-pointer" alt="dress" />
           </div>

           <div className="w-[80%] h-[100%]">
            <Image src={getProducts.image} width={550} height={750} alt="dress" />
           </div>
          </div>

          <div className='product-details flex flex-1 flex-col gap-[2.5rem] mt-16'>
           <div className='name-and-category'> 
             <h3 className="font-normal	text-[1.625rem] leading-8 tracking-wider text-[#212121]"> {getProducts.name} </h3>
             <span className="font-semibold	text-[1.3rem] opacity-30"> {getProducts.tags} </span>
           </div>

           <div className='size'>         
           <p className="font-bold text-[0.8rem] text-[#212121] leading-4 tracking-wider">SELECT SIZE</p>
            <ul className="flex gap-4 mt-4 ">            
              <li className="flex justify-center items-center rounded-[50%] text-[#666666] w-10 h-10 font-bold text-base leading-4 tracking-wider cursor-pointer hover:shadow-md">XS</li>
              <li className="flex justify-center items-center rounded-[50%] text-[#666666] w-10 h-10 font-bold text-base leading-4 tracking-wider cursor-pointer hover:shadow-md">S</li>
              <li className="flex justify-center items-center rounded-[50%] text-[#666666] w-10 h-10 font-bold text-base leading-4 tracking-wider cursor-pointer hover:shadow-md">M</li>
              <li className="flex justify-center items-center rounded-[50%] text-[#666666] w-10 h-10 font-bold text-base leading-4 tracking-wider cursor-pointer hover:shadow-md">L</li>
              <li className="flex justify-center items-center rounded-[50%] text-[#666666] w-10 h-10 font-bold text-base leading-4 tracking-wider cursor-pointer hover:shadow-md">XL</li>
            </ul>
          </div>

          {/* // <div className='quantity-desc flex gap-2'>
          //   <h4>Quantity: </h4>          
          //     <span className='minus border-2 border-solid border-gray-200 bg-gray-200 mr-[10px] rounded-[60%] px-2 py-1 cursor-pointer' onClick={decQty}> <AiOutlineMinus /> </span>
          //     <span className='num'> {qty} </span>
          //     <span className='plus ml-[10px] border-2 border-solid border-black rounded-[60%] px-2 py-1 cursor-pointer' onClick={incQty}> <AiOutlinePlus /></span>
          // </div> */}

           <Counter /> 

          <div className='add-to-cart flex items-center gap-4'>          
            {/* // <button className='flex justify-center items-center gap-2 btn w-[40%] text-[0.875rem] bg-[#212121] text-gray-100 p-[10px] leading-[18px]' type='button' onClick={() => onAdd(getProducts, qty)}>
            //   <CgShoppingCart size={20} /> Add to Cart      
            // </button> */}
            {/* <div> <onAddButton /> </div> */}
            
            <p className='price font-bold text-[1.5rem] leading-[30px] tracking-widest text-[#212121]'>${getProducts.price}.00</p>  
          </div>  

          <AddButton product={getProducts}/>       
          </div>
         </div>    


          <div className='product-desc-container flex bg-gray-50 flex-col mt-16 py-8 px-16 mx-12 gap-8'>
           <div className='desc-title relative w-[100%] h-[150px] z-[2] border-b-2 border-solid border-gray-300'>
            <div className="desc-background font-extrabold text-[7.5rem] text-[#f2f3f7] opacity-70 z-[-1] w-[100%] h-[100%]">            
              Overview
            </div>     
            <h2 className="absolute font-bold text-[1.4rem] leading-6 tracking-wider text-[#212121] pb-12 z-[2] top-[45%]">Product Information</h2>  
           </div>   


             <div className='desc-details flex flex-row gap-8'>
                <h4 className="flex-1 font-bold text-base leading-4 tracking-wider text-[#666666]">PRODUCT DETAILS</h4>
                <div className="flex-[2] font-normal text-base leading-[26px] text-justify tracking-wider text-[#212121]"> <PortableText value={getProducts.details}/> </div>                                   
             </div>      

             <div className='desc-care flex flex-row gap-8'>
                <h4 className="flex-1 font-bold text-base leading-4 tracking-wider text-[#666666]">PRODUCT CARE</h4>
                <div className="flex-[2] font-normal text-base leading-[26px] text-justify tracking-wider text-[#212121] list-disc list-inside">
                    <PortableText value={getProducts.care}/> 
                </div>                                   
             </div>     
          </div>   
          
        </div>         
      )
  }
  
  export default ProductDetails;