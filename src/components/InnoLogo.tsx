
// Image-based logo for INNO Carpentry & Renovations
export default function InnoLogo({ className = "", width = "120", height = "60" }: { className?: string, width?: string, height?: string }) {
    return (
        <img 
            src="/images/logo/inno_logo.png" 
            alt="INNO Carpentry & Renovations Logo" 
            width={width} 
            height={height} 
            className={className}
            style={{ objectFit: 'contain' }}
        />
    );
}
