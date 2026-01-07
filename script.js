document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const isExpanded = !mobileMenu.classList.contains('hidden');
            menuBtn.setAttribute('aria-expanded', isExpanded);
            menuBtn.querySelector('i').classList.toggle('fa-bars');
            menuBtn.querySelector('i').classList.toggle('fa-times');
        });
    }

    //floating logos
    const leftBox = document.getElementById('dynamic-icon-left');
    const rightBox = document.getElementById('dynamic-icon-right');

    const myImages = ['aws.svg', 'html.png', 'css.png', 'python.png', 'c.png', 'git.png'];

    const shuffled = [...myImages].sort(() => 0.5 - Math.random());
    applyRandomAnimation(leftBox, shuffled[0]);
    applyRandomAnimation(rightBox, shuffled[1]);

    //to track the last section to prevent double-triggering the same animation
    let lastSection = "";

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "-10% 0px -10% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.id !== lastSection) {
                lastSection = entry.target.id;
                
                const shuffled = [...myImages].sort(() => 0.5 - Math.random());
                
                //animate out and swap
                applyRandomAnimation(leftBox, shuffled[0]);
                applyRandomAnimation(rightBox, shuffled[1]);
            }
        });
    }, observerOptions);

    function applyRandomAnimation(element, imageName) {
        
        const randomScale = (Math.random() * (1.1 - 0.9) + 0.9).toFixed(2);
        const randomRotate = Math.floor(Math.random() * 30) - 15;
    
        const starts = [
            {x: 0, y: 50}, {x: 0, y: -50}, {x: 50, y: 0}, {x: -50, y: 0}
        ];
        const s = starts[Math.floor(Math.random() * starts.length)];

        element.style.opacity = '0';
        element.style.transform = 'scale() rotate(0deg)';

        setTimeout(() => {

            element.innerHTML = `<img src="src/assets/float/${imageName}" class="w-40 h-40 object-contain" alt="${imageName.split('.')[0]} Icon" loading="lazy">`;
            
            element.style.opacity = '1';
            element.animate([
                { opacity: 0, transform: `translate(${s.x}px, ${s.y}px) scale(0.3) rotate(0deg)` },
                { opacity: 1, transform: `translate(0, 0) scale(${randomScale}) rotate(${randomRotate}deg)` }
            ], {
                duration: 400,
                easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            });

            element.style.transform = `scale(${randomScale}) rotate(${randomRotate}deg)`;

            element.classList.add('pulse');
            setTimeout(() => {
                element.classList.remove('pulse');
        }, 1500);

        }, 250);
    }

    document.querySelectorAll('section').forEach(sec => observer.observe(sec));
    const sections = document.querySelectorAll('section');
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scrolled');
        }
    });
}, { threshold: 0.15 });

sections.forEach(sec => scrollObserver.observe(sec));
});