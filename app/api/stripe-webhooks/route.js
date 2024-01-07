
import Stripe from 'stripe';
import { NextResponse } from "next/server";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
const endpointSecret = "whsec_b01587d47ee90d98f41f233d2c6bdc9837f9bce717c9d51619789618615b9fd7";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  //const buf = await buffer(req);
  const body = await req.text();
  const sig = headers().get("stripe-signature");

let event;

  try {
    //event = stripe.webhooks.constructEvent(buf.toString(), sig, endpointSecret);
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return new Response(`Webhook Error: ${err}`, {
      status: 400,
    });
  }

  if (event.type === 'payment_intent.succeeded') {
    const session = event.data.object;

    console.log("metadata from webhook", session.metadata);
    // Payment was successful.
    // Call your booking creation API here.
    const bookingResponse = await fetch(`${process.env.BACKEND_URL}/api/meetings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          receiver: session.metadata.receiver, 
          sender: session.metadata.sender, 
          date: session.metadata.date, 
          time: session.metadata.time, 
          status: 'pending',
        }),
      });

      if (!bookingResponse.ok) {
        throw new Error(`Failed to create booking: HTTP status ${bookingResponse.status}`);
      }
  }

  return new Response("RESPONSE EXECUTE", {
    status: 200,
  });
  //res.json({ received: true });
  //return NextResponse.json({ received: true });
}

