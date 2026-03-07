import { Hammer, Home, PenTool, Layout, Wrench } from 'lucide-react';
import Card from '../components/Card';
import './Services.css';

export default function Services() {
    return (
        <div className="services-page">
            <header className="page-header">
                <div className="page-header-container">
                    <h1>Our Services</h1>
                    <p>Comprehensive craftsmanship for every corner of your home.</p>
                </div>
            </header>

            <section className="section-container">
                <div className="services-grid detailed">
                    <Card
                        title="Custom Carpentry"
                        description="From bespoke cabinetry to detailed trim work, our master carpenters create beautiful, functional pieces tailored to your exact specifications."
                        icon={<Hammer size={40} />}
                    />
                    <Card
                        title="Full Home Renovation"
                        description="Transform your living space with our comprehensive renovation services. We handle everything from demolition to the final polish."
                        icon={<Home size={40} />}
                    />
                    <Card
                        title="Kitchen & Bath Remodels"
                        description="Upgrade your most essential rooms. We design and build stunning, modern kitchens and luxurious bathrooms."
                        icon={<Layout size={40} />}
                    />
                    <Card
                        title="Repairs & Maintenance"
                        description="Keep your home in peak condition. We provide reliable repair services for structural and cosmetic wood damage."
                        icon={<Wrench size={40} />}
                    />
                    <Card
                        title="Custom Furniture"
                        description="Commission a unique piece of furniture built to last generations, utilizing premium hardwoods and traditional joinery techniques."
                        icon={<PenTool size={40} />}
                    />
                </div>
            </section>
        </div>
    );
}
