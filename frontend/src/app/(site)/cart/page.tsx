"use client";
import React, { useRef, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import {HiOutlineTrash} from 'react-icons/hi'
import toast from 'react-hot-toast';
import { useStateContext } from '@/context/StateContext';
import getStripePromise from '@/lib/getStripe';

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

   console.log("cartItems ==> ", cartItems)

      
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
      //   setLoading(true);
      //   const stripe = await stripePromise;
    
      //   const checkoutSession = await fetch(
      //     "http://localhost:3000/api/stripe",
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(cartItems),
      //     }
      //   );
    
      //     console.log("Result------------- in prod page==========",  checkoutSession);
    
      // //   const sessionID= await checkoutSession.json();
      // //   const result = await stripe?.redirectToCheckout({
      // //     sessionId: sessionID,
      // //   });
      // //   if (result?.error) {
      // //     alert(result.error.message);
      // //   }
      // //   setLoading(false);
      // // };
      //  let data = await checkoutSession.json();
      // return window.location.assign(data)
  
    
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
    <div className='cart-wrapper' ref={cartRef}>
    <h2>Shopping Cart</h2>
    <div className='cart-container'>
      <div className='cart-items'>
        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />
            <h1>Your shopping bag is empty</h1>
          </div>
        )}

        {cartItems.length >= 1 && cartItems.map((item) => (
          <div key={item._id} className='item-card'>
            <div className='item-image'>
              <img src={item.image} alt='img' />
            </div>
            <div className='item-details'>
              <div className='name-and-remove'>
                <h3>{item.name}</h3>  
                <button type='button' onClick={() => onRemove(item)} className='remove-item'>
                <HiOutlineTrash size={28} />  
                </button>
              </div>
              <p className='item-tag'>Dress</p>
              <p className='delivery-est'>Delivery Estimation</p>
              <p className='delivery-days'>5 Working Days</p>
              <div className='price-and-qty'>
                <span className='price'>${item.price * item.quantity}</span>  
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
      <div className='order-summary'>
        <h3>Order Summary</h3>
        <div className='qty'>
          <p>Quantity</p>
          <span>{totalQty} Product</span>
        </div>
        <div className='subtotal'>
          <p>Sub Total</p>
          <span>${totalPrice}</span>
        </div>
        {/* <div className='total'>
          <p>Total</p>
          <span>${totalPrice}</span>
        </div>  */}
        <div>
          <button className='btn' type='button' onClick={createCheckOutSession}> {isLoading ? 'Processing...' : 'Process to Checkout'}</button>
        </div>         
      </div>
      )}  

    </div>
  </div>
  )
}

