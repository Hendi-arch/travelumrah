import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.patternOverlay}></div>
              <div className={styles.archFrame}>
                <span className={styles.imageText}>Serving The Guests of Allah</span>
              </div>
            </div>
          </div>
          
          <div className={styles.content}>
            <span className={styles.label}>About Us</span>
            <h2>Dedicated to Your Sacred Journey</h2>
            <p className={styles.lead}>
              At Qiswah Heritage, we believe that the journey to the Holy Lands is a life-changing spiritual milestone.
            </p>
            <p className={styles.description}>
              We are here to make your pilgrimage smooth and focused. We shield you from logistical burdens so your heart remains attached solely to worship. Our team of experienced guides are committed to the Sunnah and dedicated to your comfort.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5k+</span>
                <span className={styles.statLabel}>Pilgrims Served</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Satisfaction</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>12+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
            </div>

            <div className={styles.values}>
              <div className={styles.valueItem}>
                <span className={styles.valueIcon}>✦</span>
                <div>
                  <strong>Amanah</strong>
                  <p>Trustworthy management of your funds and ibadah.</p>
                </div>
              </div>
              <div className={styles.valueItem}>
                <span className={styles.valueIcon}>✦</span>
                <div>
                  <strong>Khidmah</strong>
                  <p>Service with humility, ensuring your utmost comfort.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
