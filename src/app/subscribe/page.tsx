/**
 *
 *
 *
 **/

import React from 'react';
import styles from './subscribe.module.css';
import { FiCamera, FiLayers } from 'react-icons/fi';


/**
 *  @
 *
 **/
const plans = [
  {
    name: 'basic plan',
    price: 1,
    images: '10',
    color: '#FF4136',
  },
  {
    name: 'personal',
    price: 10,
    images: '100',
    color: '#FFDC00',
  },
  {
    name: 'professional',
    price: 50,
    images: '1,000',
    color: '#2ECC40',
  },
];

const DotGrid = () => {

  const rows = 15;
  const cols = 30;
  const dots = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let colorClass = styles.dotGreen;
      if (i > 8 && i < 13) {
        colorClass = styles.gotYellow;
      }
      if (i >= 13) {
        colorClass = styles.dotRed;
      }
      dots.push(<div key={`${i}-${j}`} className={`${styles.dot} ${colorClass}`}></div>);
    }
  }
  return <div className={styles.dotGrid}>{dots}</div>;
};


const SubscribePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>subscription plans</h1>
        <p>choose from one of the following options or calculate your own custom plan</p>
      </header>
      
      <main className={styles.mainContent}>
        {/* Left Section: Plan Cards */}
        <section className={styles.plansSection}>
          {plans.map((plan) => (
            <div key={plan.name} className={styles.planCard}>
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
                <div className={styles.statusDot} style={{ backgroundColor: plan.color }}></div>
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
                    <h2>heading</h2>
                    <h3>subheading</h3>
                </div>
                <button className={styles.choosePlanButton}>Choose Plan</button>
            </div>
        </section>
      </main>
    </div>
  );
};
export default SubscribePage;






























