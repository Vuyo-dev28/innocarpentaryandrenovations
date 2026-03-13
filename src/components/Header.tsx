import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import InnoLogo from './InnoLogo';
import './Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // account for sticky header offset
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMenuOpen(false); // Close menu on click
        }
    };

    return (
        <header className="header">
            <div className="header-container">
                <a href="#hero" onClick={(e) => scrollToSection(e as any, 'hero')} className="logo-link">
                    <InnoLogo className="logo-icon" width="60" height="60" />
                </a>

                <div className="mobile-menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <div className={`nav-wrapper ${isMenuOpen ? 'active' : ''}`}>
                    <nav className="nav-links">
                        <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
                        <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
                        <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Us</a>
                        <a href="#team" onClick={(e) => scrollToSection(e, 'team')}>Team</a>
                        <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>Testimonials</a>
                        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
                    </nav>
                    <div className="cta-container">
                        <button className="cta-button" onClick={(e) => scrollToSection(e, 'contact')}>Get a Quote</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
