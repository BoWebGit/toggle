// Tours section functionality
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animate tour screens
gsap.fromTo(".products__screen", {
  y: 100,
  opacity: 0,
  scale: 0.8,
}, {
  y: 0,
  opacity: 1,
  scale: 1,
  scrollTrigger: {
    trigger: ".products__screens",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
  stagger: {
    each: 0.2,
  }
});

// Tour screen carousel
let currentTour = 0;
const tourScreens = document.querySelectorAll('.products__screen');

function showTour(index) {
  tourScreens.forEach((screen, i) => {
    screen.classList.remove('active');
    if (i === index) {
      screen.classList.add('active');
    }
  });
}

// Auto-rotate tours
setInterval(() => {
  currentTour = (currentTour + 1) % tourScreens.length;
  showTour(currentTour);
}, 4000);

// Initialize
showTour(0);

// Add click handlers for tour screens
tourScreens.forEach((screen, index) => {
  screen.addEventListener('click', () => {
    currentTour = index;
    showTour(currentTour);
  });
});

// Interactive World Map
const worldMap = document.getElementById('world-map');

if (worldMap) {
  // Map destinations with coordinates (simplified)
  const mapDestinations = [
    { name: 'Бали', x: 75, y: 60, type: 'relaxation' },
    { name: 'Кіото', x: 85, y: 35, type: 'cultural' },
    { name: 'Непал', x: 70, y: 40, type: 'adventure' },
    { name: 'Норвегія', x: 50, y: 20, type: 'nature' },
    { name: 'Марокко', x: 45, y: 45, type: 'cultural' },
    { name: 'Нова Зеландія', x: 95, y: 75, type: 'adventure' },
    { name: 'Ісландія', x: 30, y: 25, type: 'nature' },
    { name: 'Таїланд', x: 75, y: 50, type: 'relaxation' },
    { name: 'Перу', x: 25, y: 60, type: 'adventure' },
    { name: 'Італія', x: 55, y: 40, type: 'cultural' }
  ];

  // Create map points
  mapDestinations.forEach(dest => {
    const point = document.createElement('div');
    point.className = `map-point ${dest.type}`;
    point.style.left = `${dest.x}%`;
    point.style.top = `${dest.y}%`;
    point.setAttribute('data-country', dest.name);
    point.setAttribute('data-type', dest.type);
    
    point.addEventListener('click', () => {
      showDestinationInfo(dest.name, dest.type);
    });
    
    worldMap.appendChild(point);
  });

  // Add animated background
  const background = document.createElement('div');
  background.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 40%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(255, 99, 71, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 50% 20%, rgba(50, 205, 50, 0.1) 0%, transparent 50%);
    animation: mapGlow 4s ease-in-out infinite alternate;
    pointer-events: none;
  `;
  
  worldMap.appendChild(background);
}

function showDestinationInfo(name, type) {
  const typeNames = {
    'cultural': 'Культурний тур',
    'adventure': 'Пригоди',
    'nature': 'Природа',
    'relaxation': 'Відпочинок'
  };
  
  alert(`Напрямок: ${name}\nТип: ${typeNames[type] || type}`);
}

// Add CSS animation for map background
const style = document.createElement('style');
style.textContent = `
  @keyframes mapGlow {
    0% { opacity: 0.3; }
    100% { opacity: 0.7; }
  }
`;
document.head.appendChild(style);