"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import logo from "../../public/images/Logo.png";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useStateContext } from "@/context/StateContext";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    // const {showCart, setShowCart, totalQty} = useStateContext();
    const { cartCount } = useShoppingCartContext();
    // console.log("ttoalQty", totalQty)
    // const [searchTerm, setSearchTerm] = useState('')
  
    return (      
      <nav className="flex justify-between items-center my-8 mx-20">
        <Link href='/'>
          <Image src={logo} width={140} height={25} alt='logo' />
        </Link>
        <ul className='flex gap-12'>
          <Link href='/female'><li>Female</li></Link>
          <Link href='/male'><li>Male</li></Link>
          <Link href='/kids'><li>Kids</li></Link>
          <Link href='/products'><li>All Products</li></Link>
        </ul>
  
          <div className='flex items-center width-[30%] border-solid border-2 border-[#e4e5eb] rounded-md px-1'>
            <CiSearch />
            <input 
              className="border-none w-full p-[5px]"
              type='text' 
              placeholder='What you looking for'/>
          </div>
     
        
        <Link href='/cart'>   
          <button className='flex p-3 bg-[#F1F1F1] rounded-[50%] border-none relative transition-transform duration-[0.4s]'>   
            <CgShoppingCart size={22} /> 
   
            <span className="absolute top-0 right-[5px] text-xs	text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold"> {cartCount} </span> 
          </button>
        </Link> 

        {/* {showCart ?
          <Link href='/cart'>
            <button className='flex p-3 bg-[#F1F1F1] rounded-[50%] border-none relative transition-transform duration-[0.4s]' onClick={() => setShowCart(false)}>  
              <CgShoppingCart size={22} />
              <span className='absolute top-0 right-[5px] text-xs	text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold'>{totalQty}</span> 
            </button>
          </Link> 
        : 
          <button className='flex p-3 bg-[#F1F1F1] rounded-[50%] border-none relative transition-transform duration-[0.4s]' onClick={() => setShowCart(true)}> 
            <CgShoppingCart size={22} />
            <span className='absolute top-0 right-[5px] text-xs	text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold'>{totalQty}</span>
          </button> 
      } */}

      
        <div className='hidden'>
          <RiMenu3Line color='black' fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className='flex flex-col justify-center items-center z-[3] fixed top-0 left-0 w-full h-full bg-white transition duration-[0.5s] ease-in-out'>
              <Link href='/'>
                <Image className='position-absolute text-[2.5rem] cursor-pointer left-[50px] top-[50px]' src={logo} width={140} height={25} alt='logo' />
              </Link>
              <RiCloseLine  color='black' fontSize={27} className='position-absolute text-[2.5rem] cursor-pointer right-[50px] top-[50px]' onClick={() => setToggleMenu(false)} />
              <ul className='flex items-center flex-col gap-4'>   
                <Link href='/cart'>
                    <button className="className='flex p-3 bg-[#F1F1F1] rounded-[50%] border-none relative transition-transform duration-[0.4s]">   
                      <CgShoppingCart size={22} />
                      <span className='className="absolute top-0 right-[5px] text-xs	text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold"'>0</span> 
                    </button>
                </Link> 
                <Link href='/female'><li>Female</li></Link>
                <Link href='/male'><li>Male</li></Link>
                <Link href='/kids'><li>Kids</li></Link>
                <Link href='/products'><li>All Products</li></Link>
              </ul>
            </div>
          )}
        </div>
      </nav>      
    )
  }
  
  export default Navbar