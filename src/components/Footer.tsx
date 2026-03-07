import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import InnoLogo from './InnoLogo';
import './Footer.css';

export default function Footer() {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section brand">
                    <div style={{ marginBottom: '1.5rem', marginTop: '-1rem' }}>
                        <InnoLogo width="160" height="80" />
                    </div>
                    <p className="footer-desc">
                        Bringing your vision to life with expert craftsmanship, dedication, and premium quality materials. We build trust one project at a time.
                    </p>
                    <div className="social-icons">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-section links">
                    <h4 className="footer-subtitle">Quick Links</h4>
                    <nav>
                        <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Our Services</a>
                        <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Us</a>
                        <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Portfolio</a>
                        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact Us</a>
                    </nav>
                </div>

                <div className="footer-section contact-info">
                    <h4 className="footer-subtitle">Contact</h4>
                    <p><MapPin size={16} /> 123 Builder's Way, Oakville, TX</p>
                    <p><Phone size={16} /> +27 61 067 8771</p>
                    <p><Mail size={16} /> innocentnya@gmail.com</p>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} INNO Carpentry &amp; Renovations. All rights reserved.</p>
            </div>
        </footer>
    );
}
