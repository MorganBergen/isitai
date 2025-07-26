/**
 * @file    route.ts
 * @date    2025-07-25
 * @author  morgan bergen 
 * @description
 *
 * api route to create checkout session 
 *
 **/

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});


/**
 *
 *
 *
 **/
export async function POST(req: NextRequest) {
  const { priceId } = await req.json();
  console.log('[stripe] create-checkout-session priceId=', priceId);
  // Debug: show that we have loaded the Stripe secret key (first characters only)
  console.log('[stripe] debug secretKey=', process.env.STRIPE_SECRET_KEY?.slice(0, 15), '…');

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${req.nextUrl.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/subscribe`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal error';
    console.error('[stripe] checkout.sessions.create failed:', err);
    return NextResponse.json({ statusCode: 500, message }, { status: 500 });
  }
}
