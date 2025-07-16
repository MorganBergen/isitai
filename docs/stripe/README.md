# Stripe Subscriptions with Next.js

This document outlines how to integrate Stripe Checkout for recurring subscriptions in a Next.js project.

## 1. Environment Variables

Create a `.env.local` file at the project root and add your Stripe keys:

```dotenv
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_your_publishable_key
STRIPE_SECRET_KEY=sk_your_secret_key
```

Do **not** commit this file. Ensure `.gitignore` contains `*.env.local`.

## 2. Lazy Load Stripe.js

Create `utils/get-stripejs.ts` to initialize Stripe only once:

```ts
import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;
export default function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
}
```

## 3. Define Plans

The subscription plans can be stored in a constant used by your UI. Each plan should correspond to a Price ID created in the Stripe Dashboard.

```ts
export interface Plan {
  name: string;
  priceId: string; // Price ID from Stripe
  amount: number;  // Displayed monthly price in USD
  imageCount: string;
  isFeatured?: boolean;
}

export const plans: Plan[] = [
  { name: 'Basic', priceId: 'price_basic', amount: 100, imageCount: '10 images' },
  { name: 'Personal', priceId: 'price_personal', amount: 1000, imageCount: '100 images', isFeatured: true },
  { name: 'Professional', priceId: 'price_pro', amount: 5000, imageCount: '1,000 images' },
];
```

## 4. API Route to Create Checkout Session

Create `pages/api/create-checkout-session.ts`:

```ts
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { priceId } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/pricing`,
    });

    res.status(200).json({ id: session.id });
  } catch (error: any) {
    res.status(500).json({ statusCode: 500, message: error.message });
  }
}
```

## 5. Checkout Button Component

```tsx
import getStripe from '../utils/get-stripejs';

interface CheckoutButtonProps {
  priceId: string;
}

export default function CheckoutButton({ priceId }: CheckoutButtonProps) {
  const handleClick = async () => {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    });
    const session = await response.json();
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({ sessionId: session.id });
    if (error) console.warn(error.message);
  };

  return (
    <button onClick={handleClick} className="actionButton">
      Purchase Plan
    </button>
  );
}
```

## 6. Usage in Pricing Page

```tsx
import { plans } from '../lib/plans';
import CheckoutButton from '../components/CheckoutButton';

export default function Pricing() {
  return (
    <div>
      {plans.map((plan) => (
        <div key={plan.priceId}>
          <h2>{plan.name}</h2>
          <p>{`$${plan.amount / 100}/month`}</p>
          <p>{plan.imageCount}</p>
          <CheckoutButton priceId={plan.priceId} />
        </div>
      ))}
    </div>
  );
}
```

This setup allows users to select one of the subscription plans and be redirected to Stripe Checkout to complete the subscription process.
