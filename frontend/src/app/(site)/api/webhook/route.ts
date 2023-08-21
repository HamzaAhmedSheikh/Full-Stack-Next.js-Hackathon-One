// import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});
const webhookSecret = "whsec_a825e26a2c544f4531f9dc68c091475d2b1c3206b11f5696d55290a64011961b"
// // "whsec_a825e26a2c544f4531f9dc68c091475d2b1c3206b11f5696d55290a64011961b";

// // export async function GET() {
// //     const client = await db.connect()
// //     try {
// //         await client.sql`CREATE TABLE IF NOT EXISTS customer_info (
// //                id SERIAL PRIMARY KEY,
// //                name VARCHAR(255) NOT NULL,
// //                email VARCHAR(255) NOT NULL,
// //                phone VARCHAR(20) NOT NULL,
// //                address_line1 VARCHAR(255) NOT NULL,
// //                address_line2 VARCHAR(255),
// //                city VARCHAR(100) NOT NULL,
// //                postal_code VARCHAR(20) NOT NULL,
// //                country VARCHAR(100) NOT NULL
// //             );`
// //         return NextResponse.json({
// //             message: "You called this api endpoint",
// //         })        


// //     } catch(err) {
// //         console.log(err);
// //         return NextResponse.json({message: "Something went wrong"});
// //     }
// // }

// export  async function POST(req: NextRequest, res: any){   
//     try {
//     const rawBody = await req.text();
//     const sig = req.headers.get("stripe-signature") as string
//     console.log("sig-----------=============-------====-=-=-", sig);

//     const event: any = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);

//    console.log("event ===> ", event);
// //    console.log("event id ==> ", event.data.object.id);
//    console.log("event type ==> ", event.type);
//     if ( 'checkout.session.completed' === event.type ) {
//         const session = event.data.object;

//         console.log( 'payment success-----------------------', session );
//         // console.log( 'payment success_id-----------------------', event.data.object!.id );    
//     const line_Items  = await stripe.checkout.sessions.listLineItems(event.data.object!.id);
//     console.log("Line Items => ", line_Items);
//     console.log("line items data ==> ", line_Items.data);
//     // console.log("customer details ==> ", event.data.object!.customer_details);
//     // console.log("line items object ==> ", line_Items.object)
//     // console.log("customer_details  ==> ", event.data.object!.customer_details);

  
//     } else {
//         res.setHeader("Allow", "POST");
//         res.status(405).end("Method Not Allowed");
//     }
//     } catch (err: any) {
//         console.log("Error in webhook----------", err);
//         // res.status(400).send(`Webhook Error: ${err.message}`);
//         return;
//     }
   
// }

import { db } from "@/lib/schema/drizzle";
import { orders, NewOrder } from "@/lib/schema/order";
// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";
import { v4 as uuidv4 } from 'uuid';


const endpointSecret = 'whsec_a825e26a2c544f4531f9dc68c091475d2b1c3206b11f5696d55290a64011961b'



export async function POST(request: NextRequest, res: any) {
    // console.log(process.env.STRIPE_SECRET_KEY)
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' })
    // const sig = request.headers.get('stripe-signature')!;
    // const data = await request.text()
    // console.log("Signature ==================== >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", sig)
    // // console.log("Data ==================== >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", JSON.stringify(data))
    // console.log("EndPoint ==================== >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", endpointSecret)
    // let event;
    // try {
    //     event = stripe.webhooks.constructEvent(data, sig, endpointSecret);
    // } catch (err: any) {
    //     console.log("ERROR================>>>>>>>>>>", err)
    //     return NextResponse.json(`Webhook Error =======>>>>>>>>>> : ${err.message}`)
    // }

    // if (event.type === 'checkout.session.completed') {
    //     try {

    //         const data: any = event.data.object;
    //         console.log("datat============>", data.metadata);
            
    //         const customer: any = await stripe.customers.retrieve(data.customer)
    //         // const listLineItems = await stripe.checkout.sessions.listLineItems(data.id)
    //         let newOrder = {
    //             id: uuidv4(),
    //             subtotal: data.amount_subtotal,
    //             total: data.amount_total,
    //             payment_intent_id: data.payment_intent,
    //             payment_status: data.payment_status,
    //             products: JSON.stringify(Object.values(customer.metadata).map((val: any) => JSON.parse(val))),
    //             shipping: JSON.stringify(data.customer_details),
    //         }

    //         console.log("newOrder ==> ", newOrder)

    //         // const orders = await db.insert(Orders).values(newOrder).returning();
    //         // console.log(orders)
    //     }
    //     catch (err) {
    //         console.log("error ========>>>>>>>>>", err)
    //     }
    // }

    try {
        const rawBody = await request.text();
        const sig = request.headers.get("stripe-signature") as string
        console.log("sig-----------=============-------====-=-=-", sig);
    
        const event: any = stripe.webhooks.constructEvent(rawBody,sig,webhookSecret);
    
       // console.log(event);
    
        if ( 'checkout.session.completed' === event.type ) {
            const session = event.data.object;
    
            console.log( 'session metadata === ', session.metadata);
            console.log( 'session image === ', session.metadata.images);
            // console.log(" event data object", event.data.object);
            console.log( " name === ", event.data.object.customer_details.name);
            console.log(" id === ", session.metadata._id)
            // console.log(" metadate ", event.data.object.metadata)
            // const line_Items  = await stripe.checkout.sessions.listLineItems(event.data.object!.id);
            // console.log("lineItems === ", line_Items)
        // console.log("metadata == ", line_Items.metadata);
        
    
        //Once you'll get data you can use it according to your 
        //reqirement for making update in DB
        if (event.type === 'checkout.session.completed') {
            try {
    
                const data: any = event.data.object;
                console.log("datat============================>>>>>>>>>>>>>>", data.metadata
                );
                
                // const customer: any = await stripe.customers.retrieve(data.customer)
                // console.log("customer == ", customer);
                // const listLineItems = await stripe.checkout.sessions.listLineItems(data.id)
                let newOrder: NewOrder = {
                    product_id: data.metadata._id,
                    user_name: event.data.object.customer_details.name,
                    product_name: data.metadata.name,
                    product_image: data.metadata.images,
                    quantity: data.metadata.quantity,                             
                }
                const order = await db.insert(orders).values(newOrder).returning();
                console.log('order === ', order)
            }
            catch (err) {
                console.log("error === ", err)
            }
        }
    
            
        } else {
            res.setHeader("Allow", "POST");
            // res.status(405).end("Method Not Allowed");
        }
        } catch (err: any) {
            console.log("Error in webhook----------", err);
            // res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }
    return NextResponse.json({ message: "done" })
}

// CREATE TABLE orders(
//     id SERIAL PRIMARY KEY,
//     product_id VARCHAR(255) NOT NULL,
//     user_name VARCHAR(255) NOT NULL,
//     product_name VARCHAR(255) NOT NULL, 
//     product_image TEXT NOT NULL 
//     quantity INT NOT NULL
//   )