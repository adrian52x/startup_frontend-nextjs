import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
const host = process.env.NEXT_PUBLIC_HOST;

export async function POST(req, res) {
  const body = await req.json()
  const { meeting } = body;

  //const { method, body } = req;
  // if (method === "POST") {
    try {
      const dateOfInvoice = new Date().toISOString().split('T')[0];

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "eur",
              product_data: {
                //name: "INVOICE - " + date + " - " + body?.amount + "€",
                name: "Meeting with " + meeting.receiverFullName,
                description: new Date(meeting.date).toISOString().split('T')[0] + " | " + meeting.time + " | " + "30 min",
              },
              //unit_amount: body?.amount * 100 || 100,
              unit_amount: meeting.price * 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        cancel_url: `${host}/mentors/${meeting.receiver}`,
        success_url: `${host}/payment/success`,
        payment_intent_data: {
          metadata: { 
            receiver: meeting.receiver,
            sender: meeting.sender,
            date: meeting.date,
            time: meeting.time,
            status: 'pending'
          }
        }
      });
      console.log("body as req - stripe route",body);
      //res.status(200).json({ sessionId: session.id });
      return NextResponse.json({ sessionId: session.id, meeting: meeting });
    } catch (err) {
      //res.status(500).json({ error: "Error checkout session" });
      return NextResponse.json(err);
    }
  // } else {
  //   res.status(405).json({ error: "Method Not Allowed" });
  // }
}