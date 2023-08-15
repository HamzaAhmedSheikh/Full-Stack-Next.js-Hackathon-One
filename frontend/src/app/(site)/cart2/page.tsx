"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useStateContext } from "@/context/StateContext";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import { useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import toast from 'react-hot-toast';
import getStripe from '@/lib/getStripe';





export default function CartComponent() {
    // const cartRef: any = useRef();
  const {cartItems, totalPrice, totalQty, onRemove, toggleCartItemQuantity} = useStateContext(); 
  const [loading, setLoading] = useState(false);

  const createCheckOutSession = async () => {
    const toastId = toast.loading("trying checkout");
    const stripe = await getStripe();
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

  // const handlePayment = async () => {
  //   // try {
  //     const toastId = toast.loading("trying checkout");
  //     const stripe = await getStripe();
  //     await fetch("/api/stripe", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       cache: "no-cache",
  //       body: JSON.stringify(cartItems),
  //     })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       toast.dismiss(toastId);
  //       if (response.success === false || !stripe) {
  //         toast.error("checkout failed");
  //       } else {
  //         toast.loading("Redirecting...");
  //         stripe.redirectToCheckout({ sessionId: response.id });
  //       }
  //     })
  //     .catch((err) => {  
  //       toast.dismiss(toastId);
  //       toast.error("checkout failed");
  //     });      
    
  // };


  return(
    <>
        <main>
      <h1 className="my-4 text-center text-3xl font-bold capitalize text-black md:text-4xl">
        Shopping Cart page
      </h1>
      {!cartItems.length ? (
        <div className="flex min-h-[50vh] flex-col items-center justify-center">
          <AiOutlineShopping className="text-4xl" />
          <Link href="/products" className="text-4xl">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="main grid grid-cols-1 md:grid-cols-3">

          <div className="cart col-span-2 flex flex-col gap-6 ">
            {cartItems.map((item: any) => (
              <div
                className="group md:flex md:h-52 md:items-start items-center p-4 md:w-[700px] mt-20 md:ml-60"
                key={item._id}
              >
                <div className="w-[25%] h-[190px] md:h-48 md:w-48 rounded-[9px]">
                  <Image
                    width={800}
                    height={800}
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="flex flex-row ">
                <div className="md:mx-10 mr-12 capitalize my-5">
                  <p className="my-1">{item.productName}</p>
                  <p className="my-1">{item.category}</p>
                  <p className="my-1">Delivery Estimation</p>
                  <p className="my-1">5 Working Days</p>
                  <p className="my-1">${item.price}</p>
                </div>

                <div className="flex flex-col items-center justify-between md:ml-40 my-5 md:mx-0">
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
                </div>
              </div>
            ))}
          </div>
          <div className="order order-first md:order-none md:sticky top-60 col-span-1 mx-auto flex h-fit w-[75%] flex-col gap-4">
            <h2 className="text-center text-xl font-bold text-black">
              Order Summary
            </h2>
            {/* <div className="flex flex-col"></div> */}
            <p className="flex justify-between">
              <span>Quantity</span>
              <span>{totalQty} Product</span>
            </p>

            <p className="flex justify-between">
              <span>Product Sub Total</span>
              <span>${totalPrice}</span>
            </p>

            <button
              // className={`btn flex h-10 items-center justify-evenly py-2 ${
              //   loading ? "" : ""
              // } disabled:cursor-not-allowed`}
              // disabled={loading}
              // title={!cartItems.length ? "Add Products First" : ""}
              className="flex items-center justify-center w-full font-semibold leading-[18px] bg-[#212121] py-[10px] text-white gap-2"
              onClick={createCheckOutSession}
            >
              Proceed to Payment
              {/* {state.cart.length ? "Proceed to Checkout"  } */}
              {/* <span className="text-center">Proceed to Payment</span> */}
            </button>
          </div>
        </div>
      )}
    </main>
    </>
    )
}

