import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>Qiswah Heritage.</h3>
            <p className={styles.tagline}>
              Your trusted partner for a peaceful Umrah.
            </p>
          </div>
          
          <div className={styles.column}>
            <h4>Company</h4>
            <div className={styles.links}>
              <Link href="#about">About Us</Link>
              <Link href="#testimonials">Testimonials</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Services</h4>
            <div className={styles.links}>
              <Link href="#packages">Umrah Packages</Link>
              <Link href="#">Hajj Services</Link>
              <Link href="#">Custom Travel</Link>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Contact</h4>
            <div className={styles.links}>
              <a href="mailto:info@qiswahheritage.com">info@qiswahheritage.com</a>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Qiswah Heritage Travel. All rights reserved.</p>
          <div className={styles.links} style={{ flexDirection: 'row', gap: '1rem' }}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
