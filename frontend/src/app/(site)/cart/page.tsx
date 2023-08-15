"use client";
import React, { useRef, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import {HiOutlineTrash} from 'react-icons/hi'
import toast from 'react-hot-toast';
import { useStateContext } from '@/context/StateContext';
import getStripePromise from '@/lib/getStripe';
import Image from 'next/image';
import CartSummary from './cart-summary';
import { CartItems } from './cart-items';
interface IProduct {
   slug: string;
   name: string;
   tags: string;
   details: string[],
   care: string[],
   price: number;
   _id: string;   
 }

export default function Cart() {
  const cartRef: any = useRef();
  const {cartItems, totalPrice, totalQty, onRemove, toggleCartItemQuantity} = useStateContext();  
  let [isLoading, setLoading] = useState(false) 

  //  console.log("cartItems ==> ", cartItems)

      
      const createCheckOutSession = async () => {
        const toastId = toast.loading("trying checkout");
        const stripe = await getStripePromise();
        console.log(
          "handleCheckout ~ stripe:",
          stripe
        );
    
        fetch(`api/stripe`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          cache: "no-cache",
          body: JSON.stringify(cartItems),
        })
          .then((response) => response.json())
          .then((response) => {
            toast.dismiss(toastId);
            if (response.success === false || !stripe) {
              toast.error("checkout failed");
            } else {
              toast.loading("Redirecting...");
              stripe.redirectToCheckout({ sessionId: response.id });
            }
          })
          .catch((err) => {  
            toast.dismiss(toastId);
            toast.error("checkout failed");
          });      
    
      }
 
  // const handleQuantityChange = (qty: number) => {
  //   const quantity = Number(qty);
  //   if (quantity >= 1) {
  //     updateCartItemQuantity(item.product._id, quantity);
  //   }
  // };

  // const handleRemoveClick = () => {
  //   removeFromCart(item.product._id);
  // };

  
  


  return (
    
    <div className='cart-wrapper p-12' ref={cartRef}>
    <h2 className='font-bold block text-[1.5rem] text-[#111] my-2 mx-0'>Shopping Cart</h2>
    <div className='cart-container flex flex-col justify-between gap-16'>
      <div className='cart-items flex flex-col justify-between mt-8 gap-16'>
        {cartItems.length < 1 && (
          <div className='empty-cart flex justify-center items-center'>
            <AiOutlineShopping size={150} />
            <h1 className='font-bold block text-[2rem] text-[#111] font-Sora my-2 mx-0'>Your shopping bag is empty</h1>
          </div>
        )}        

        {cartItems.length >= 1 && cartItems.map((item) => (
          <div key={item._id} className='item-card flex flex-col'>
            <div className='item-image w-[25%] h-[190px] rounded-[9px]'>
              <Image src={item.image} alt={item.name} width={100} height={100} />
            </div>
            <div className='item-details flex flex-col justify-between w-[75%]'> 
              <div className='name-and-remove flex justify-between'>
                <h3 className='font-light text-[1.3rem] leading-[25px] text-[#212121]'>{item.name}</h3>  
                
                <button type='button' onClick={() => onRemove(item)} className='remove-item bg-transparent border-none'>
                <HiOutlineTrash size={28} />  
                </button>
              </div>             
              <p className='item-tag font-semibold text-base leading-[22px] text-[#212121]'>Dress</p>
              <p className='delivery-est font-semibold text-base leading-[22px] text-[#212121]'>Delivery Estimation</p>
              <p className='delivery-days font-semibold text-base leading-[22px] text-[#212121]'>5 Working Days</p>
              <div className='price-and-qty flex justify-between font-bold leading-[20px] tracking-widest text-[#212121]'>
              
                <span className='price font-bold leading-[20px] tracking-widest text-[#212121]'>${item.price * item.quantity}</span>  
                <div>
                  <span className='minus' onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus /></span>
                  <span className='num'>{item.quantity}</span>
                  <span className='plus' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></span>
                </div>   
              </div>
            </div>
          </div>
          ))}    
      </div>

      {cartItems.length >= 1 && (
      <div className='order-summary p-8 bg-[#FBFCFF] flex flex-col flex-1 gap-8'>
        <h3 className='text-lg font-medium'>Order Summary</h3>
        <div className='qty flex justify-between gap-16'>
          <p>Quantity</p>
          <span>{totalQty} Product</span>
        </div>
        <div className='subtotal flex justify-between gap-16'>
          <p>Sub Total</p>
          <span>${totalPrice}</span>
        </div>
        <div className='total'>
          <p>Total</p>
          <span>${totalPrice}</span>
        </div> 
        <div className='flex justify-between gap-16'>
          <button className='btn flex items-center justify-center w-full font-semibold leading-[18px] bg-[#212121] py-[10px] text-white gap-2 font-Sora' type='button' onClick={createCheckOutSession}> {isLoading ? 'Processing...' : 'Process to Checkout'}</button>
        </div>         
      </div>
      )}  
          

    </div>   
  </div>

  )
}

