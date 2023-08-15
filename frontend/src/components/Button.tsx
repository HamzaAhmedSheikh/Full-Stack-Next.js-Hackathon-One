"use client";
import { useStateContext } from '@/context/StateContext';
import { CgShoppingCart } from "react-icons/cg";


export function AddButton({product}: any) {
    let { onAdd, qty } = useStateContext()
  return(
    <div className='add-to-cart flex items-center gap-4'>          
             <button className='flex justify-center items-center gap-2 btn w-[40%] text-[0.875rem] bg-[#212121] text-gray-100 p-[10px] leading-[18px]' type='button' onClick={() => onAdd(product, qty)}>
               <CgShoppingCart size={20} /> Add to Cart      
            </button>
         
            
            <p className='price font-bold text-[1.5rem] leading-[30px] tracking-widest text-[#212121]'>${product.price}.00</p>  
          </div>  
  )
}

// export default onAddButton;
