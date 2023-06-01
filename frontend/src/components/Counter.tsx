"use client";
import React, { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateContext  } from '@/context/StateContext';
import { useShoppingCartContext } from '@/context/ShoppingCartContext';
const Counter = () => { 
  let { count, increment, decQty } = useShoppingCartContext();   
  
    console.log("count ==> ", count)
return (  
    <div className='quantity-desc flex gap-2'>
     <h4>Quantity: </h4>          
       <span className='minus border-2 border-solid border-gray-200 bg-gray-200 mr-[10px] rounded-[60%] px-2 py-1 cursor-pointer' onClick={decQty}> <AiOutlineMinus /> </span>
       <span className='num'> {count} </span>
       <span className='plus ml-[10px] border-2 border-solid border-black rounded-[60%] px-2 py-1 cursor-pointer' onClick={increment}> <AiOutlinePlus /></span>
    </div>
   
  );
};

export default Counter;
