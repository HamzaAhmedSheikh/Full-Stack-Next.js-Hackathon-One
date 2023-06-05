import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function PhotoGallery() {
   return(
    <>
     <div className="mx-auto my-10 items-center justify-center py-8 pl-20 pr-5">
      <div className="p-10 grid grid-cols-2 sm:grid-cols-2 min-[564px]:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-16">     
    

      {/* <div className="relative">
          <Image src="https://cdn.sanity.io/images/lzplr4pt/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png?w=2000&fit=max&auto=format" width={250} height={250} className="object-cover" alt="image-1" />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300 flex items-center justify-center w-[250px] h-[265px]">
         <Link href="#" className="text-white text-lg font-bold">View</Link>
        </div> 
        
        <p className="font-semibold leading-6 text-base text-[#212121] tracking-[0.03em] mt-2">Men Jacket</p>
        <p className="font-semibold leading-[15px] text-[#888888] mt-2">Jacket</p>
        <p className="font-semibold leading-6 text-[1.25rem] text-[#212121] tracking-[0.03em] mt-4">$195.00</p>
      </div>


      <div className="relative">
          <Image src="https://cdn.sanity.io/images/lzplr4pt/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png?w=2000&fit=max&auto=format" width={250} height={250} className="object-cover" alt="image-1" />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300 flex items-center justify-center w-[250px] h-[265px]">
         <Link href="#" className="text-white text-lg font-bold">View</Link>
        </div>
        
        <p className="font-semibold leading-6 text-base text-[#212121] tracking-[0.03em] mt-2">Men Jacket</p>
        <p className="font-semibold leading-[15px] text-[#888888] mt-2">Jacket</p>
        <p className="font-semibold leading-6 text-[1.25rem] text-[#212121] tracking-[0.03em] mt-4">$195.00</p>
      </div>

        <div className="relative">
          <Image src="https://cdn.sanity.io/images/lzplr4pt/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png?w=2000&fit=max&auto=format" width={250} height={250} className="object-cover" alt="image-1" />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300 flex items-center justify-center w-[250px] h-[265px]">
         <Link href="#" className="text-white text-lg font-bold">View</Link>
        </div>
        
        <p className="font-semibold leading-6 text-base text-[#212121] tracking-[0.03em] mt-2">Men Jacket</p>
        <p className="font-semibold leading-[15px] text-[#888888] mt-2">Jacket</p>
        <p className="font-semibold leading-6 text-[1.25rem] text-[#212121] tracking-[0.03em] mt-4">$195.00</p>
      </div>

         <div className="relative">
          <Image src="https://cdn.sanity.io/images/lzplr4pt/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png?w=2000&fit=max&auto=format" width={250} height={250} className="object-cover" alt="image-1" />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300 flex items-center justify-center w-[250px] h-[265px]">
         <Link href="#" className="text-white text-lg font-bold">View</Link>
        </div>
        
        <p className="font-semibold leading-6 text-base text-[#212121] tracking-[0.03em] mt-2">Men Jacket</p>
        <p className="font-semibold leading-[15px] text-[#888888] mt-2">Jacket</p>
        <p className="font-semibold leading-6 text-[1.25rem] text-[#212121] tracking-[0.03em] mt-4">$195.00</p>
      </div> */}

      <article className="group">
        <Image
          alt="Lava"
          src="https://cdn.sanity.io/images/lzplr4pt/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png?w=2000&fit=max&auto=format"
          className="object-cover shadow-xl transition group-hover:grayscale-[50%] group-hover:cursor-pointer	flex flex-2 gap-2"
          width={380}
          height={400}
        />
        
        <div className="p-4">
          <p className="font-semibold leading-6 text-base text-[#212121] tracking-[0.03em] mt-2">Men Jacket</p>
          <p className="font-semibold leading-[15px] text-[#888888] mt-2">Jacket</p>
          <p className="font-semibold leading-6 text-[1.25rem] text-[#212121] tracking-[0.03em] mt-4">$195.00</p>
        </div>
      </article>

      <article className="group">
        <Image
          alt="Lava"
          src="https://cdn.sanity.io/images/lzplr4pt/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png?w=2000&fit=max&auto=format"
          className="object-cover shadow-xl transition group-hover:grayscale-[50%] group-hover:cursor-pointer	flex flex-2 gap-2"
          width={380}
          height={400}
        />
        
        <div className="p-4">
          <p className="font-semibold leading-6 text-base text-[#212121] tracking-[0.03em] mt-2">Men Jacket</p>
          <p className="font-semibold leading-[15px] text-[#888888] mt-2">Jacket</p>
          <p className="font-semibold leading-6 text-[1.25rem] text-[#212121] tracking-[0.03em] mt-4">$195.00</p>
        </div>
      </article>

      <article className="group">
        <Image
          alt="Lava"
          src="https://cdn.sanity.io/images/lzplr4pt/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png?w=2000&fit=max&auto=format"
          className="object-cover shadow-xl transition group-hover:grayscale-[50%] group-hover:cursor-pointer	flex flex-2 gap-2"
          width={380}
          height={400}
        />
        
        <div className="p-4">
          <p className="font-semibold leading-6 text-base text-[#212121] tracking-[0.03em] mt-2">Men Jacket</p>
          <p className="font-semibold leading-[15px] text-[#888888] mt-2">Jacket</p>
          <p className="font-semibold leading-6 text-[1.25rem] text-[#212121] tracking-[0.03em] mt-4">$195.00</p>
        </div>
      </article>


      <article className="group">
        <Image
          alt="Lava"
          src="https://cdn.sanity.io/images/lzplr4pt/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png?w=2000&fit=max&auto=format"
          className="object-cover shadow-xl transition group-hover:grayscale-[50%] group-hover:cursor-pointer	flex flex-2 gap-2"
          width={380}
          height={400}
        />
        
        <div className="p-4">
          <p className="font-semibold leading-6 text-base text-[#212121] tracking-[0.03em] mt-2">Men Jacket</p>
          <p className="font-semibold leading-[15px] text-[#888888] mt-2">Jacket</p>
          <p className="font-semibold leading-6 text-[1.25rem] text-[#212121] tracking-[0.03em] mt-4">$195.00</p>
        </div>
      </article>














      </div>  









    </div>


























    </>
   ) 
}

// export default PhotoGallery;

import { FiCode, FiNavigation } from "react-icons/fi";


const Projects = () => {
  return (
    <div className="relative py-4 justify-center">
      <div className="relative">       
        <div className="grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:grid-cols-4 lg:max-w-7xl">
          
             <div                
                className="flex flex-col"
              >
                <Link
                  href=''                  
                  target="_blank"
                  className='cursor-pointer focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-400'
                >
                  <div className="">
                    <Image
                      src="https://cdn.sanity.io/images/lzplr4pt/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png?w=2000&fit=max&auto=format"
                      alt={`screenshot`}
                      width={400}
                      height={400}
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>    

                  <div className="flex flex-col flex-1 pr-6 pl-1">
                    <div className="flex-1">
                      <div className="">
                        <p className="font-semibold leading-6 text-base text-[#212121] tracking-[0.03em] mt-2">Men Jacket</p>
                        <p className="font-semibold leading-[15px] text-[#888888] mt-2">Jacket</p>
                        <p className="font-semibold leading-6 text-[1.25rem] text-[#212121] tracking-[0.03em] mt-4">$195.00</p>
                      </div>
                    </div>
                  </div>                      
                </Link>   

                {/* <div className="flex flex-col flex-1 pr-6 pl-1">
                    <div className="flex-1">
                      <div className="">
                        <p className="font-semibold leading-6 text-base text-[#212121] tracking-[0.03em] mt-2">Men Jacket</p>
                        <p className="font-semibold leading-[15px] text-[#888888] mt-2">Jacket</p>
                        <p className="font-semibold leading-6 text-[1.25rem] text-[#212121] tracking-[0.03em] mt-4">$195.00</p>
                      </div>
                    </div>
                  </div>              */}
              </div>            



              <div                
                className="flex flex-col"
              >
                <Link
                  href=''                  
                  target="_blank"
                  className='cursor-pointer focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-400'
                >
                  <div className="">
                    <Image
                      src="https://cdn.sanity.io/images/lzplr4pt/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png?w=2000&fit=max&auto=format"
                      alt={`screenshot`}
                      width={400}
                      height={400}
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>                  
                </Link>   

                <div className="flex flex-col flex-1 pr-6 pl-1">
                    <div className="flex-1">
                      <div className="">
                        <p className="font-semibold leading-6 text-base text-[#212121] tracking-[0.03em] mt-2">Men Jacket</p>
                        <p className="font-semibold leading-[15px] text-[#888888] mt-2">Jacket</p>
                        <p className="font-semibold leading-6 text-[1.25rem] text-[#212121] tracking-[0.03em] mt-4">$195.00</p>
                      </div>
                    </div>
                  </div>             
              </div>            



              <div                
                className="flex flex-col"
              >
                <Link
                  href=''                  
                  target="_blank"
                  className='cursor-pointer focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-400'
                >
                  <div className="">
                    <Image
                      src="https://cdn.sanity.io/images/lzplr4pt/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png?w=2000&fit=max&auto=format"
                      alt={`screenshot`}
                      width={400}
                      height={400}
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>                  
                </Link>   

                <div className="flex flex-col flex-1 pr-6 pl-1">
                    <div className="flex-1">
                      <div className="">
                        <p className="font-semibold leading-6 text-base text-[#212121] tracking-[0.03em] mt-2">Men Jacket</p>
                        <p className="font-semibold leading-[15px] text-[#888888] mt-2">Jacket</p>
                        <p className="font-semibold leading-6 text-[1.25rem] text-[#212121] tracking-[0.03em] mt-4">$195.00</p>
                      </div>
                    </div>
                  </div>             
              </div>            


              <div                
                className="flex flex-col"
              >
                <Link
                  href=''                  
                  target="_blank"
                  className='cursor-pointer focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-400'
                >
                  <div className="">
                    <Image
                      src="https://cdn.sanity.io/images/lzplr4pt/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png?w=2000&fit=max&auto=format"
                      alt={`screenshot`}
                      width={400}
                      height={400}
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>                  
                </Link>   

                <div className="flex flex-col flex-1 pr-6 pl-1">
                    <div className="flex-1">
                      <div className="">
                        <p className="font-semibold leading-6 text-base text-[#212121] tracking-[0.03em] mt-2">Men Jacket</p>
                        <p className="font-semibold leading-[15px] text-[#888888] mt-2">Jacket</p>
                        <p className="font-semibold leading-6 text-[1.25rem] text-[#212121] tracking-[0.03em] mt-4">$195.00</p>
                      </div>
                    </div>
                  </div>             
              </div>            






























        </div>
      </div>
    </div>
  );
};

export default Projects;