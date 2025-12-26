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
          Journey to the<br />
          <span className={styles.highlight}>Sacred Lands</span>
        </h1>
        <p className={styles.subheadline}>
          Embark on a spiritual journey with unparalleled comfort. From visa processing to premium accommodations, we handle every detail so you can focus entirely on your worship.
        </p>
        
        <div className={styles.actions}>
          <Link href="#packages" className={styles.primaryBtn}>
            Find Your Package
          </Link>
          <Link href="#contact" className={styles.secondaryBtn}>
            Free Consultation
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
