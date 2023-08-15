import React from 'react'
import Link from 'next/link'
import Image from "next/image"

interface IProduct {
    image: string;
    name: string;
    slug: any;
    price: number;
}

const Product = ({product: {image, name, slug, price}}: {product: IProduct}) => {   
 
  return (   
   <div className="flex justify-center items-center ">
    <div className="max-w-[80%]">
      <Link href={`/products/${slug}`} className='cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300'>
        <div className='product-card py-8 pl-3 transform scale-100 transition-transform duration-500 ease-in hover:scale-110'>
          <Image src={image} width={300} height={300} className='product-image' alt={name} />          
          <p className='text-[1.1rem] tracking-[0.03em] font-semibold text[#212121] mt-2 leading-6'>{name}</p>
          <p className='font-semibold text[#212121] mt-2 leading-6 text-[1.2rem]'>${price}</p>
        </div>
      </Link>
     </div>     
    </div>
  )
}

export default Product

