"use client";
import React, { useEffect, useMemo, useContext, useRef, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import {HiOutlineTrash} from 'react-icons/hi'
import toast from 'react-hot-toast';
// import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { CartContext } from '@/context/CartContext';
import Image from 'next/image';
import Link from "next/link";
import { useStateContext } from '@/context/StateContext';

interface Product {
   slug: string;
   name: string;
   tags: string;
   details: any[],
   care: any[],
   price: number;
   _id: string;   
 }


 interface CartItem {
  product: Product;
  quantity: number;
}

interface Props {
  item: CartItem;
}

const Cart = async () => {
  const cartRef = useRef();
  // const { cartItems, removeFromCart } = useShoppingCartContext();
  const { state, dispatch } = useContext(CartContext);
  const { cart } = state
  const {cartItems, totalPrice, totalQty, onRemove, toggleCartItemQuantity} = useStateContext();
  let [isLoading, setLoading] = useState(false)
  let total = 0;


  useEffect(() => {
    console.log("Cart items changed:", cartItems);
    console.log("totalPrice ===> ", totalPrice)
}, [cartItems]);

  async function Checkout() {
    // setLoading(true)
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      body: JSON.stringify({
        cartItems,
      })
    }) 
    
    const data = await response.json()
    console.log("data ==> ", data)
    return data
    // setLoading(false) }

  }
   
  
    

  // console.log("item ==> ", item.product.name)
 
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
    <div className='cart-wrapper'>
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
            <button className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white" type='button' onClick={Checkout}>
              {isLoading ? 'Loading...' : 'Process to Checkout'}
            </button>
          </div>         
        </div>
        )}  

      </div>
    </div>
  )
}

export default Cart;