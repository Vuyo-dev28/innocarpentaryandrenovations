import { useState } from 'react';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'Modern Oak Kitchen',
        category: 'Renovation',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&w=800&q=80',
        description: 'Complete overhaul of a 1980s kitchen, featuring custom oak cabinetry and quarts countertops.',
    },
    {
        id: 2,
        title: 'Handcrafted Dining Table',
        category: 'Carpentry',
        image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80',
        description: 'A custom built 10-seater dining table made from reclaimed walnut wood.',
    },
    {
        id: 3,
        title: 'Luxury Bathroom Remodel',
        category: 'Renovation',
        image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80',
        description: 'Modern spa-like bathroom renovation with custom floating vanity and heated floors.',
    },
    {
        id: 4,
        title: 'Built-in Library Shelves',
        category: 'Carpentry',
        image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80',
        description: 'Floor-to-ceiling built-in bookcases with integrated lighting and sliding ladder.',
    },
    {
        id: 5,
        title: 'Outdoor Teak Decking',
        category: 'Carpentry',
        image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80',
        description: 'Expansive multi-level outdoor deck using premium, weather-resistant teak.',
    },
    {
        id: 6,
        title: 'Open Concept Living Space',
        category: 'Renovation',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        description: 'Structural renovation removing load-bearing walls for a seamless open concept flow.',
    }
];

export default function Projects() {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    return (
        <div className="projects-page">
            <header className="page-header">
                <div className="page-header-container">
                    <h1>Our Portfolio</h1>
                    <p>A showcase of our recent projects and craftsmanship.</p>
                </div>
            </header>

            <section className="section-container">
                <div className="portfolio-filters">
                    <button
                        className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
                        onClick={() => setFilter('All')}
                    >All</button>
                    <button
                        className={`filter-btn ${filter === 'Renovation' ? 'active' : ''}`}
                        onClick={() => setFilter('Renovation')}
                    >Renovations</button>
                    <button
                        className={`filter-btn ${filter === 'Carpentry' ? 'active' : ''}`}
                        onClick={() => setFilter('Carpentry')}
                    >Carpentry</button>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card">
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
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
