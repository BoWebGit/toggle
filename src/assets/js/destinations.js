import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Destinations section animations
gsap.fromTo("#destinations .destinations-grid .destination-card", {
    y: 50,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#destinations .destinations-grid",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});

// Search and Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('destination-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const destinationCards = document.querySelectorAll('.destination-card');
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            destinationCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                    gsap.fromTo(card, {
                        scale: 0.8,
                        opacity: 0
                    }, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.3
                    });
                } else {
                    gsap.to(card, {
                        scale: 0.8,
                        opacity: 0,
                        duration: 0.3,
                        onComplete: () => {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    }
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            destinationCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    gsap.fromTo(card, {
                        scale: 0.8,
                        opacity: 0
                    }, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.3
                    });
                } else {
                    gsap.to(card, {
                        scale: 0.8,
                        opacity: 0,
                        duration: 0.3,
                        onComplete: () => {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
    
    // Card hover animations
    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3
            });
        });
    });
});