'use client';

import { useState, useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from '../ThemeContext';
import styles from './subscribe.module.css';

// Define the structure for a pricing plan
interface Plan {
  name: string;
  price: number;
  imageCount: string;
  isFeatured: boolean;
}

// Updated plan details to match the figma mockups
const plans: Plan[] = [
  {
    name: 'Basic',
    price: 1,
    imageCount: '10 images',
    isFeatured: false,
  },
  {
    name: 'Personal',
    price: 10,
    imageCount: '100 images',
    isFeatured: true,
  },
  {
    name: 'Professional',
    price: 50,
    imageCount: '1,000 images',
    isFeatured: false,
  },
  {
    name: 'Enterprise',
    price: 500,
    imageCount: '10,000 images',
    isFeatured: false,
  },
];


// Reusable Plan Card Component
const PlanCard = ({ plan, isSelected, onSelect }: { plan: Plan; isSelected: boolean; onSelect: () => void; }) => (
    <div className={`${styles.planCard} ${isSelected ? styles.selected : ''}`} onClick={onSelect}>
        <div className={styles.cardHeader}>
            <span className={styles.planName}>{plan.name}</span>
            <div className={styles.radioOuter}>
                {isSelected && <div className={styles.radioInner} />}
            </div>
        </div>
        <div className={styles.priceContainer}>
            <span className={styles.priceCurrency}>$</span>
            <span className={styles.priceAmount}>{plan.price}</span>
        </div>
        <span className={styles.imageCount}>{plan.imageCount}</span>
    </div>
);


export default function SubscribePage() {
    const { theme } = useContext(ThemeContext);
    const [selectedPlan, setSelectedPlan] = useState<string>('Personal'); // Default to 'Personal'

    return (
        <div className="app-container">
             <header className="app-header">
                <Link href="/upload" className="back-to-home-link">
                    &larr; Back to Upload
                </Link>
            </header>
            <main className={`app-main ${styles.subscribeMain}`}>
                <h1 className={styles.pageTitle}>Subscription Plans</h1>
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
                    <button className={styles.actionButton}>Purchase Plan</button>
                    {/* <button className={`${styles.actionButton} ${styles.loginButton}`}>Login</button> */}
                </div>
                <div className={styles.disclaimerBox}>
                    <p>
                        If you are unable to afford this service, please email{' '}
                        <a href="mailto:contact@isitai.com">contact@isitai.com</a> and I will send you an access key, no questions asked.
                    </p>
                </div>
            </main>
            <footer className="app-footer">
                <p>&copy; {new Date().getFullYear()}{' '}<a href="https://www.linkedin.com/in/morganbergen" style={{ textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">Morgan Bergen</a>. All rights reserved.</p>
            </footer>
        </div>
    );
}   