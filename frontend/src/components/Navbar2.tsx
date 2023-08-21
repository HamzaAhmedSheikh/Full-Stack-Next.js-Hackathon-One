'use client'

import { useStateContext } from '@/context/StateContext';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
// import { useAppSelector } from '../store/hooks'
import logo from "../../public/images/Logo.png";
import { CgShoppingCart } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export default function Header() {

    // const cartItems = useAppSelector((state) => state.cart.cartItems)
    const {cartItems, totalPrice, totalQty, onRemove, toggleCartItemQuantity} = useStateContext();  


    const [menu, setMenu] = useState(false);

    const handleMenuShow = () => {
        setMenu(true);
    }

    const handleMenuHide = () => {
        setMenu(false)
    }

    return (
        <section className=' max-w-[450px] md:max-w-[900px] lg:max-w-[1500px] mx-auto mt-6 md:mt-12 lg:mt-8'>
            <nav className={`hidden items-center sticky justify-between lg:flex transition-transform duration-300`}>
                {/* <div>
                    <Link href='/'>
                        <Image src={logo} alt="Dine Market Logo" width={140} height={140} />
                    </Link>
                </div>
                <div className='font font-arimo hidden lg:flex items-center justify-center gap-x-10'>
                    <Link href='/female' >Female</Link>
                    <Link href='/male' >Male</Link>
                    <Link href='/products' >All Products</Link>
                </div>
                <div className='hidden items-center border lg:flex rounded-md'>
                    <span className='px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </span>
                    <input type="text" placeholder='What you are looking for' className='w-[450px] rounded-md text-sm' />
                </div>
                <Link href="/cart">
                    <div className='relative hidden lg:flex'>
                        <div>
                          <CgShoppingCart size={22} /> 
                        </div>
                        {cartItems.length > 0 &&
                            <span className='absolute text-white bg-red-500 rounded-full w-[20px] h-[20px] text-[14px] 
                            -top-4 left-6 flex items-center justify-center'>
                                {cartItems.length}
                            </span>
                        }
                    </div>
                </Link> */}
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
     
          <div className="flex flex-col items-center">
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

        <Link href='/cart2'>   
          <button className='flex p-3 bg-[#F1F1F1] rounded-[50%] border-none relative transition-transform duration-[0.4s]'>   
            <CgShoppingCart size={22} /> 
   
            <span className="absolute top-0 right-[5px] text-xs	text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold"> {totalQty} </span> 
            
          </button>          
        </Link> 


            </nav>
            {menu === false &&
                <nav className='flex items-center justify-between lg:hidden px-4 md:px-10 '>
                    <div>
                        <Link href='/'>
                            <Image src={logo} alt="Dine Market Logo" width={140} height={140} />
                        </Link>
                    </div>
                    <button onClick={handleMenuShow}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h18v2H3V4Zm6 7h12v2H9v-2Zm-6 7h18v2H3v-2Z" />
                            </svg>
                        </span>
                    </button>
                </nav>
            }
            {menu === true &&
                <section className='transition-all duration-700  max-w-[450px] md:max-w-[900px]'>
                    <nav className='flex items-center justify-between'>
                        <div>
                            <Link href='/'>
                                <Image src={logo} alt="Dine Market Logo" width={140} height={140} />
                            </Link>
                        </div>
                        <div>
                            <button className='' onClick={handleMenuHide}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </nav>
                    <div className='flex flex-col items-center justify-center gap-y-4 bg-gray-100 text-black
                    w-[75vw] mx-auto rounded-xl p-10 mt-20 font-serif'>
                        <Link href="/cart">
                            <div className='relative flex'>
                                <div>
                                    <CgShoppingCart size={22} /> 
                                </div>
                                <span className='absolute text-white bg-red-500 rounded-full p-[3px] text-[10px] -top-4 left-5'>
                                {totalQty}
                                </span>
                            </div>
                        </Link>
                        <Link href='/female' >Female</Link>
                        <Link href='/male' >Male</Link>
                        <Link href='/products' >All Products</Link>
                    </div>
                </section>
            }
        </section>


    )
}