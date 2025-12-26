import styles from './Testimonials.module.css';

export default function Testimonials() {
  const reviews = [
    { 
      name: 'Haji Ahmad Fadillah', 
      text: 'The experience was nothing short of spiritual excellence. From the moment we landed in Jeddah to our final tawaf, Qiswah Heritage’s team was there ensuring our comfort. The proximity of the hotel to the Haram made late-night prayers so accessible.', 
      role: 'Umrah Executive Pilgrim',
      image: '/avatar_ahmad.png',
      rating: 5
    },
    { 
      name: 'Sarah Mayasari', 
      text: 'Traveling with three children and elderly parents can be daunting, but the Family Saver package was perfect. The bus transport was comfortable, and the mutawwif was incredibly patient and knowledgeable, guiding us through the rituals with grace.', 
      role: 'Family Group Leader',
      image: '/avatar_sarah.png',
      rating: 5
    },
    { 
      name: 'Ustadz Hendra Saputra', 
      text: 'I have led many groups over the years, but the logistical precision of Qiswah Heritage Services is a cut above. The VIP tent services in Mina were exceptional, allowing us to focus entirely on our worship without worldly distractions.', 
      role: 'Religious Guide',
      image: '/avatar_hendra.png',
      rating: 5
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} style={{ color: i < rating ? '#FEF08A' : '#E2E8F0' }}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <h2 className={styles.title}>Stories from Our Pilgrims</h2>
        <p className={styles.subtitle}>Real experiences from our jamaah.</p>
        
        <div className={styles.grid}>
          {reviews.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>
                {renderStars(r.rating)}
              </div>
              <p className={styles.text}>"{r.text}"</p>
              <div className={styles.divider}></div>
              <div className={styles.authorContainer}>
                <img src={r.image} alt={r.name} className={styles.avatar} />
                <div className={styles.author}>
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
