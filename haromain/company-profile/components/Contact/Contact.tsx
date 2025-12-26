import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h2>Let's Start Your Journey</h2>
            <p className={styles.desc}>
              Ready to go to Baitullah? Chat with us today.
            </p>
            
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <h4>Headquarters</h4>
                <p>Jalan Sudirman No. 123<br/>Jakarta Selatan, 12190</p>
              </div>
              <div className={styles.detailItem}>
                <h4>Contact</h4>
                <p>info@qiswahheritage.com<br/>+62 21 555 0123</p>
              </div>
            </div>

            <div className={styles.socials}>
              <h4>Connect With Us</h4>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="Instagram" className={styles.socialLink}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  <span>Instagram</span>
                </a>
                <a href="#" aria-label="Facebook" className={styles.socialLink}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  <span>Facebook</span>
                </a>
                <a href="#" aria-label="Twitter" className={styles.socialLink}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  <span>Twitter</span>
                </a>
                <a href="#" aria-label="WhatsApp" className={styles.socialLink}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          
          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Tell us about your travel plans"></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
