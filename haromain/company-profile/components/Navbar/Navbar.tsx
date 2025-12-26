'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Packages', href: '#packages' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  // Update indicator position when activeLink changes
  useEffect(() => {
    const index = navLinks.findIndex(link => link.name === activeLink);
    const currentLink = linksRef.current[index];

    if (currentLink && activeLink) {
      setIndicatorStyle({
        left: currentLink.offsetLeft,
        width: currentLink.clientWidth,
        opacity: 1
      });
    } else {
      setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
    }
  }, [activeLink]);

  // Active section spy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const active = navLinks.find(link => link.href === `#${id}`);
          if (active) {
            setActiveLink(active.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach(link => {
      if (link.href.startsWith('#')) {
        const id = link.href.replace('#', '');
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    });

    // Also observe Hero/Top to clear active link
    const hero = document.getElementById('hero') || document.querySelector('section:first-of-type'); // Assuming first section is Hero
    if (hero && !navLinks.some(link => link.href === `#${hero.id}`)) {
       // If we're strictly observing nav sections, we might want to know when we leave them.
       // Keep it simple: if 'about' leaves and goes up, we might be in 'packages'.
       // Only issue is if we go UP to Hero.
    }
    
    // Special case for scrolling to top
    const handleScrollTop = () => {
         if (window.scrollY < 100) {
             setActiveLink('');
         }
    };
    window.addEventListener('scroll', handleScrollTop);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollTop);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a route link (starts with /), let Next.js Link handle it
    if (href.startsWith('/')) return;

    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    // If element exists (we are on home page), scroll to it
    if (elem) {
      const headerOffset = 100;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      const name = navLinks.find(link => link.href === href)?.name || '';
      setActiveLink(name);
    } else {
      // We are on another page (e.g. /gallery), so navigate to home with hash
      window.location.href = `/${href}`;
    }
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
        <div className="container">
          <nav className={styles.nav}>
            <Link href="/" className={styles.logo} onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveLink('');
            }}>
              Qiswah Heritage<span>.</span>
            </Link>

            {/* Desktop Menu */}
            <div className={styles.desktopMenu}>
              <div 
                className={styles.indicator}
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.opacity
                }}
              />
              {navLinks.map((link, index) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  ref={el => { linksRef.current[index] = el }}
                  className={`${styles.link} ${activeLink === link.name ? styles.active : ''}`}
                  onClick={(e) => handleScroll(e, link.href)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact" 
                className={styles.cta} 
                onClick={(e) => handleScroll(e, '#contact')}
              >
                Book a Journey
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className={styles.mobileToggle} 
              onClick={toggleMobile}
              aria-label="Toggle menu"
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.mobileMenuOpen : ''}`}>
        <button onClick={toggleMobile} className={styles.closeButton}>×</button>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className={styles.mobileLink}
            onClick={(e) => {
              toggleMobile();
              handleScroll(e, link.href);
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}
