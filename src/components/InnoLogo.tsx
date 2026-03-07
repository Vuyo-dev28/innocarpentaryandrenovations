
// Recreations of the INNO Carpentry & Renovations logo
export default function InnoLogo({ className = "", width = "120", height = "60" }: { className?: string, width?: string, height?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 120"
            width={width}
            height={height}
            className={className}
        >
            {/* Background elements */}
            <g stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                {/* Square/Diamond Outline */}
                <path d="M 100 20 L 150 70 L 100 120 L 50 70 Z" />

                {/* Crossed Hammers Outline */}
                <line x1="40" y1="30" x2="160" y2="100" />
                <line x1="160" y1="30" x2="40" y2="100" />
            </g>

            {/* Hammer Heads Layout */}
            <g fill="currentColor">
                {/* Left Hammer Head */}
                <path d="M 30 20 C 40 15, 50 25, 45 35 C 38 30, 25 35, 30 20 Z" />
                {/* Right Hammer Head */}
                <path d="M 170 20 C 160 15, 150 25, 155 35 C 162 30, 175 35, 170 20 Z" />
            </g>

            {/* Central Saw Blade effect on the diamond */}
            <path d="M 75 95 A 30 30 0 0 0 125 95" fill="none" stroke="currentColor" strokeWidth="5" strokeDasharray="4 4" />

            {/* The bold INNO Text Block layout */}
            <g transform="rotate(-5 100 65)">
                <rect x="25" y="45" width="150" height="35" fill="currentColor" rx="2" />
                <text x="100" y="68" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="24" fill="var(--color-bg-white, #FFFFFF)" textAnchor="middle" letterSpacing="2">
                    INNO
                </text>
                <text x="100" y="77" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="7" fill="var(--color-bg-white, #FFFFFF)" textAnchor="middle" letterSpacing="1">
                    Carpentry &amp; Renovations
                </text>
            </g>
        </svg>
    );
}
