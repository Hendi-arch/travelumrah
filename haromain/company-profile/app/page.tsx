import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Packages from '@/components/Packages/Packages';
import Testimonials from '@/components/Testimonials/Testimonials';
import Gallery from '@/components/Gallery/Gallery';
import Contact from '@/components/Contact/Contact';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Packages />
      <Testimonials />
      <Gallery />
      <Contact />
    </main>
  );
}
