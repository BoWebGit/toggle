import '../scss/main.scss';

import Lenis from '@studio-freight/lenis'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Initialize smooth scroll
const lenis = new Lenis({
  duration: 4,
  easing: (t) => 1 - Math.pow(1 - t, 3),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smoothTouch: true,
  touchMultiplier: 8,
  wheelMultiplier: 3,
  infinite: false,
  autoResize: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

lenis.on('scroll', ScrollTrigger.update)

export function disableScroll() {
  lenis.stop();
}

export function enableScroll() {
  lenis.start();
}

// Import travel-specific modules
import './travel/destinations';
import './travel/tours';
import './travel/booking';
import './travel/contact';

window.addEventListener('load', function() {
  let isUserScrolling = false;

  // Scroll detection
  window.addEventListener('wheel', () => {
    isUserScrolling = true;
  });

  window.addEventListener('touchmove', () => {
    isUserScrolling = true;
  });

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      isUserScrolling = false;
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const offsetPercentage = this.getAttribute('data-offset');
  
      if (targetElement) {
        const offset = window.innerHeight * (offsetPercentage / 100);
        lenis.scrollTo(targetElement, { offset: offset, duration: 2 });
      }
    });
  });

  document.body.classList.add('loading');

  // Mobile menu toggle
  const navToggle = document.querySelector('.toggle-menu');
  const header = document.querySelector('.site-header');

  if (navToggle && header) {
    navToggle.addEventListener('click', function(){
      if(header.classList.contains('active')) {
        header.classList.remove('active');
        navToggle.innerHTML = 'Меню';
      } else {
        header.classList.add('active');
        navToggle.innerHTML = 'Закрити';
      }
    });
  }

  // Section progress tracking
  const sections = document.querySelectorAll('.section');
  const sectionsCount = document.querySelector('.sections-count');

  // Footer animation
  gsap.fromTo(".footer__heading span", {
    y: "100%",
    opacity: 0,
  }, {
    y: "0",
    opacity: 1,
    scrollTrigger: {
      trigger: ".site-footer",
      start: "top 70%",
      end: "top 50%",
      scrub: true,
    },
    stagger: {
      each: 0.2,
    }
  });

  // Create section progress indicators
  sections.forEach((section, index) => {
    const sectionTitle = section.getAttribute("data-title");
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("section-progress");

    const titleSpan = document.createElement("span");
    titleSpan.textContent = `${sectionTitle}`;
    titleSpan.classList.add('title');

    const percentSpan = document.createElement("span");
    percentSpan.classList.add("progress-percent");
    percentSpan.style.display = "block";
    percentSpan.style.height = "0";

    sectionDiv.appendChild(titleSpan);
    sectionDiv.appendChild(percentSpan);
    sectionsCount.appendChild(sectionDiv);

    gsap.to(percentSpan, {
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
          const progress = (self.progress * 100).toFixed(0);
          percentSpan.style.height = `${progress}%`;

          if (self.isActive) {
            document.querySelectorAll(".section-progress").forEach(div => div.classList.remove("active"));
            sectionDiv.classList.add("active");
          }
        },
      },
    });
  });

  // Email copy functionality
  const copyButton = document.getElementById('copy-button');
  if (copyButton) {
    copyButton.addEventListener('click', function() {
      const emailText = document.getElementById('email-text').textContent; 
      navigator.clipboard.writeText(emailText).then(() => {
        copyButton.textContent = 'Скопійовано!';
        setTimeout(() => {
          copyButton.textContent = 'Копіювати';
        }, 2000);
      });
    });
  }

  // Travel search functionality
  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      const destination = document.querySelector('.destination-input').value;
      const date = document.querySelector('.date-input').value;
      const travelers = document.querySelector('.travelers-select').value;
      
      if (!destination) {
        alert('Будь ласка, введіть напрямок подорожі');
        return;
      }
      
      // Simulate search - in real app this would make API call
      console.log('Пошук турів:', { destination, date, travelers });
      
      // Scroll to tours section
      const toursSection = document.querySelector('#tours');
      if (toursSection) {
        lenis.scrollTo(toursSection, { offset: 0, duration: 2 });
      }
    });
  }

  // Contact form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Simulate form submission
      console.log('Форма відправлена:', data);
      
      // Show success message
      alert('Дякуємо! Ваша заявка відправлена. Ми зв\'яжемося з вами найближчим часом.');
      
      // Reset form
      contactForm.reset();
    });
  }

  // Destination cards hover effects
  const destinationCards = document.querySelectorAll('.destination-card');
  destinationCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      gsap.to(this, { scale: 1.05, duration: 0.3 });
    });
    
    card.addEventListener('mouseleave', function() {
      gsap.to(this, { scale: 1, duration: 0.3 });
    });
  });

  // Tour cards interaction
  const tourCards = document.querySelectorAll('.tour-card');
  tourCards.forEach((card, index) => {
    card.addEventListener('click', function() {
      tourCards.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Parallax effects for hero section
  gsap.to('.hero__icon', {
    y: -50,
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // Animate stats on scroll
  const statItems = document.querySelectorAll('.stat-item h3');
  statItems.forEach(stat => {
    const finalValue = stat.textContent;
    const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
    
    if (numericValue) {
      gsap.fromTo(stat, {
        textContent: 0
      }, {
        textContent: numericValue,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: stat,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        onUpdate: function() {
          const currentValue = Math.round(this.targets()[0].textContent);
          if (finalValue.includes('K')) {
            stat.textContent = currentValue + 'K+';
          } else if (finalValue.includes('/')) {
            stat.textContent = currentValue + '/7';
          } else {
            stat.textContent = currentValue;
          }
        }
      });
    }
  });

  // Feature items animation
  gsap.fromTo('.feature-item', {
    y: 50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.about__features',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  // Destinations grid animation
  gsap.fromTo('.destination-card', {
    y: 100,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.destinations__grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  console.log('Travel Explorer загружено успішно!');
});