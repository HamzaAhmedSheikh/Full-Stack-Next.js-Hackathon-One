import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";


const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});


export async function POST(request: NextRequest) {
    const { cartItems } = await request.json();
    // let body = await request.json()

    let data = cartItems.map((item: any) => console.log("item === ", item)) 
     

    // console.log("cartData === ", data)
    // console.log("body data == ", data)
    // console.log("cartItems _id === ", cartItems[0]._id)
    // console.log("cartItems id === ", cartItems.id);

    const redirectURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://dine-market-kappa.vercel.app/';
    

    

    //  console.log("data ", data.name)
    let cart_data = cartItems.find((item: any) => item._id === item._id);

    // console.log("cart_data ==> ", cart_data._id);


    const transformedItem = {
        price_data: {
         currency: 'usd',
         product_data:{
           name: cart_data.name,
           description: cart_data.slug,
           images:[cart_data.image],
           metadata:{},

         },
         unit_amount: cart_data.price * 100,

       },
       quantity: cart_data.quantity,       
     };

     const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_options: [
          { shipping_rate: "shr_1NGPvGAbedfhBaKkLXVcvtgg" },          
        ],
        line_items: cartItems.map((item: any) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [item.image],         
                metadata: {}
           
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        phone_number_collection: {
          enabled: true,
        },
        shipping_address_collection: {
          allowed_countries: ["US", "CA", "GB", "PK"],
        },
        invoice_creation: {
          enabled: true,
        },  
        
        mode: 'payment',
        success_url: redirectURL + '/payment/success',
        cancel_url: redirectURL + '/payment/fail',
        metadata: {
          _id: cart_data._id,
          name: cart_data.name,      
          images: cart_data.image,             
          quantity: cart_data.quantity,
          task:"Hamza created a task"
        },
      });
    
      return NextResponse.json(session?.id) ;
}
