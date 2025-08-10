"use client";
import React, { useState } from "react";
import styles from "./subscribe.module.css";
import { FiCamera, FiLayers } from "react-icons/fi";

/**
 *  @
 *
 **/
const plans = [
  {
    name: "basic plan",
    price: 1,
    images: "10",
    color: "#FF4136",
  },
  {
    name: "personal",
    price: 10,
    images: "100",
    color: "#FFDC00",
  },
  {
    name: "professional",
    price: 50,
    images: "1,000",
    color: "#2ECC40",
  },
];

const DotGrid = () => {
  // Exact counts as requested
  const redCount = 10; // Basic
  const yellowCount = 100; // Personal
  const greenCount = 1000; // Professional

  const dots = [] as React.ReactNode[];

  // Add green, yellow, red groups so all appear together
  for (let i = 0; i < greenCount; i++) {
    dots.push(
      <div key={`g-${i}`} className={`${styles.dot} ${styles.dotGreen}`}></div>,
    );
  }
  for (let i = 0; i < yellowCount; i++) {
    dots.push(
      <div key={`y-${i}`} className={`${styles.dot} ${styles.dotYellow}`}></div>,
    );
  }
  for (let i = 0; i < redCount; i++) {
    dots.push(
      <div key={`r-${i}`} className={`${styles.dot} ${styles.dotRed}`}></div>,
    );
  }

  return <div className={styles.dotGrid}>{dots}</div>;
};

const SubscribePage = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>subscription plans</h1>
        <p>
          choose from one of the following options or calculate your own custom
          plan
        </p>
      </header>

      <main className={styles.mainContent}>
        {/* Left Section: Plan Cards */}
        <section className={styles.plansSection}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={styles.planCard}
              style={
                selectedPlan.name === plan.name
                  ? { borderColor: plan.color }
                  : {}
              }
              onClick={() => setSelectedPlan(plan)}
            >
              <div className={styles.cardContent}>
                <div className={styles.infoBlock}>
                  <FiCamera size={24} />
                  <span>${plan.price}</span>
                  <p>per month</p>
                </div>
                <div className={styles.infoBlock}>
                  <FiLayers size={24} />
                  <span>{plan.images}</span>
                  <p>images</p>
                </div>
              </div>
              <div className={styles.cardFooter}>
                <p className={styles.planName}>{plan.name}</p>
                <div
                  className={styles.statusDot}
                  style={{ backgroundColor: plan.color }}
                ></div>
              </div>
            </div>
          ))}
        </section>

        {/* Right Section: Plan Visualization */}
        <section className={styles.detailsSection}>
          <DotGrid />
          <div className={styles.detailsFooter}>
            <div className={styles.detailsText}>
              <p className={styles.totalImagesText}>*total images per month</p>
              <h2>{selectedPlan.images}</h2>
              <h3>{selectedPlan.name}</h3>
            </div>
            {/*
              Original checkout button preserved for future use.
              When enabling checkout, re-add:
              - import { useRouter } from "next/navigation";
              - const router = useRouter();
              And then use the button below:
              <button
                className={styles.choosePlanButton}
                onClick={() =>
                  router.push(
                    `/checkout?plan=${encodeURIComponent(selectedPlan.name)}`,
                  )
                }
              >
                Choose Plan
              </button>
            */}
            <button
              className={styles.choosePlanButton}
              onClick={() => alert("Implementation coming soon")}
            >
              Choose Plan
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
export default SubscribePage;
