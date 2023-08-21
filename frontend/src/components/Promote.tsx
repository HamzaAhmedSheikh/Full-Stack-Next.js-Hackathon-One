import Image from "next/image";
import Link from "next/link";
import img1 from "public/img-1.webp";
import img2 from "public/img-2.webp";
import img3 from "public/img-3.webp";

export default function Promote() {
    return (      
      <>
      {/* <div className="text-center mt-20 font-semibold text-blue-900">PROMOTIONS</div>
      <h1 className="text-center text-4xl font-bold"> Our Promotions Events</h1>
      <div className="flex flex-col items-center lg:flex-row gap-8 mt-10 justify-center">
        left section
        <div className="flex  flex-col gap-4">
           left secion 1 
          <div className=" w-[350px] h-[187px] flex bg-slate-400">
            <div className=" mt-8 ml-4">
              <h3 className="font-bold text-3xl">GET UP TO 60% </h3>
              <div className="text-lg">For the summer season</div>
            </div>
            <div className="mt-[34px] ">
              <Image width={340} src={img1} alt="event1 " />
            </div>
          </div>
           left section 2 div 
          <div className="w-[350px]  h-[187px] text-white bg-gray-800 flex justify-center items-center">
            <div className="text-center">
              <h3 className="text-4xl font-bold">GET 30% Off</h3>
              <div className="mt-4">USE PROMO CODE</div>
              <button className="bg-gray-700  h-10 w-60 rounded-[6px] ">DINEWEEKENDSALE</button>
            </div>
          </div>
        </div>

         rignt section 
        <div>
          <div className="flex flex-col md:flex-row gap-4">
             vertical promotion card 1 
            <div className="w-64 h-96 bg-[#efe1c7]">
              <div className="mt-5 ml-5">Flex Sweatshirt</div>
              <div className=" ml-5">
                <s>$100.00</s>
                <span className="ml-3 font-bold">$75.00</span>
                <Image className="mt-[14px]" src={img2} alt="event2" />
              </div>
            </div>
            vertical promotion card 1 *

            <div className="w-64 h-96 bg-slate-300">
              <div className="mt-5 ml-5">Flex Sweatshirt</div>
              <div className=" ml-5">
                <s>$100.00</s>
                <span className="ml-2 font-bold">$75.00</span>
                <Image className="mt-[9px]" src={img3} alt="event2" />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <section className="lg:px-10 px-5 max-w-[1240px] mx-auto mt-10">
      <p className="text-center mt-20 font-semibold text-blue-900">Promotions</p>
      <h3 className="my-4  first:mt-0 text-center text-4xl font-bold">Our Promotions Event</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 w-full">
        <div className="sm:col-span-2 space-y-2">
          <div className=" bg-[#d6d6d8]  flex justify-center items-center px-5">
            <div>
              <h4>
                GET UP TO <span className="text-2xl">60%</span>
              </h4>
              <p>For the summer season</p>
            </div>
            <Image src={img1} alt="" width={226} height={226} />
          </div>
          <div className="flex flex-col items-center justify-center  bg-[#212121] h-48 py-5 text-center text-white">
            <h3>GET 30% Off</h3>
            <p className="text-xs">USE PROMO CODE</p>
            <button className="bg-[#474747] px-8 py-3 tracking-widest text-white text-xs mt-1">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
        <div className=" bg-[#efe1c7]">
          <div className="p-5">
            <p>Flex Sweatshirt</p>
            <p className="text-base">
              <span className="line-through text-sm mr-1">$100.00</span> $75.00
            </p>
          </div>
          <Image
            alt=""
            src={img2}
            width={220}
            height={220}
            className="mx-auto"
          />
        </div>
        <div className=" bg-[#d7d7d9]">
          <div className="p-5">
            <p className="capitalize">Flex Push button bombar</p>
            <p className="text-base">
              <span className="text-sm line-through mr-1">$225.00</span>$190.00
            </p>
          </div>
          <Image
            alt=""
            src={img3}
            width={220}
            height={220}
            className="mx-auto"
          />
        </div>
      </div>
      </section>
    </>
    );
  }