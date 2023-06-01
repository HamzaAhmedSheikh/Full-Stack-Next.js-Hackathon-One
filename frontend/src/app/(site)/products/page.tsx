import React from "react";
import Event2 from "../../../../public/images/event3.png";
import Image from "next/image";
import { getProducts } from "../../../../sanity/schemas/sanity-utils";
import Link from "next/link";

const AllProducts = async () => {
  let getAllProduts = await getProducts();

  
  return (
    <>
     <div className="flex justify-between items-center py-8 pl-20 pr-5"> 
      <div className="w-[250px]">
       {
        getAllProduts.map((data: any) => {         
         
            //  console.log("data", data.slug)    
            return (
              <div key={data._id}>
                <Link href={`/products/${data.slug}`}>     
                  {
                        data.image && (
                           <Image src={data.image} alt={data.name} width={250} height={270} className="object-cover" />
                        )
                  }                 
                              
                  <p className="font-semibold leading-6 text-base text-[#212121] tracking-[0.03em] mt-2"> {data.name} </p>
                  <p className="font-semibold leading-[15px] text-[#888888] mt-2">{data.tags}</p>
                  <p className="font-semibold leading-6 text-[1.25rem] text-[#212121] tracking-[0.03em] mt-4"> ${data.price} </p>
                </Link>
              </div>
            )  

           
        })
       }
       </div> 
     </div> 
      {/* <div className="w-full max-w-sm border rounded-lg shadow ml-8">
       <div className="bg-gray-200 max-w-sm"> 
        <a href="#"> data.slug.current
          <Image
            className="p-8 rounded-t-lg"
            src={Event2}
            width={250}
            height={250}
            alt="product image"
          />
        </a>
        </div> 
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>          
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart sanity-ecommerce-clothing
            </a>
          </div>
        </div>      
      </div> */}
    </>
  );
};

export default AllProducts;
