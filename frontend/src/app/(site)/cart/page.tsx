"use client";
import React, { useEffect, useMemo } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import {HiOutlineTrash} from 'react-icons/hi'
import toast from 'react-hot-toast';
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import Image from 'next/image';

interface Product {
   slug: string;
   name: string;
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
  const { cartItems, removeFromCart, updateCartItemQuantity } = useShoppingCartContext();


  
    useEffect(() => {
      console.log("Cart items changed:", cartItems);
  }, [cartItems]);

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
    <div className='flex flex-col item-center text-2xl text-bold'>
      Cart     

      {
        cartItems.map((item) => (
          <div key={item.product._id}>
            <p>{item.product.name}</p>
            <p>{item.quantity}</p>
            {/* <image  src={item.image} />   */}
          </div>
        ))
      }

      <button className='flex justify-center items-center gap-2 btn w-[40%] text-[0.875rem] bg-[#212121] text-gray-100 p-[10px] leading-[18px]' type='button'>
        Checkout      
      </button>
    </div>
  )
}

export default Cart;