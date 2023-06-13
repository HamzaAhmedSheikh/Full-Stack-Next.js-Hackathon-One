import getStripe from "@/lib/getStripe";
// import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe'
// const stripe =  new Stripe(process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe("sk_test_51NEAWFAbedfhBaKkIThoBULkyHpuXnD4TpQMebPEcJrAOyBQKQC4bRoIG7W1bS0WxSOXvVfiFynM0Fs7Lsw0wGIZ00rqUUCN04", {
  apiVersion: "2022-11-15"
});

// const stripe = getStripe
// export default async function handler(request: NextRequest, response : NextResponse) {
//   if (request.method === 'POST') {
//     try {
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create({
//         line_items: [
//           {
//             // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//             price: '{{PRICE_ID}}',
//             quantity: 1,
//           },
//         ],
//         mode: 'payment',
//         success_url: ${request.headers}/?success=true,
//         cancel_url: ${request.headers}/?canceled=true,
//       });
//       response.redirected(303, session.url);
//     } catch (err : any) {
//       response.json(err.message);
//     }
//   } else {
//     response.setHeader('Allow', 'POST');
//     response.end('Method Not Allowed');
//   }
// }





// export default async function handler(request: NextRequest, response : NextResponse) {
//   if (request.method === 'POST') {
//     // console.log(request.body)

//     try {
//       const params = {
//         submit_type: 'pay',
//         mode: 'payment',
//         payment_method_types: ['card'],
//         billing_address_collection: 'auto',

//         // Shipping options - create them in the Stripe dashboard and copy the IDs here
//         // @link https://dashboard.stripe.com/test/shipping-rates
//         shipping_options: [
//           // FREE SHIPPING
//           { shipping_rate: 'shr_1Mp2HsKA1UjcyalEY6GCZK8A' },
        // ],

//         line_items: request.body.map((item) => {
//           // access sanity image
//           // @link https://www.sanity.io/manage
//           const img = item.image[0].asset._ref
//           const newImage = img
//             .replace(
//               'image-',
//               // NOTE: use sanity project id in the url
//               'https://cdn.sanity.io/images/eglqvky8/production/'
//             )
//             .replace('-webp', '.webp') // NOTE: put .jpg or .png if you don't use webp images

//           return {
//             price_data: {
//               currency: 'eur',
//               product_data: {
//                 name: item.name,
//                 images: [newImage],
//               },

//               unit_amount: item.price * 100, // convert price to cents
//             },

//             adjustable_quantity: {
//               enabled: true,
//               minimum: 1,
//             },
//             quantity: item.quantity,
//           }
//         }),

//         // ? REDIRECT URLS when stripe checkout is successful or canceled
//         success_url: ${request.headers.origin}/success,
//         cancel_url: ${request.headers.origin}/canceled,
//         automatic_tax: { enabled: true },
//       }

//       // Create Checkout Sessions from body params.
//       const session : any = await stripe.checkout.sessions.create(params)

//       response.json(session) // return session
//     } catch (err : any) {
//       response.json(err.message)
//     }
//   } else {
//     response.setHeader('Allow', 'POST')
//     response.status(405).end('Method Not Allowed')
//   }
// // }

import type { NextApiRequest, NextApiResponse } from "next";

import { NextRequest, NextResponse } from 'next/server';
// import { IProduct } from "@/app/components/type";
// import { urlForImage } from "@/sanity/lib/image";

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export  async function  POST(req : NextRequest, res :NextApiResponse) {
  const cartItems  = await  req.json()
  console.log("cartItems ==> stripe-checkout ", cartItems)
  // if (req.method === 'POST') {
  //   try {
  //     // Create Checkout Sessions from body params.
//       const session : any = await stripe.checkout.sessions.create({
//         line_items : cartItems ,
//         mode: 'payment',
//         success_url: ${req.headers.origin}/?success=true,
//         cancel_url: ${req.headers.origin}/?canceled=true,
//       });
//       res.redirect(303, session.url);
//     } catch (err : unknown) {
//       NextResponse.json({ error: 'An unknown error occurred.'});
//       // res.json({ error: 'An unknown error occurred.' });
//     }
//   // // } else {
//     res.setHeader('Allow', 'POST');
//     res.end('Method Not Allowed');
//   // }
// } 



// const transformedItem = {
//   price_data: {
//    currency: 'usd',
//    product_data:{
//      name: cartItems.title,
//      description: cartItems.description,
//      images:[cartItems.images],
//      metadata:{},

//    },
//    unit_amount: cartItems.price * 100,

//  },
//  quantity: cartItems.quantity,
 
// };
const redirectURL =
process.env.NODE_ENV === 'development'
? 'http://localhost:3000'
: 'your deployed url';

const session = await stripe.checkout.sessions.create({
 payment_method_types: ['card'],
 line_items: cartItems.map((item: any) => {
            // const imgUrl = urlForImage(item.images[0]).url();
  
            return {
              price_data: {
                currency: "USD",
                product_data: {
                  name: item.title,
                  images: [item.image]
                },
                unit_amount: item.price * 100
              },
              adjustable_quantity: {
                enabled: true,
                minimum: 1
              },
              quantity: item.quantity ? item.quantity : 1
            };
          }),
  
 mode: 'payment',
 success_url: redirectURL + '/payment/success',
 cancel_url: redirectURL + '/payment/fail',
 metadata: {
   images: cartItems.images,
   name:"some additional info",
   task:"Usman created a task"
 },
});

//    console.log("response-------------------",await session);
return NextResponse.json(session?.url) ;
};


























// import type { NextApiRequest, NextApiResponse } from "next";
// import { IProduct } from "../../components/type";
// import {urlForImage} from "../../../sanity/lib/image";
// import { NextRequest } from "next/server";
// // import Stripe from "stripe";



// export  async function POST(  req: NextRequest,  res: NextApiResponse) {
//   const {item}= await req.json();
// console.log(item)
//   // if (req.method === "POST") {
//     try {
//       console.log(item)


//       const session = await stripe.checkout.sessions.create({
//         submit_type: "pay",
//         payment_method_types: ["card"],
//         billing_address_collection: "auto",
//         shipping_options: [
//           {
//             shipping_rate: "shr_1LwIjtHs6qS0xDzPhMIPdvAd"
//           },
//           {
//             shipping_rate: "shr_1LwIkrHs6qS0xDzP3qphYXpq"
//           }
//         ],
//         line_items: req.body.items.map((item: IProduct) => {
//           const imgUrl = urlForImage(item.images).url();

//           return {
//             price_data: {
//               currency: "USD",
//               product_data: {
//                 name: item.title,
//                 images: [imgUrl]
//               },
//               unit_amount: (item.on_sale ? item.sale_price : item.price) * 100
//             },
//             adjustable_quantity: {
//               enabled: true,
//               minimum: 1
//             },
//             quantity: item.quantity ? item.quantity : 1
//           };
//         }),
//         mode: "payment",
//         success_url: ${req.headers.origin}/success,
//         cancel_url: ${req.headers.origin}
//       });

//       res.status(200).json(session);
//     } catch (error) {
//       res.status(500).json({
//         message: error instanceof Error ? error.message : null
//       });
//     }
//   // } else {
//     // res.setHeader("Allow", "POST");
//     // res.status(405).end("Method Not Allowed");
//   // }
// }