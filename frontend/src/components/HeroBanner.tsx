import React from "react";
import Image from "next/image";
import { CgShoppingCart } from "react-icons/cg";
import Link from "next/link";
import headerImg from "../../public/images/header.png";
import featured1 from "../../public/images/Featured1.png";
import featured2 from "../../public/images/Featured2.png";
import featured3 from "../../public/images/Featured3.png";
import featured4 from "../../public/images/Featured4.png";

function HeroBanner() {
  return (
    <header className="flex relative justify-between gap-16">
    <div className="flex flex-1">
        <div className="flex flex-col items-center gap-10">
            <span>Sale 70%</span>
            <h1 className="font-bold text-[3.5rem] leading-[55px] tracking-[0.03rem] text-[#212121]">An Industrial Take on Streetwear</h1>
            <p className="font-normal text-base leading-6 text-[#666666] w-[70%]">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            <Link href='/products'>
                 <button className="p-4 text-[1rem] w-[35%]" type='button'><CgShoppingCart size={26} />  Start Shopping</button>
            </Link>
        </div>

        <div className='grid grid-cols-1 gap-[1rem]'>
            <Image src={featured1} width={100} height={35} alt='img' />
            <Image src={featured2} width={100} height={35} alt='img' />
            <Image src={featured3} width={100} height={35} alt='img' />
            <Image src={featured4} width={100} height={35} alt='img' />
        </div>
    </div>

    <div className='flex flex-1'>
        <div className='w-[600px] h-[600px] rounded-[50%] bg-[#FFECE3]'>
            <Image className='absolute top-[-5%]' src={headerImg} width={650} height={650} alt='header image' />
        </div>
    </div>
</header>

    // <header className="flex relative justify-between gap-16">
    //   <div className="flex flex-1">
    //     <div className="flex flex-col items-center gap-10">
    //       <span>Sale 70%</span>
    //       <h1>An Industrial Take on Streetwear</h1>
    //       <p>
    //         Anyone can beat you but no one can beat your outfit as long as you
    //         wear Dine outfits.
    //       </p>
    //       <Link href="/products">
    //         <button className="p-4 text-[1rem] w-[35%]" type="button">
    //           <CgShoppingCart size={26} /> Start Shopping
    //         </button>
    //       </Link>
    //     </div>

    //     <div className='grid grid-cols-1 gap-[1rem]'>
    //         <Image src={featured1} width={100} height={35} alt='img' />
    //         <Image src={featured2} width={100} height={35} alt='img' />
    //         <Image src={featured3} width={100} height={35} alt='img' />
    //         <Image src={featured4} width={100} height={35} alt='img' />
    //     </div>


    //   </div>
    // </header>
  );
}

export default HeroBanner;
