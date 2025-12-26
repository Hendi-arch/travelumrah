'use client';


import Link from 'next/link';
import styles from './Packages.module.css';

export default function Packages() {
  const packages = [
    {
      title: 'Umrah Basic',
      price: 'IDR 30.500.000',
      duration: '9 Days',
      features: ['Accommodation (3 Star)', 'Visa Processing', 'Ground Transport', 'Guided Tours'],
      type: 'Economy'
    },
    {
      title: 'Umrah Saver',
      price: 'IDR 32.000.000',
      duration: '10 Days',
      features: ['Accommodation (3 Star)', 'Visa Included', 'Shuttle Service', 'City Tour'],
      type: 'Economy'
    },
    {
      title: 'Family Saver',
      price: 'IDR 29.500.000',
      duration: '10 Days',
      features: ['Quad Sharing', 'Visa Included', 'Bus Transport', 'City Tour'],
      type: 'Economy'
    },
    {
      title: 'Umrah Comfort',
      price: 'IDR 38.000.000',
      duration: '12 Days',
      features: ['Accommodation (4 Star)', 'Visa Processing', 'Private Transport', 'Ziyarah Tours', 'Breakfast Included'],
      type: 'Popular',
      highlight: true
    },
    {
      title: 'Umrah Plus Turkey',
      price: 'IDR 52.000.000',
      duration: '14 Days',
      features: ['4 Star Hotels', 'Istanbul Stopover', 'Visa Included', 'Ziyarah Tours', 'Breakfast Included'],
      type: 'Popular'
    },
    {
      title: 'Ramadan Special',
      price: 'IDR 55.000.000',
      duration: '15 Days',
      features: ['Last 10 Days', 'Iftar & Suhoor', 'Close to Haram', 'Spiritual Guide', 'Full Transport'],
      type: 'Popular'
    },
    {
      title: 'Royal VIP',
      price: 'IDR 68.000.000',
      duration: '14 Days',
      features: ['Accommodation (5 Star, Clock Tower)', 'VIP Visa Processing', 'Luxury Transport', 'Private Guide', 'Full Board Meals'],
      type: 'Premium'
    },
    {
      title: 'Hajj Special',
      price: 'IDR 145.000.000',
      duration: '21 Days',
      features: ['Mina & Arafat VIP Tents', '5 Star Makkah/Madinah', 'Full Guidance', 'Dedicated Mutawwif'],
      type: 'Premium'
    },
    {
      title: 'Executive Elite',
      price: 'IDR 90.000.000',
      duration: '10 Days',
      features: ['Direct Flights', '5 Star Haram View', 'Private GMC', 'Butler Service', 'Fast Track Immigration'],
      type: 'Premium'
    }
  ];

  return (
    <section id="packages" className={styles.packages}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.subtitle}>Select Your Package</span>
          <h2>Our Packages</h2>
          <p>Designed to provide comfort and focus for every pilgrim.</p>
        </div>
        
        <div className={styles.grid}>
          {packages.map((pkg, index) => (
            <div key={index} className={`${styles.card} ${pkg.highlight ? styles.highlight : ''}`}>
              {pkg.highlight && <span className={styles.tag}>Most Popular</span>}
              <div className={styles.cardHeader}>
                <span className={styles.type}>{pkg.type}</span>
                <h3>{pkg.title}</h3>
                <div className={styles.price}>
                  {pkg.price} <span className={styles.perPerson}>/ pax</span>
                </div>
              </div>
              
              <ul className={styles.features}>
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              
              <Link href="#contact" className={styles.button}>
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
