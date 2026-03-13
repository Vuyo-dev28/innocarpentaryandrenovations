import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hammer, Home as HomeIcon, PenTool, CheckCircle, Layout, Wrench, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Card from '../components/Card';
import SEO from '../components/SEO';
import './Home.css';
import './Services.css';
import './About.css';
import './Projects.css';
import './Contact.css';

const projectsData = [
    {
        id: 1,
        title: 'Custom Wall Unit Installation',
        category: 'Renovations',
        image: '/images/renovations/image copy 14.png',
        description: 'Professional mounting of entertainment systems on custom wall-mounted shelving.',
    },
    {
        id: 2,
        title: 'Custom Workshop Cabinets',
        category: 'Carpentry',
        image: '/images/carpentary/image.png',
        description: 'Bespoke storage solutions for workshops and garages using durable hardwoods.',
    },
    {
        id: 3,
        title: 'Luxury Bathroom Remodel',
        category: 'Renovations',
        image: '/images/renovations/after_bathroom.png',
        description: 'Modern spa-like bathroom renovation with premium white tiles and gold-finished fixtures.',
    },
    {
        id: 4,
        title: 'Multi-level Shoe Rack',
        category: 'Carpentry',
        image: '/images/carpentary/image copy.png',
        description: 'High-capacity custom shelving designed for efficient footwear organization.',
    },
    {
        id: 5,
        title: 'Professional Lawn Care',
        category: 'Garden',
        image: '/images/garden/image copy.png',
        description: 'Precision lawn maintenance using professional-grade, branded equipment.',
    },
    {
        id: 6,
        title: 'Outdoor Patio Construction',
        category: 'Renovations',
        image: '/images/renovations/after.png',
        description: 'Installation of custom wooden pergolas and patio covers for enhanced outdoor living.',
    },
    {
        id: 7,
        title: 'Victorian Window Restoration',
        category: 'Windows',
        image: '/images/windows/image.png',
        description: 'Careful restoration and double-glazing of original Victorian-style sash windows.',
    },
    {
        id: 8,
        title: 'Handcrafted Bedside Tables',
        category: 'Carpentry',
        image: '/images/carpentary/image copy 2.png',
        description: 'Modern wooden pedestals with contrasting finishes and smooth-gliding drawers.',
    },
    {
        id: 9,
        title: 'Security Boundary Fencing',
        category: 'Fencing',
        image: '/images/Fencing/image copy.png',
        description: 'Durable and stylish perimeter fencing designed for both privacy and security.',
    },
    {
        id: 10,
        title: 'Traditional Picket Fence',
        category: 'Fencing',
        image: '/images/Fencing/image.png',
        description: 'Classic white picket fence adding charm and curb appeal to any home.',
    },
    {
        id: 11,
        title: 'Professional Tree Pruning & Maintenance',
        category: 'Garden',
        image: '/images/garden/image copy 3.png',
        description: 'Expert pruning and clearing of branches to protect rooflines and enhance safety.',
    },
    {
        id: 12,
        title: 'Energy-Efficient Glass Conservatory Upgrade',
        category: 'Windows',
        image: '/images/windows/image copy.png',
        description: 'Modernizing old conservatories with energy-efficient slimline glass panels.',
    }
];

export default function Home() {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="home-page">
            <SEO 
                title="INNO Carpentry & Renovations | Expert Home Improvement"
                description="Top-rated carpentry and home renovations. Specializing in custom kitchens, luxury bathroom remodels, garden decking, and window installations. Quality craftsmanship with precision."
                ogTitle="INNO Carpentry & Renovations - Premium Home Solutions"
            />
            {/* Hero Section */}
            <motion.section
                id="hero"
                className="hero-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Crafting Your Vision with Quality & Precision
                    </motion.h1>
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Premium carpentry and home renovations you can trust.
                    </motion.p>
                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button className="primary-button" onClick={() => scrollToSection('contact')}>Get a Quote</button>
                        <button className="secondary-button" onClick={() => scrollToSection('projects')}>View Our Work</button>
                    </motion.div>
                </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
                id="services"
                className="page-section section-bg-light"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
            >
                <div className="section-container">
                    <div className="section-header">
                        <h2>Our Core Services</h2>
                        <p>Comprehensive craftsmanship for every corner of your home.</p>
                    </div>
                    <motion.div
                        className="services-grid detailed"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeIn}><Card
                            title="Custom Carpentry"
                            description="From bespoke cabinetry to detailed trim work, our master carpenters create beautiful, functional pieces tailored to your exact specifications."
                            icon={<Hammer size={40} />}
                            imageUrl="/images/carpentary/image.png"
                        /></motion.div>
                        <motion.div variants={fadeIn}><Card
                            title="Full Home Renovation"
                            description="Transform your living space with our comprehensive renovation services. We handle everything from demolition to the final polish."
                            icon={<HomeIcon size={40} />}
                            imageUrl="/images/renovations/image.png"
                        /></motion.div>
                        <motion.div variants={fadeIn}><Card
                            title="Kitchen & Bath Remodels"
                            description="Upgrade your most essential rooms. We design and build stunning, modern kitchens and luxurious bathrooms."
                            icon={<Layout size={40} />}
                            imageUrl="/images/renovations/after_bathroom.png"
                        /></motion.div>
                        <motion.div variants={fadeIn}><Card
                            title="Repairs & Maintenance"
                            description="Keep your home in peak condition. We provide reliable repair services for structural and cosmetic wood damage."
                            icon={<Wrench size={40} />}
                            imageUrl="/images/refurbishment/image.png"
                        /></motion.div>
                        <motion.div variants={fadeIn}><Card
                            title="Custom Furniture"
                            description="Commission a unique piece of furniture built to last generations, utilizing premium hardwoods and traditional joinery techniques."
                            icon={<PenTool size={40} />}
                            imageUrl="/images/carpentary/image copy 3.png"
                        /></motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
                id="projects"
                className="page-section section-bg-light"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
            >
                <div className="section-container">
                    <div className="section-header">
                        <h2>Our Portfolio</h2>
                        <p>A showcase of our recent projects and craftsmanship.</p>
                    </div>

                    <div className="portfolio-filters">
                        <button
                            className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
                            onClick={() => setFilter('All')}
                        >All</button>
                        <button
                            className={`filter-btn ${filter === 'Renovations' ? 'active' : ''}`}
                            onClick={() => setFilter('Renovations')}
                        >Renovations</button>
                        <button
                            className={`filter-btn ${filter === 'Carpentry' ? 'active' : ''}`}
                            onClick={() => setFilter('Carpentry')}
                        >Carpentry</button>
                        <button
                            className={`filter-btn ${filter === 'Garden' ? 'active' : ''}`}
                            onClick={() => setFilter('Garden')}
                        >Garden</button>
                        <button
                            className={`filter-btn ${filter === 'Windows' ? 'active' : ''}`}
                            onClick={() => setFilter('Windows')}
                        >Windows</button>
                        <button
                            className={`filter-btn ${filter === 'Fencing' ? 'active' : ''}`}
                            onClick={() => setFilter('Fencing')}
                        >Fencing</button>
                    </div>

                    <motion.div
                        className="projects-grid"
                        variants={staggerContainer}
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    className="project-card"
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="project-image-wrapper">
                                        <img src={project.image} alt={project.title} className="project-image" />
                                        <div className="project-overlay">
                                            <span className="project-category">{project.category}</span>
                                        </div>
                                    </div>
                                    <div className="project-info">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </motion.section>

            {/* About Section */}
            <motion.section
                id="about"
                className="page-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
            >
                <div className="section-container split-section">
                    <div className="content-side">
                        <div className="section-header" style={{ textAlign: 'left' }}>
                            <h2>About INNO Carpentry &amp; Renovations</h2>
                            <p>Building trust through exceptional craftsmanship since 2005.</p>
                        </div>
                        <p>
                            Founded on the belief that every home deserves woodwork that stands the test of time,
                            INNO began as a small, family-owned carpentry shop. Over the years, we've grown
                            into a premier home renovation and custom carpentry business, serving our community with
                            dedication and an unwavering commitment to quality.
                        </p>
                        <p>
                            We don't just build house additions or craft custom cabinets; we build the backdrop
                            to your life's most precious memories.
                        </p>
                    </div>
                    <div className="image-side collage-container">
                        <motion.img
                            src="/images/renovations/process1.png"
                            alt="Carpenter working with wood"
                            className="rounded-image shadow-lg main-img"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.img
                            src="/images/carpentary/image copy.png"
                            alt="Bright Renovation space"
                            className="rounded-image shadow-lg floating-img-1"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.img
                            src="/images/Team/image.png"
                            alt="Beautiful wood grain"
                            className="rounded-image shadow-lg floating-img-2"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>
            </motion.section>

            {/* Meet the Team Section */}
            <motion.section
                id="team"
                className="page-section section-bg-light"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
            >
                <div className="section-container">
                    <div className="section-header">
                        <h2>Meet Our Master Craftsmen</h2>
                        <p>The dedicated professionals behind every beautiful project.</p>
                    </div>

                    <motion.div
                        className="team-grid"
                        variants={staggerContainer}
                    >
                        <motion.div className="team-card" variants={fadeIn}>
                            <div className="team-image-wrapper">
                                <img src="/images/Team/image.png" alt="Team Member" />
                            </div>
                        </motion.div>

                        <motion.div className="team-card" variants={fadeIn}>
                            <div className="team-image-wrapper">
                                <img src="/images/Team/image copy.png" alt="Team Member" />
                            </div>
                        </motion.div>

                        <motion.div className="team-card" variants={fadeIn}>
                            <div className="team-image-wrapper">
                                <img src="/images/Team/image copy 2.png" alt="Team Member" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section
                id="testimonials"
                className="page-section testimonials-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
            >
                <div className="section-container">
                    <div className="section-header">
                        <h2>What Our Clients Say</h2>
                    </div>
                    <motion.div
                        className="testimonials-grid"
                        variants={staggerContainer}
                    >
                        <motion.div className="testimonial-card" variants={fadeIn}>
                            <div className="rating">
                                {[...Array(5)].map((_, i) => <CheckCircle key={i} size={20} className="star-icon" />)}
                            </div>
                            <p className="testimonial-text">"INNO transformed our outdated kitchen into a modern masterpiece. Their attention to detail is truly unmatched!"</p>
                            <div className="testimonial-author-block">
                                <img src="/images/Team/image copy 3.png" alt="Sarah Jenkins" className="testimonial-avatar" />
                                <h4 className="testimonial-author">Sarah Jenkins</h4>
                            </div>
                        </motion.div>
                        <motion.div className="testimonial-card" variants={fadeIn}>
                            <div className="rating">
                                {[...Array(5)].map((_, i) => <CheckCircle key={i} size={20} className="star-icon" />)}
                            </div>
                            <p className="testimonial-text">"The custom bookshelves they built for my study are exactly what I envisioned. Professional, timely, and high-quality work."</p>
                            <div className="testimonial-author-block">
                                <img src="/images/Team/image copy 2.png" alt="Mark T" className="testimonial-avatar" />
                                <h4 className="testimonial-author">Mark T.</h4>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
                id="contact"
                className="page-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
            >
                <div className="section-container">
                    <div className="section-header">
                        <h2>Contact Us</h2>
                        <p>Let's discuss how we can bring your next project to life.</p>
                    </div>

                    <div className="contact-grid">
                        <motion.div
                            className="contact-info-panel"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2>Get In Touch</h2>
                            <p className="contact-subtitle">
                                We respond to all inquiries within 24 hours. Fill out the form or reach out directly using the information below.
                            </p>

                            <div className="info-items">
                                <div className="info-item">
                                    <div className="info-icon"><Phone size={24} /></div>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+27 61 067 8771</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon"><Mail size={24} /></div>
                                    <div>
                                        <h4>Email</h4>
                                        <p>innocentnya@gmail.com</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon"><MapPin size={24} /></div>
                                    <div>
                                        <h4>Office Location</h4>
                                        <p>123 Builder's Way<br />Oakville, TX 75001</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon"><Clock size={24} /></div>
                                    <div>
                                        <h4>Business Hours</h4>
                                        <p>Mon - Fri: 8:00 AM - 5:00 PM<br />Sat - Sun: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="contact-form-panel"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2>Request a Free Quote</h2>
                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" placeholder="John Doe" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="john@example.com" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" placeholder="+27 61 067 8771" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service">Service Needed</label>
                                    <select id="service" required>
                                        <option value="">Select a service...</option>
                                        <option value="carpentry">Custom Carpentry</option>
                                        <option value="renovation">Home Renovation</option>
                                        <option value="repair">Repair & Maintenance</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Project Details</label>
                                    <textarea id="message" rows={5} placeholder="Tell us about your project goals..." required></textarea>
                                </div>

                                <button type="submit" className="primary-button submit-btn">Send Message</button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
