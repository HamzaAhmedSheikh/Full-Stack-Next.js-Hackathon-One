import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";


const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});


export async function POST(request: NextRequest) {
  // const session = await getServerSession(authOptions);
  const body = await request.json();

  // console.log("body ==?> ", body);
  try {
    // if (session) {
      try {
        if (body.length != 0) {
          const params: Stripe.Checkout.SessionCreateParams = {
            submit_type: "pay",
            mode: "payment",
            payment_method_types: ["card"],
            billing_address_collection: "auto",
            shipping_options: [
              { shipping_rate: "shr_1NGPvGAbedfhBaKkLXVcvtgg" },          
            ],
            line_items: body.map((item: any) => {
              return {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: item.name,
                    images: [item.image],         
                    metadata: {
                      _id: item._id,
                      image: item.image,
                      // productId: item._id,
                      quantity: item.quantity,                      
                      // type: item.category,
                      name: item.name,
                  }
               
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
            allow_promotion_codes: true,
            success_url: `${request.headers.get("origin")}/payment/success`,
            cancel_url: `${request.headers.get("origin")}/payment/fail`,            
          };
         
          
          const session = await stripe.checkout.sessions.create(params);
          
          return NextResponse.json(session, { status: 200 });
        } else {
          return NextResponse.json({ success: false }, { status: 500 });
        }
      } catch (error) {
        console.log("🚀 ~ file: route.ts:65 ~ POST ~ error:", error);

        return NextResponse.json({ success: false }, { status: 500 });
      }
    // } else {
    //   return NextResponse.json({ success: false }, { status: 500 });
    // }
  } catch (error) {
    console.log("🚀 ~ file: route.ts:78 ~ POST ~ error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }

//   interface ICart {
//     _id: string;
//     // _createdAt: Date;/
//     name: string;
//     // slug: string;
//     // productQuantity: number;
//     image: string;
//     // category: TCategory;
//     // size: "XS" | "S" | "M" | "L" | "XL";
//     // tags: TTags;
//     price: number;
//     quantity: number; //extra added for cart
//   }
// //   metadata: {
// //     _id: item._id,
// //     image: item.image,
// //     productId: item._id,
// //     quantity: item.quantity,               
// // }
  
// try {
//   const body = await request.json();
//   console.log("body", body);
//   // Create Checkout Sessions from body params.
//   const cartDataForCheckOut = body.cartItems.map((item: ICart) => {
//     console.log("item === ", item)
//     return {
//       price_data: {
//         currency: "usd",
//         product_data: {
//             name: item.name,
//             images: [item.image],            
//             metadata: {
//                 id: item._id,
//                 image: item.image,
//                 productId: item._id,
//                 quantity: item.quantity,              
//                 name: item.name,
//             }
//         },
//         unit_amount: item.price * 100, //*100 because unit amounts has to be in cents
//     },
//       adjustable_quantity: {
//         enabled: true,
//         minimum: 1,
//       },
//       quantity: item.quantity,
//     };
//   });
//   let metadata = {

//   }
//   for (let i = 0; i < cartDataForCheckOut.ICart; i++) {
//       metadata = {
//           ...metadata,
//           [`a${i}`]: JSON.stringify(cartDataForCheckOut.ICart[i])
//       }
//   }
//   const customer = await stripe.customers.create({
//       metadata
//   });

//   const session = await stripe.checkout.sessions.create({
//     submit_type: "pay",
//     mode: "payment",
//     payment_method_types: ["card"],
//     billing_address_collection: "auto",
//     customer : customer.id,
//     shipping_options: [
//       { shipping_rate: "shr_1NGPvGAbedfhBaKkLXVcvtgg" },
//       // { shipping_rate: "shr_1NCimJEyHCbMuFLhDUBqgEjd" },
//     ],
//     line_items: cartDataForCheckOut,
//     success_url: `${request.nextUrl.origin}/payments/successful`,
//     cancel_url: `${request.nextUrl.origin}/payments/canceled`,
//   });

//   // res.redirect(303, session.url);
//   return NextResponse.json({ session: session }, { status: 200 });
// } catch (err: any) {
//   console.log("🚀 ~ file: route.ts:64 ~ POST ~ err:", err);
//   // res.status(err.statusCode || 500).json(err.message);
// }
};