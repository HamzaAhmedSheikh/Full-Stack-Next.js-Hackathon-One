"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useStateContext } from "@/context/StateContext";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import { useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import toast from 'react-hot-toast';
import getStripe from '@/lib/getStripe';
import { loadStripe } from "@stripe/stripe-js";

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
  // const cartRef: any = useRef();
  const {cartItems, totalPrice, totalQty, onRemove, toggleCartItemQuantity} = useStateContext();  
  let [isLoading, setLoading] = useState(false) 
  
  console.log("cartItems ==> ", cartItems);
  
  const createCheckOutSession = async () => {
    const toastId = toast.loading("trying checkout");
    const stripe = await getStripe();
    // console.log(
    //   "handleCheckout ~ stripe:",
    //   stripe
    // );

    fetch(`api/stripe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify({cartItems: cartItems}),
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

  const publishableKey = "pk_test_51NEAWFAbedfhBaKkXrvOtAOadiZIxa1A2aoeGFc6xaZs2Mxv5eOgkZK5A1Tac7GsV7fQJPvfgktoh6CtsidwqXTu00uEyI9K5q";
  const stripePromise = loadStripe(publishableKey);

  const _createCheckOutSession = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    const checkoutSession = await fetch(
      "http://localhost:3000/api/create-stripe-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItems: cartItems,
        }),
      }
    );

      console.log("Result------------- in prod page==========",  checkoutSession);

    const sessionID= await checkoutSession.json();
    const result = await stripe?.redirectToCheckout({
      sessionId: sessionID,
    });
    if (result?.error) {
      alert(result.error.message);
    }
    setLoading(false);
  };
  
  


  return (
    <div className="bg-white">
     <div className="mx-auto max-w-7xl">

     <div className="px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
       <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
        <div className="lg:col-span-7"> 
        {cartItems.map((item: any) => (
          <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
              <Image
                fill
                src={item.image}
                alt={item.name}
                className="object-cover object-center"
              />             
            </div>

            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
              {/* <div className="absolute z-10 right-0 top-0 cursor-pointer">
                <HiOutlineTrash onClick={() => onRemove(item)} size={15} />
                <button className="bg-transparent border-none" onClick={() => onRemove(item)}>
                  <HiOutlineTrash size={28} />  
                 </button>  
              </div>              
             */}

            <div className="relative pr-9 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:pr-0">
              <div className="flex justify-between">
                <p className=" text-lg font-semibold text-black">
                  {item.name}
                </p>
              </div>            
              
            </div>           
              <p className="font-bold text-lg mb-2 text-gray-500"> {item.tags} </p>  
              <p className="font-bold text-lg mb-2"> Delivery Estimation </p>
              <p className="font-bold text-lg text-yellow-500 mb-2"> 5 Working Days </p>
              <p className="font-bold text-lg"> ${item.price} </p>      
                 
          </div>   

           <div className="flex flex-col items-center justify-between md:ml-40 md:mx-0">
                  <button className="bg-transparent border-none" onClick={() => onRemove(item)}>
                  <HiOutlineTrash size={28} />  
                  </button>
                  <div className="flex items-center">
                    <button
                    onClick={() => toggleCartItemQuantity(item._id, 'dec')}
                    className="h-8 w-8 p-1 text-2xl font-black"
                    >
                     <AiOutlineMinus />
                    </button>
                    {item.quantity}
                    <button
                    onClick={() => toggleCartItemQuantity(item._id, 'inc')}
                      className="h-8 w-8 p-1 text-2xl font-black"
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>        
          </li>                             
         ))}
         
        </div>

        <div
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 className="text-lg font-medium text-gray-900">
        Order summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between  pt-4">
          <div className="text-base font-medium text-gray-900"> Quantity </div>
          <div className="font-semibold"> {totalQty} Product  </div>          
        </div>
        <div className="flex items-center justify-between  pt-4">         
          <div className="text-base font-medium text-gray-900">Product Sub Total</div>
         <div className="font-semibold"> ${totalPrice}</div>
        </div>
      </div>
        <button
          onClick={_createCheckOutSession}
          className="flex items-center justify-center w-full mt-6 font-semibold leading-[18px] bg-[#212121] py-[10px] text-white gap-2">
          Proceed to Payment
        </button>
    </div>
      </div>
     </div>       

     </div>
    </div>
  //   <div className='cart-wrapper p-12 basis-3/4' ref={cartRef} >
  //   <h2 className='font-bold block text-[1.5rem] text-[#111] my-2 mx-0'>Shopping Cart</h2>
  //   <div className='cart-container flex flex-col justify-between gap-16'>
  //     <div className='cart-items flex flex-col justify-between mt-8 gap-16'>
  //       {cartItems.length < 1 && (
  //         <div className='empty-cart flex justify-center items-center'>
  //           <AiOutlineShopping size={150} />
  //           <h1 className='font-bold block text-[2rem] text-[#111] font-Sora my-2 mx-0'>Your shopping bag is empty</h1>
  //         </div>
  //       )}        

  //       {cartItems.length >= 1 && cartItems.map((item: any) => (
  //         <div key={item._id} className='item-card flex flex-col'>
  //           <div className='item-image w-[25%] h-[190px] rounded-[9px]'>
  //             <Image src={item.image} alt={item.name} width={100} height={100} />
  //           </div>
  //           <div className='item-details flex flex-col justify-between w-[75%]'> 
  //             <div className='name-and-remove flex justify-between'>
  //               <h3 className='font-light text-[1.3rem] leading-[25px] text-[#212121]'>{item.name}</h3>  
                
  //               <button type='button' onClick={() => onRemove(item)} className='remove-item bg-transparent border-none'>
  //               <HiOutlineTrash size={28} />  
  //               </button>
  //             </div>             
  //             <p className='item-tag font-semibold text-base leading-[22px] text-[#212121]'>Dress</p>
  //             <p className='delivery-est font-semibold text-base leading-[22px] text-[#212121]'>Delivery Estimation</p>
  //             <p className='delivery-days font-semibold text-base leading-[22px] text-[#212121]'>5 Working Days</p>
  //             <div className='price-and-qty flex justify-between font-bold leading-[20px] tracking-widest text-[#212121]'>
              
  //               <span className='price font-bold leading-[20px] tracking-widest text-[#212121]'>${item.price * item.quantity}</span>  
  //               <div>
  //                 <span className='minus' onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus /></span>
  //                 <span className='num'>{item.quantity}</span>
  //                 <span className='plus' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></span>
  //               </div>   
  //             </div>
  //           </div>
  //         </div>
  //         ))}    
  //     </div>

  //     {cartItems.length >= 1 && (
  //     <div className='order-summary p-8 bg-[#FBFCFF] flex flex-col flex-1 gap-8'>
  //       <h3 className='text-lg font-medium'>Order Summary</h3>
  //       <div className='qty flex justify-between gap-16'>
  //         <p>Quantity</p>
  //         <span>{totalQty} Product</span>
  //       </div>
  //       <div className='subtotal flex justify-between gap-16'>
  //         <p>Sub Total</p>
  //         <span>${totalPrice}</span>
  //       </div>
  //       <div className='total'>
  //         <p>Total</p>
  //         <span>${totalPrice}</span>
  //       </div> 
  //       <div className='flex justify-between gap-16'>
  //         <button className='btn flex items-center justify-center w-full font-semibold leading-[18px] bg-[#212121] py-[10px] text-white gap-2 font-Sora' type='button' onClick={createCheckOutSession}> {isLoading ? 'Processing...' : 'Process to Checkout'}</button>
  //       </div>         
  //     </div>
  //     )}  
          

  //   </div>   
  // </div>

  )
}

