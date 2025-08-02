#  subscribe


###  subscribe/page.tsx

```typescript
import React from 'react';
import styles from './subscribe.module.css';
import { FiCamera, FiLayers } from 'react-icons/fi'; // Using react-icons for icons

// Define the data for the subscription plans
const plans = [
  {
    name: 'basic plan',
    price: 1,
    images: '10',
    color: '#FF4136', // Red
  },
  {
    name: 'personal',
    price: 10,
    images: '100',
    color: '#FFDC00', // Yellow
  },
  {
    name: 'professional',
    price: 50,
    images: '1,000',
    color: '#2ECC40', // Green
  },
];

// Component to generate the dot grid for the visualization
const DotGrid = () => {
  const rows = 15;
  const cols = 30;
  const dots = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let colorClass = styles.dotGreen;
      if (i > 8 && i < 13) {
        colorClass = styles.dotYellow;
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
```

###  subscribe/subscribe.module.css

```css

/* General container and dark mode theme setup */
.container {
  background-color: #121212;
  color: #E0E0E0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px;
}

/* Page Header */
.header {
  text-align: left;
  width: 100%;
  max-width: 1100px;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 2.5rem;
  margin: 0 0 5px 0;
  font-weight: 500;
}

.header p {
  font-size: 1rem;
  color: #a0a0a0;
  margin: 0;
}

/* Main content area with two sections */
.mainContent {
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 1100px;
}

/* Left Section: Subscription Plans */
.plansSection {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-basis: 40%;
}

.planCard {
  background-color: #1E1E1E;
  border: 1px solid #333;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cardContent {
  display: flex;
  gap: 20px;
}

.infoBlock {
  background-color: #2a2a2a;
  border-radius: 12px;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
}

.infoBlock span {
  font-size: 1.5rem;
  font-weight: bold;
}

.infoBlock p {
  margin: 0;
  font-size: 0.8rem;
  color: #a0a0a0;
}

.cardFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.planName {
  font-size: 1rem;
  text-transform: capitalize;
  color: #c0c0c0;
  margin: 0;
}

.statusDot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
}

/* Right Section: Plan Details Visualization */
.detailsSection {
  background-color: #1E1E1E;
  border: 1px solid #333;
  border-radius: 16px;
  padding: 30px;
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
}

.dotGrid {
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  gap: 5px;
  margin-bottom: 20px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dotGreen { background-color: #2ECC40; }
.dotYellow { background-color: #FFDC00; }
.dotRed { background-color: #FF4136; }

.detailsFooter {
    margin-top: auto; /* Pushes footer content to the bottom */
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.totalImagesText {
    text-align: right;
    font-size: 0.8rem;
    color: #a0a0a0;
    margin-bottom: 20px;
}

.detailsText h2 {
    font-size: 2rem;
    margin: 0 0 5px 0;
}

.detailsText h3 {
    font-size: 1.2rem;
    color: #a0a0a0;
    margin: 0;
    font-weight: normal;
}

.choosePlanButton {
  background-color: #333;
  color: #E0E0E0;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.choosePlanButton:hover {
  background-color: #444;
}
```



