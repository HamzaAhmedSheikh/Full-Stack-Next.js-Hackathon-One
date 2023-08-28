"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import logo from "../../public/images/Logo.png";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useStateContext } from "@/context/StateContext";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Menu from "./Menu";




function Navbar()  {    
    const [toggleMenu, setToggleMenu] = useState(false);
    const {cartItems, totalPrice, totalQty, onRemove, toggleCartItemQuantity} = useStateContext();  
    const [nav, setNav] = useState(false);
       
    // for(const [key, value] of Object.entries(cart)) {      
    //     itemCount = itemCount + cart[key].quantity;
    // }   


    // useEffect(() => {
    //   console.log("cart ==> ", totalQty)
    // }, [totalQty]);

  

    const handleNav = () => {
      setNav(!nav);
    };

    


    // const [localState, setLocalState] = useState(state);

    // useEffect(() => {
    //     console.log("===> ", state);
    // }, [state]);

    // console.log("===> ", localState);
  
    // return localState;
   
    
   
  
    return (      
      // <nav className="flex justify-between items-center my-8 mx-20">
      //   <Link href='/'>
      //     <Image src={logo} width={140} height={25} alt='logo' />
      //   </Link>
      //   <ul className='flex gap-12'>
      //     <Link href='/female'><li>Female</li></Link>
      //     <Link href='/male'><li>Male</li></Link>
      //     <Link href='/kids'><li>Kids</li></Link>
      //     <Link href='/products'><li>All Products</li></Link>
      //   </ul>
  
      //     <div className='flex items-center width-[30%] border-solid border-2 border-[#e4e5eb] rounded-md px-1'>
      //       <CiSearch />
      //       <input 
      //         className="border-none w-full p-[5px]"
      //         type='text' 
      //         placeholder='What you looking for'/>
      //     </div>
     
        
      //   <Link href='/cart'>   
      //     <button className='flex p-3 bg-[#F1F1F1] rounded-[50%] border-none relative transition-transform duration-[0.4s]'>   
      //       <CgShoppingCart size={22} /> 
   
      //       <span className="absolute top-0 right-[5px] text-xs	text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold"> {totalQty} </span> 
            
      //     </button>          
      //   </Link> 

      //   {showCart ?
      //     <Link href='/cart'>
      //       <button className='hidden p-3 bg-[#F1F1F1] rounded-[50%] border-none relative transition-transform duration-[0.4s]' onClick={() => setShowCart(false)}>  
      //         <CgShoppingCart size={22} />
      //         <span className='absolute top-0 right-[5px] text-xs	text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold'>{totalQty}</span> 
      //       </button>
      //     </Link> 
      //   : 
      //     <button className='hidden p-3 bg-[#F1F1F1] rounded-[50%] border-none relative transition-transform duration-[0.4s]' onClick={() => setShowCart(true)}> 
      //       <CgShoppingCart size={22} />
      //       <span className='absolute top-0 right-[5px] text-xs	text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold'>{totalQty}</span>
      //     </button> 
      // }

      
      //   <div className='hidden'>
      //     <RiMenu3Line color='black' fontSize={27} onClick={() => setToggleMenu(true)} />
      //     {toggleMenu && (
      //       <div className='flex flex-col justify-center items-center z-[3] fixed top-0 left-0 w-full h-full bg-white transition duration-[0.5s] ease-in-out'>
      //         <Link href='/'>
      //           <Image className='position-absolute text-[2.5rem] cursor-pointer left-[50px] top-[50px]' src={logo} width={140} height={25} alt='logo' />
      //         </Link>
      //         <RiCloseLine  color='black' fontSize={27} className='position-absolute text-[2.5rem] cursor-pointer right-[50px] top-[50px]' onClick={() => setToggleMenu(false)} />
      //         <ul className='flex items-center flex-col gap-4'>   
      //           <Link href='/cart'>
      //               <button className="className='flex p-3 bg-[#F1F1F1] rounded-[50%] border-none relative transition-transform duration-[0.4s]">   
      //                 <CgShoppingCart size={22} />
      //                 <span className="absolute top-0 right-[5px] text-xs	text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold">{totalQty}</span> 
      //               </button>
      //           </Link> 
      //           <Link href='/female'><li>Female</li></Link>
      //           <Link href='/male'><li>Male</li></Link>
      //           <Link href='/kids'><li>Kids</li></Link>
      //           <Link href='/products'><li>All Products</li></Link>
      //         </ul>
      //       </div>
      //     )}
      //   </div>
      // </nav>      

      <nav>
      {/* Large Srceen */}
      <div className="flex justify-between items-center w-full h-20 lg:px-20 px-5 max-w-[1240px] mx-auto">
        <div>
          <Link href={"/"}>
            <Image src="/Logo.webp" alt="" width={150} height={150} />
          </Link>
        </div>
        <div className="hidden lg:block">
          <Menu />
        </div>
        <div className="border border-gray-300 rounded-md px-2 bg-white hidden lg:flex items-center w-[30%]">
          <AiOutlineSearch size={15} />
          <input
            type="text"
            placeholder="What you looking for"
            className="outline-none ml-1"
          />
        </div>        

        <div className="hidden lg:flex items-center justify-between gap-2">
          <div className="flex justify-center">
            <SignedOut>
              <SignInButton mode="modal" afterSignInUrl={"/"}>
                <button className="text-white bg-[#212121] px-8 py-2 rounded-md">
                  Sign in
                </button>
              </SignInButton>
             </SignedOut>

              <SignedIn>
                <div className="flex gap-10 items-center">
                  <UserButton  afterSignOutUrl={"/"} />                   
                </div>
             </SignedIn>
          </div>
         </div>   


        <div className="hidden lg:flex items-center justify-between gap-2">       
          <Link href={"/cart"} onClick={handleNav}>
            <div className="w-10 h-10 rounded-full bg-[#f1f1f1] flex justify-center items-center relative">
              <AiOutlineShoppingCart size={25} />
              <span className="absolute left-7 bottom-7 w-5 h-5 bg-[#f02d34] text-white text-xs rounded-full flex justify-center items-center">
                {totalQty}
              </span>
            </div>
          </Link>
        </div>

        <div className="flex justify-center items-center lg:hidden">
          <AiOutlineMenu onClick={handleNav} size={25} />
        </div>
      </div>
      {/* Mobile Srceen */}
      <div
        className={`${
          nav
            ? "flex lg:hidden flex-col w-full h-screen items-center fixed top-0 left-0 z-[100] bg-white px-5 "
            : "flex lg:hidden flex-col w-full h-screen items-center fixed top-[-100%] left-0 z-[100] bg-white px-5 "
        }`}
      >
        <div className="flex justify-between items-center w-full h-20">
          <div>
            <Link href={"/"}>
              <Image src="/Logo.webp" alt="" width={150} height={150} />
            </Link>
          </div>
          <div>
            <TiDeleteOutline onClick={handleNav} size={30} />
          </div>
        </div>
        <div className="mt-28 flex flex-col items-center justify-center gap-5">
          <Link href={"/cart2"} onClick={handleNav}>
            <div className="w-12 h-12 rounded-full bg-[#f1f1f1] flex justify-center items-center relative">
              <AiOutlineShoppingCart />

              <span className="absolute bottom-8 left-7 w-5 h-5 bg-[#f02d34] text-white text-xs rounded-full flex justify-center items-center">
              {totalQty}
              </span>
            </div>
          </Link>

          <span onClick={handleNav}>
            <Menu />
          </span>

          <div className="flex items-center">
              <div className="flex justify-center">
                <SignedOut>
                  <SignInButton mode="modal" afterSignInUrl={"/"}>
                    <button className="text-white bg-[#212121] px-8 py-2 rounded-md">
                      Sign in
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <div className="flex gap-10 items-center">
                    <UserButton  afterSignOutUrl={"/"} />                   
                  </div>
                </SignedIn>
              </div>
           </div>   
        </div>
      </div>
    </nav>
    )
  }
  
  export default Navbar