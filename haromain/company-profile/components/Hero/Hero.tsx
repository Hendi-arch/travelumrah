import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.pattern}></div>
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <span className={styles.label}>Your Trust, Our Obligation</span>
        <h1 className={styles.headline}>
          Your Journey to the<br />
          <span className={styles.highlight}>Holy Land</span>
        </h1>
        <p className={styles.subheadline}>
          Embark on a worry-free spiritual journey. From visa processing to premium accommodations, we handle every detail so you can focus entirely on your worship.
        </p>
        
        <div className={styles.actions}>
          <Link href="#packages" className={styles.primaryBtn}>
            View Packages
          </Link>
          <Link href="#contact" className={styles.secondaryBtn}>
            Chat with Us
          </Link>
        </div>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span className={styles.check}>✦</span> 5-Star Hotels
          </div>
          <div className={styles.featureItem}>
            <span className={styles.check}>✦</span> Visa Processing
          </div>
          <div className={styles.featureItem}>
            <span className={styles.check}>✦</span> Expert Mutawwif
          </div>
          <div className={styles.featureItem}>
            <span className={styles.check}>✦</span> Luxury Transport
          </div>
        </div>
      </div>
    </section>
  );
}
