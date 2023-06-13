"use client"
import { cache, useState } from "react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import { LuLoader2 } from "react-icons/lu"

export default function CartSummary() {
  const { cartDetails, formattedTotalPrice, totalPrice, cartCount, redirectToCheckout } = useShoppingCart()
  let [isLoading, setLoading] = useState(false);
  let isDisabled = isLoading || cartCount! === 0;
  let shippingAmount = cartCount! > 0 ? 5.00 : 0;
  let totalAmount = totalPrice! + shippingAmount;

 console.log("cartDetails ==> ", cartDetails)

  async function onCheckout() {
     setLoading(true)
     let response = await fetch('/api/checkout', {      
      method: 'POST',
      body: JSON.stringify(cartDetails),
      cache: 'no-store',
     })
    
     const data = await response.json()  
 
     const result = await redirectToCheckout(data.id)

     if(result?.error) {
       console.error(result)
     }

     setLoading(false)
  }

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm">Subtotal</dt>
          <dd className="text-sm font-medium">${totalPrice}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="flex items-center text-sm">
            <span>Shipping estimate</span>
          </dt>
          <dd className="text-sm font-medium"> ${shippingAmount}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="text-base font-medium">Order total</dt>
          <dd className="text-base font-medium"> ${totalAmount} </dd>
        </div>
      </dl>

      <div className="mt-6">
        <button onClick={onCheckout} className="w-full bg-black text-white" disabled={isDisabled} type="button">
          { isLoading && <LuLoader2 className="mr-2 h-4 w-4 animate-spin" /> }  
          { !isLoading && "Checkout" }       
        </button>
      </div>
    </section>
  )
}
