/**
 *
 * @file    page.tsx
 * @date    @2025-07-26
 * @author  morgan bergen
 *
 * @description
 *
 * function components
 * export default
 * useState hook
 * inLine return statement / arrow functions
 *
 * 
 */

"use client";
 
import { useState } from "react";
import Link from "next/link";
import styles from "./subscribe.module.css";
import { plans, Plan } from "../../lib/plans";
import CheckoutButton from "../components/CheckoutButton";


/**
 *  @function planCard
 *  @description
 *
 *  a functional component that displays a subscription plan card
 *  it includes the plan name, price, image count, and radio button for selection
 *  clicking the card triggers the onSelect function passed as a prop
 *
 *  @param {Object} props - The properties passed to the component
 *  @param {Plan} props.plan - the plan object containing details like name, amount, and imageCount
 *  @param {boolean} props.isSelected - indicates if this plan is currently selected
 *  @param {Function} props.onSelect - function to call when this plan is selected.
 *
 */
const PlanCard = ({
  plan,
  isSelected,
  onSelect,
}: {
  plan: Plan;
  isSelected: boolean;
  onSelect: () => void;
}) => (
  <div
    className={`${styles.planCard} ${isSelected ? styles.selected : ""}`}
    onClick={onSelect}
  >
    <div className={styles.cardHeader}>
      <span className={styles.planName}>{plan.name}</span>
      <div className={styles.radioOuter}>
        {isSelected && <div className={styles.radioInner} />}
      </div>
    </div>
    <div className={styles.priceContainer}>
      <span className={styles.priceCurrency}>$</span>
      <span className={styles.priceAmount}>{plan.amount/100}</span>
    </div>
    <span className={styles.imageCount}>{plan.imageCount}</span>
  </div>
);
 
export default function SubscribePage() {
  const [selectedPlan, setSelectedPlan] = useState<string>("Personal");

  return (
    <div className="app-container">
      <header className="app-header">
        <Link href="/upload" className="back-to-home-link">
          &larr; Back to Upload
        </Link>
      </header>
      <main className={`app-main ${styles.subscribeMain}`}>
        <h1 className={styles.pageTitle}>Choose Your Plan</h1>
        <p className={styles.subheading}>Select the subscription that best fits your needs.</p>
        <div className={styles.plansContainer}>
          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              isSelected={selectedPlan === plan.name}
              onSelect={() => setSelectedPlan(plan.name)}
            />
          ))}
        </div>
        <div className={styles.buttonContainer}>
          {plans.map(
            (plan) =>
              selectedPlan === plan.name && (
                <CheckoutButton key={plan.priceId} priceId={plan.priceId} />
              )
          )}
        </div>
        <div className={styles.disclaimerBox}>
          <p>
            If you are unable to afford this service, please email{" "}
            <a href="mailto:contact@isitai.com">contact@isitai.com</a> and I
            will send you an access key, no questions asked.
          </p>
        </div>
      </main>
      <footer className="app-footer">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/morganbergen"
            style={{ textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Morgan Bergen
          </a>
          . All rights reserved.
        </p>
      </footer>
    </div>

    );
}
