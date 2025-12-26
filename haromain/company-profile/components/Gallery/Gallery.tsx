'use client';

import styles from './Gallery.module.css';

export default function Gallery() {
  const images = [
    {
      src: '/gallery_worship.png',
      alt: 'Pilgrims performing Tawaf around the Kaaba',
      title: 'Spiritual Serenity',
      desc: 'Experience the peace of the Holy Haram.'
    },
    {
      src: '/gallery_group.png',
      alt: 'Group photo at Mount Uhud',
      title: 'Brotherhood & Sisterhood',
      desc: 'Moments of joy and togetherness in Madinah.'
    },
    {
      src: '/gallery_hotel.png',
      alt: 'Luxury Hotel Room with Clock Tower View',
      title: 'Premium Comfort',
      desc: 'Rest and recharge in 5-star accommodations.'
    },
    {
      src: '/gallery_departure.png',
      alt: 'Pilgrims at Airport',
      title: 'The Journey Begins',
      desc: 'Excitement and preparation at departure.'
    },
    {
      src: '/gallery_worship.png',
      alt: 'Friday Prayers at Masjidil Haram',
      title: 'Jumu\'ah Blessings',
      desc: 'Joining millions in unified prayer.'
    },
    {
      src: '/gallery_group.png',
      alt: 'Ziarah Visit',
      title: 'Historical Ziarah',
      desc: 'Walking in the footsteps of the Prophet (SAW).'
    },
    {
      src: '/gallery_hotel.png',
      alt: 'Dining Hall',
      title: 'Exquisite Dining',
      desc: 'International cuisine served daily.'
    },
    {
      src: '/gallery_departure.png',
      alt: 'Family Arrival',
      title: 'Safe Arrival',
      desc: 'Welcome to the Holy Land.'
    }
  ];

  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container">
        <header className={styles.header}>
          <h1>Our Gallery</h1>
          <p>A glimpse of the journey.</p>
        </header>

        <div className={styles.grid}>
          {images.map((img, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={img.src} alt={img.alt} className={styles.image} />
                <div className={styles.overlay}>
                  <h3>{img.title}</h3>
                  <p>{img.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
