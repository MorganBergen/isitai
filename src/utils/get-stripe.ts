/**
 * @file get-stripejs.ts
 * @brief  Utility for lazily loading Stripe.js using the singleton pattern.
 *
 * This module exports a single function, `getStripe`, which ensures that the
 * Stripe.js library is loaded only once during the lifetime of the application.
 * Subsequent calls return the same `Promise<Stripe | null>` instance.
 *
 * @author Morgan Bergen
 * @date   2025‑07‑16
 *
 * @function getStripe
 * @returns {Promise<Stripe | null>} A promise resolving to the Stripe instance
 *                                  (or `null` if loading fails).
 */
import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export default function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
}

