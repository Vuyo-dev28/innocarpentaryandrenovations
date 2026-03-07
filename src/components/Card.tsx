import type { ReactNode } from 'react';
import './Card.css';

interface CardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    imageUrl?: string;
    onClick?: () => void;
}

export default function Card({ title, description, icon, imageUrl, onClick }: CardProps) {
    return (
        <div className={`card-component ${onClick ? 'clickable' : ''}`} onClick={onClick}>
            {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
            <div className="card-content">
                {icon && <div className="card-icon">{icon}</div>}
                <h3 className="card-title">{title}</h3>
                <p className="card-desc">{description}</p>
            </div>
        </div>
    );
}
