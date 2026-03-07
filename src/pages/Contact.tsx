import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-page">
            <header className="page-header">
                <div className="page-header-container">
                    <h1>Contact Us</h1>
                    <p>Let's discuss how we can bring your next project to life.</p>
                </div>
            </header>

            <section className="section-container">
                <div className="contact-grid">

                    <div className="contact-info-panel">
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

                        {/* Placeholder Map Integration */}
                        <div className="map-container rounded-image shadow-lg">
                            <div className="map-placeholder">
                                <MapPin size={48} className="map-pin" />
                                <p>Interactive Map</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-panel">
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
                    </div>

                </div>
            </section>
        </div>
    );
}
