document.addEventListener('DOMContentLoaded', () => {
    const leftBox = document.getElementById('dynamic-icon-left');
    const rightBox = document.getElementById('dynamic-icon-right');

    // Your specific file list
    const myImages = ['aws.png', 'html.png', 'css.png', 'jpmc.png'];

    // Track the last section to prevent double-triggering the same animation
    let lastSection = "";

    const observerOptions = {
        threshold: 0.2, // Trigger earlier (when 20% of section is visible)
        rootMargin: "-10% 0px -10% 0px" // Creates a "trigger zone" in the middle of the screen
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Only trigger if the section is entering and it's a NEW section
            if (entry.isIntersecting && entry.target.id !== lastSection) {
                lastSection = entry.target.id;
                
                // 1. Shuffle and pick images
                const shuffled = [...myImages].sort(() => 0.5 - Math.random());
                
                // 2. Animate out and swap
                applyRandomAnimation(leftBox, shuffled[0]);
                applyRandomAnimation(rightBox, shuffled[1]);
            }
        });
    }, observerOptions);

    function applyRandomAnimation(element, imageName) {
        // Random values for this specific "jump"
        const randomScale = (Math.random() * (1.1 - 0.9) + 0.9).toFixed(2);
        const randomRotate = Math.floor(Math.random() * 30) - 15;
        
        // Pick a random starting point (Top, Bottom, Left, or Right)
        const starts = [
            {x: 0, y: 50}, {x: 0, y: -50}, {x: 50, y: 0}, {x: -50, y: 0}
        ];
        const s = starts[Math.floor(Math.random() * starts.length)];

        // Phase 1: Disappear
        element.style.opacity = '0';
        element.style.transform = 'scale(0.5) rotate(0deg)';

        setTimeout(() => {
            // Phase 2: Swap Content
            // Look for this line inside applyRandomAnimation:
            // Inside your applyRandomAnimation function in script.js:
            element.innerHTML = `<img src="src/assets/float/${imageName}" class="w-40 h-40 object-contain" alt="icon">`;
            // Phase 3: Pop back in with a bounce
            element.style.opacity = '1';
            element.animate([
                { opacity: 0, transform: `translate(${s.x}px, ${s.y}px) scale(0.3) rotate(0deg)` },
                { opacity: 1, transform: `translate(0, 0) scale(${randomScale}) rotate(${randomRotate}deg)` }
            ], {
                duration: 700,
                easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            });

            // Set final resting state
            element.style.transform = `scale(${randomScale}) rotate(${randomRotate}deg)`;
        }, 250);
    }

    // Attach observer to every section
    document.querySelectorAll('section').forEach(sec => observer.observe(sec));
});