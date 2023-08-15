import Image from "next/image";
import Link from "next/link";
import feature from 'public/feature.webp'
export default function Features() {
  return (
  //   <section className='features-section mt-16'>
  //   <div className='title flex justify-end px-8 py-2 bg-gradient-to-b from-white to-[#FBFCFF]'>
  //     <h1 className="font-bold text-[2.75rem] leading-[55px] tracking-[0.03em] text-[#212121] w-[45%] font-Sora">Unique and <br /> Authentic Vintage <br /> Designer <br /> Jewellery</h1>
  //   </div>    

  //   <div className='content grid grid-cols-2 gap-4 px-8 py-0 pb-16 bg-[#FBFCFF]'>
  //     <div className='left grid grid-cols-2 text-center items-center justify-center relative'>
  //       <div className="feature-background font-extrabold text-[6.875rem] leading-[110px] absolute text-[#212121] opacity-[0.07] z-[1]">    
  //         Different from others
  //       </div>
  //       <div className="w-[70%] z-[2]">        
  //         <h3 className="font-semibold text-lg leading-5 tracking-[0.03em] text-[#212121] mb-4">Using Good Quality Materials</h3>
  //         <p className="font-light text-base leading-[22px] tracking-wider text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
  //       </div>
  //       <div className="w-[70%] z-[2]">
  //         <h3 className="font-semibold text-lg leading-5 tracking-[0.03em] text-[#212121] mb-4">100% Handmade Products</h3>
  //         <p className="font-light text-base leading-[22px] tracking-wider text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
  //       </div>
  //       <div className="w-[70%] z-[2]">
  //         <h3 className="font-semibold text-lg leading-5 tracking-[0.03em] text-[#212121] mb-4">Modern Fashion Design</h3>
  //         <p className="font-light text-base leading-[22px] tracking-wider text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
  //       </div>
  //       <div className="w-[70%] z-[2]">
  //         <h3 className="font-semibold text-lg leading-5 tracking-[0.03em] text-[#212121] mb-4">Discount for Bulk Orders</h3>
  //         <p className="font-light text-base leading-[22px] tracking-wider text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
  //       </div>
  //     </div>      
  //     <div className='right flex justify-center items-center gap-[2.5rem]'>
  //       <Image src="https://cdn.sanity.io/images/lzplr4pt/production/bfd5b4b468e1a6c84c25589fae1a103cac342102-278x296.png?w=2000&fit=max&auto=format" width={300} height={350} alt='img' />
  //       <div className="flex flex-col gap-8">
  //         <p className="font-light text-base leading-[26px] text-justify text-[#212121]">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
  //         <Link href={'/products'}>
  //           {/* <button className='btn font-semibold leading-[18px] py-[10px] items-center justify-center text-[0.875rem] width-[50%] bg-[#212121] text-white p-[6px] h-16 rounded-sm' type='button'>See All Product</button> */}
  //           <button className='bg-black font-semibold leading-[18px] items-center justify-center text-[0.875rem] text-white px-8 py-2 font-arimo'>
  //              See all Product
  //            </button>
  //         </Link>
  //       </div>
  //     </div>      
  //   </div>
  // </section>

  <>
      <div className="mt-10 p-6 flex justify-start lg:justify-end  ">
        <h2 className="text-4xl max-w-[350px] font-bold">Unique and Authentic Vintage Designer Jewellery</h2>
      </div>

      <div className="mt-10 relative flex flex-col  lg:flex-row ">
        {/* left */}
        <div className="flex  flex-1 flex-wrap   relative">
          <div className="flex flex-col md:flex-row ">
            <div className="px-8 py-4">
              <h4 className="font-semibold text-lg">Using Good Quality Materials</h4>
              <div className="mt-2 text-md">Lorem ipsum dolor sit amt, consectetur adipiscing elit</div>
            </div>
            <div className="px-8 py-4">
              <h4 className="font-semibold text-lg">100% Handmade Products</h4>
              <div className="mt-2 text-md">Lorem ipsum dolor sit amt, consectetur adipiscing elit</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="px-8 py-4">
              <h4 className="font-semibold text-lg">Modern Fashion Design</h4>
              <div className="mt-2 text-md">Lorem ipsum dolor sit amt, consectetur adipiscing elit</div>
            </div>
            <div className="px-8 py-4">
              <h4 className="font-semibold text-lg">Discount for Bulk Orders</h4>
              <div className="mt-2 text-md">Lorem ipsum dolor sit amt, consectetur adipiscing elit</div>
            </div>
            <div className="lg:text-9xl text-5xl sm:text-8xl font-bold -z-10 absolute -top-14 left-0 text-gray-100">Different from others</div>
          </div>
        </div>

        {/* right */}

        <div className="flex flex-col md:flex-row   gap-x-6 flex-1 justify-center items-center mt-20 lg:mt-0">
          <div className="flex-1 p-6">
            <Image src={feature}  alt="feature" />
          </div>
          <div className="px-8 flex-1 text-lg mt-4">
            This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
            <div>
              <button className='bg-black font-semibold leading-[18px] items-center justify-center text-[0.875rem] text-white px-8 py-5 mt-10 font-arimo'>See All Product</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}