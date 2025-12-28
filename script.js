/**
 * Techvance Evolve - Landing Page Script
 * Minimal, clean, and focused on essential interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Contact button email reveal
    const contactBtn = document.getElementById('contactBtn');
    const emailReveal = document.getElementById('emailReveal');

    if (contactBtn && emailReveal) {
        contactBtn.addEventListener('click', () => {
            contactBtn.classList.add('hidden');
            
            // Small delay for smooth transition
            setTimeout(() => {
                emailReveal.classList.add('visible');
            }, 150);
        });

        // Optional: Click outside to reset
        document.addEventListener('click', (e) => {
            if (!emailReveal.contains(e.target) && 
                !contactBtn.contains(e.target) && 
                emailReveal.classList.contains('visible')) {
                emailReveal.classList.remove('visible');
                
                setTimeout(() => {
                    contactBtn.classList.remove('hidden');
                }, 150);
            }
        });
    }

    // Subtle parallax effect on gradient orbs (optional enhancement)
    const orbs = document.querySelectorAll('.gradient-orb');
    
    if (orbs.length > 0 && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        let ticking = false;
        
        document.addEventListener('mousemove', (e) => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const x = (e.clientX / window.innerWidth - 0.5) * 20;
                    const y = (e.clientY / window.innerHeight - 0.5) * 20;
                    
                    orbs.forEach((orb, index) => {
                        const factor = index === 0 ? 1 : -0.7;
                        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
                    });
                    
                    ticking = false;
                });
                
                ticking = true;
            }
        });
    }

    // Add subtle entrance animation stagger to value items
    const valueItems = document.querySelectorAll('.value-item');
    valueItems.forEach((item, index) => {
        item.style.animationDelay = `${0.6 + (index * 0.1)}s`;
    });
});

