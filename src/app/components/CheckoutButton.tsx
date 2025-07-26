"use client";
import getStripe from '../../utils/get-stripe';
import styles from '../subscribe/subscribe.module.css';

interface CheckoutButtonProps {
  priceId: string;
}

export default function CheckoutButton({ priceId }: CheckoutButtonProps) {
  console.log('[ui] checkoutbutton priceId=', priceId);
  const handleClick = async () => {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      
      //  this is where error lies
      body: JSON.stringify({ priceId }),
    });
    const sessionData = await response.json();
    if (!response.ok || !sessionData?.id) {
      console.error('Failed to create Stripe Checkout session:', sessionData);
      return;
    }
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({ sessionId: sessionData.id });
    if (error) console.warn(error.message);
  };

  return (
    <button onClick={handleClick} className={`${styles.actionButton} ${styles.loginButton}`}>
      Purchase Plan
    </button>
  );
}
