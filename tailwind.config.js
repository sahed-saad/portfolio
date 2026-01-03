tailwind.config = {
    theme: {
        extend: {
            colors: {
                // New Light Theme Palette
                'canvas-main': '#f8fafc',    // Very light slate (Background)
                'canvas-card': '#ffffff',    // Pure white (Cards)
                'brand-accent': '#2563eb',   // Royal Blue (Buttons/Highlights)
                'brand-dark': '#0f172a',     // Navy/Black (Headings)
                'brand-gray': '#64748b',     // Slate Gray (Body text)
                'border-light': '#e2e8f0'    // Subtle borders
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Clean modern font
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'hover': '0 10px 25px -5px rgba(37, 99, 235, 0.15)', // Blue tinted shadow
            },
        }
    }
}