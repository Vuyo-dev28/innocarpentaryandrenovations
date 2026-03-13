import SEO from '../components/SEO';
import './About.css';

export default function About() {
    return (
        <div className="about-page">
            <SEO 
                title="About INNO Carpentry & Renovations | Our Heritage of Quality"
                description="Learn about the history and values of INNO Carpentry & Renovations. Building trust and exceptional craftsmanship since 2005."
                ogTitle="Our Story - INNO Carpentry & Renovations"
            />
            <header className="page-header">
                <div className="page-header-container">
                    <h1>About INNO</h1>
                    <p>Building trust through exceptional craftsmanship since 2005.</p>
                </div>
            </header>

            <section className="section-container split-section">
                <div className="content-side">
                    <h2>Our Story</h2>
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
                <div className="image-side">
                    <img
                        src="https://images.unsplash.com/photo-1502005097973-ef569427b0c8?auto=format&fit=crop&w=800&q=80"
                        alt="Carpenter working with wood"
                        className="rounded-image shadow-lg"
                    />
                </div>
            </section>

            <section className="values-section">
                <div className="section-container text-center">
                    <h2>Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h3>Craftsmanship</h3>
                            <p>We pride ourselves on precision, utilizing time-honored techniques combined with modern tools.</p>
                        </div>
                        <div className="value-card">
                            <h3>Integrity</h3>
                            <p>Honest pricing, transparent communication, and standing firmly behind our work.</p>
                        </div>
                        <div className="value-card">
                            <h3>Sustainability</h3>
                            <p>Sourcing materials responsibly and minimizing waste in every project we undertake.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}
