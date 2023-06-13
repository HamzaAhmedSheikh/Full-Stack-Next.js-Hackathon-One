import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from "stripe";
import { validateCartItems } from "use-shopping-cart/utilities"
import { NextRequest, NextResponse } from 'next/server';
import { inventory } from "@/config/inventory";
// import { stripe } from "@/lib/stripe";
import { useStateContext } from '@/context/StateContext';
import { AiOutlineConsoleSql } from 'react-icons/ai';


const stripe = new Stripe("sk_test_51NEAWFAbedfhBaKkIThoBULkyHpuXnD4TpQMebPEcJrAOyBQKQC4bRoIG7W1bS0WxSOXvVfiFynM0Fs7Lsw0wGIZ00rqUUCN04", {
  apiVersion: "2022-11-15",
});


interface InventoryProduct {   
    _id: string;
    name: string;
    price: number;
    slug: string;
    image: string;
    tags: string;  
    details: string[];
    care: string[],  
    quantity: number;
}

export async function POST(request: NextRequest) {  
  //  console.log("req ==> ", response)
  // let cartDetails = await response.json();
  const cartItems   = await request.json();
  const redirectURL =  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'your deployed url';
   const origin = request.headers.get('origin');

  console.log("origin ==> ", origin)

  console.log("cartItems ==> ", cartItems)

  

  const lineItems = cartItems.map((item: any) => {
    return {
      price_data: { 
        currency: 'USD',
        product_data: { 
          name: item.name,
          images: item.image,
        },
        unit_amount: item.price * 100,
      },
      adjustable_quantity: {
        enabled:true,
        minimum: 1,
      },
      quantity: item.quantity
    }
  })

  console.log("lineItems ==> ", lineItems)

  


//   const transformedItem = {
//     price_data: {
//      currency: 'usd',
//      product_data:{
//        name: cartItems.name,
//       //  description: cartItems.details,
//        images:[cartItems.image],
//        metadata:{},

//      },
//      unit_amount: cartItems[0].price * 100,

//    },
//    quantity: cartItems[0].quantity,
   
//  };

  //  let detail = cartItems.map((item: any) => console.log("item ==> ", item));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    // line_items: lineItems,
    line_items: [
      {
        price_data: {
          currency: 'USD',
          product_data: {
            name: cartItems[0].name,
            images: [cartItems[0].image],
          },
          unit_amount: cartItems[0].price * 100,
        },
        adjustable_quantity: {
          enabled:true,
          minimum: 1,
        },
        quantity: cartItems[0].quantity
      }
    ],
    mode: 'payment',
    success_url: redirectURL + '/payment/success',
    cancel_url: redirectURL + '/payment/fail',
    // metadata: {
    //   images: cartItems[0].image,
    //   name:"some additional info",
    //   task:"Hamza created a task"
    // },
  });

  return NextResponse.json(session?.id);

 
  // let detail = Object.entries(cartDetails!).map(([_, item]) => console.log("item ==> ", item));

 
 
  // let param = await stripe.checkout.sessions.create({
  //   submit_type: 'pay',
  //   mode: 'payment',
  //   payment_method_types: ['card'],
  //   billing_address_collection: 'auto',
  //   shipping_options: [
  //     {shipping_rate: "shr_1NGPvGAbedfhBaKkLXVcvtgg"},       
  //   ],
  //   line_items: lineItems,
  //   success_url: `${origin}/successPay`,
  //   cancel_url: `${origin}/canceled`,    
  // })

//   const transformedItem = {
//     price_data: {
//      currency: 'usd',
//      product_data:{
//        name: cartItems.name,
//        description: cartItems.details,
//        images:[cartItems.image],
//        metadata:{},

//      },
//      unit_amount: cartItems.price * 100,

//    },
//    quantity: cartItems.quantity,
   
//  };

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [transformedItem],
//     mode: 'payment',
//     success_url: `${origin}/payment/success`,
//     cancel_url:  `${origin}/payment/fail`,
//     metadata: {
//       images: cartItems.image,
//       name:"some additional info",
//       task:"Usman created a task"
//     },
//   });

  //  console.log("response-------------------",await session);
      //  return NextResponse.json({status: "success"});

  // const params: any = {
  //   submit_type: 'pay',
  //   mode: 'payment',
  //   payment_method_types: ['card'],
  //   billing_address_collection: 'auto',
  //   shipping_options: [
  //     {shipping_rate: "shr_1NGPvGAbedfhBaKkLXVcvtgg"},       
  //   ],
  //   line_items: lineItems,
  //   success_url: `${origin}/successPay`,
  //   cancel_url: `${origin}/canceled`,
  // }

  // const session = await stripe.checkout.sessions.create(params);

  // return NextResponse.json(param);



  // const params: any = {
  //   submit_type: 'pay',
  //   mode: 'payment',
  //   payment_method_types: ['card'],
  //   billing_address_collection: 'auto',
  //   shipping_options: [
  //       {  shipping_rate: "shr_1NGPvGAbedfhBaKkLXVcvtgg" },      
  //   ],
  
  //   line_items: Object.entries(cartDetails!).map(([_, product]: any) => {
  //       const img = product.image[0].asset._ref;
  //     const newImage = img.replace('image-', 'https://cdn.sanity.io/images/lzplr4pt/production/').replace('-png', '.png');

  //     return {
  //       price_data: { 
  //         currency: 'usd',
  //         product_data: { 
  //           name: product.name,
  //           images: [newImage],
  //         },
  //         unit_amount: product.price * 100,
  //       },
  //       adjustable_quantity: {
  //         enabled:true,
  //         minimum: 1,
  //       },
  //       quantity: product.quantity
  //     }
  //   }),
  //   success_url: `${origin}/successPay`,
  //   cancel_url: `${origin}/canceled`,
  // }

  // const session = await stripe.checkout.sessions.create(params);

  // return NextResponse.json(session);

  // const session = await stripe.checkout.sessions.create({
  //   submit_type: 'pay',
  //   mode: "payment",
  //   payment_method_types: ['card'],
  //   line_items: lineItems,
  //   shipping_address_collection: {
  //     allowed_countries: ['US'],
  //   },
  //   shipping_options: [
  //       {
  //           shipping_rate: "shr_1NGPvGAbedfhBaKkLXVcvtgg",
  //       }
  //   ],
  //   billing_address_collection: "auto",
  //   success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
  //   cancel_url: `${origin}/cart`
  // })

  //  return NextResponse.json(session);
    

}
  