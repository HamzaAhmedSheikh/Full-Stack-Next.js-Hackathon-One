import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";


const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});


export async function POST(request: NextRequest) {
    const { cartItems } = await request.json();
    
    const redirectURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

    let cart_data = cartItems.find((item: any) => item.id === item.id);

    console.log("cart_data ==> ", cart_data);
    console.log("cart_data ==> ", cart_data._id)
    // console.log("cart_data == id ", cart_data.id)

    const transformedItem = {
        price_data: {
         currency: 'usd',
         product_data:{
           name: cart_data.name,
           description: cart_data.description,
           images:[cart_data.image],
           metadata:{},

         },
         unit_amount: cart_data.price * 100,

       },
       quantity: cart_data.quantity,       
     };

     const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [transformedItem],
        mode: 'payment',
        success_url: redirectURL + '/payment/success',
        cancel_url: redirectURL + '/payment/fail',
        metadata: {
          _id: cart_data._id,
          images: cart_data.image,      
          name: cart_data.name,         
          quantity: cart_data.quantity,
          task:"Hamza created a task"
        },
      });
    
      return NextResponse.json(session?.id) ;
}
