import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest, response: NextResponse) {
  const cart = request.body; 
  console.log(cart)
  return response.json()
}
  
  





