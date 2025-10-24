// Destinations section functionality
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animate destinations stats
gsap.fromTo(".about__stats-cell", {
  y: 50,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".about__stats",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
  stagger: {
    each: 0.2,
  }
});

// Animate slider items
gsap.fromTo(".about__slider-item", {
  scale: 0.8,
  opacity: 0,
}, {
  scale: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".about__slider",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
  stagger: {
    each: 0.3,
  }
});

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.about__slider-item');
const progressBar = document.querySelector('.about__slider-progress span');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'left', 'right');
    if (i === index) {
      slide.classList.add('active');
    } else if (i < index) {
      slide.classList.add('left');
    } else {
      slide.classList.add('right');
    }
  });
  
  if (progressBar) {
    progressBar.style.width = `${((index + 1) / slides.length) * 100}%`;
  }
}

// Auto-rotate slides
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

// Initialize
showSlide(0);

// Travel search functionality
const searchForm = document.querySelector('.search-form');
const searchInput = document.getElementById('destination-search');
const travelTypeSelect = document.getElementById('travel-type');
const budgetSelect = document.getElementById('budget');
const searchResults = document.getElementById('search-results');

// Sample travel destinations data
const destinations = [
  {
    name: "Бали, Індонезія",
    description: "Тропічний рай з чудовими пляжами, храмами та рисовими терасами",
    type: "relaxation",
    budget: "medium",
    price: "$1200",
    rating: "4.8",
    image: "./assets/images/toggle_cosmic.png"
  },
  {
    name: "Кіото, Японія",
    description: "Культурна столиця Японії з древніми храмами та традиційною архітектурою",
    type: "culture",
    budget: "high",
    price: "$2500",
    rating: "4.9",
    image: "./assets/images/toggle_cosmic.png"
  },
  {
    name: "Непал",
    description: "Пригоди в Гімалаях з трекінгом та альпінізмом",
    type: "adventure",
    budget: "low",
    price: "$800",
    rating: "4.7",
    image: "./assets/images/toggle_cosmic.png"
  },
  {
    name: "Норвегія",
    description: "Північне сяйво, фіорди та дика природа Скандинавії",
    type: "nature",
    budget: "high",
    price: "$3000",
    rating: "4.9",
    image: "./assets/images/toggle_cosmic.png"
  },
  {
    name: "Марокко",
    description: "Екзотичні базари, пустеля Сахара та арабська культура",
    type: "culture",
    budget: "medium",
    price: "$1500",
    rating: "4.6",
    image: "./assets/images/toggle_cosmic.png"
  },
  {
    name: "Нова Зеландія",
    description: "Природні чудеса, гірські пейзажі та екстремальні види спорту",
    type: "adventure",
    budget: "high",
    price: "$2800",
    rating: "4.8",
    image: "./assets/images/toggle_cosmic.png"
  }
];

function filterDestinations() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedType = travelTypeSelect.value;
  const selectedBudget = budgetSelect.value;
  
  let filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm) || 
                         destination.description.toLowerCase().includes(searchTerm);
    const matchesType = !selectedType || destination.type === selectedType;
    const matchesBudget = !selectedBudget || destination.budget === selectedBudget;
    
    return matchesSearch && matchesType && matchesBudget;
  });
  
  displayResults(filteredDestinations);
}

function displayResults(destinations) {
  if (destinations.length === 0) {
    searchResults.innerHTML = '<p style="text-align: center; color: #B0E0E6; grid-column: 1 / -1;">Напрямки не знайдено. Спробуйте інші критерії пошуку.</p>';
    return;
  }
  
  searchResults.innerHTML = destinations.map(destination => `
    <div class="destination-card" onclick="selectDestination('${destination.name}')">
      <h3>${destination.name}</h3>
      <p>${destination.description}</p>
      <div class="destination-info">
        <span class="price">${destination.price}</span>
        <span class="rating">★ ${destination.rating}</span>
      </div>
    </div>
  `).join('');
}

function selectDestination(destinationName) {
  alert(`Ви обрали напрямок: ${destinationName}`);
  // Тут можна додати логіку для переходу до детальної сторінки напрямку
}

// Event listeners
if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    filterDestinations();
  });
}

if (searchInput) {
  searchInput.addEventListener('input', filterDestinations);
}

if (travelTypeSelect) {
  travelTypeSelect.addEventListener('change', filterDestinations);
}

if (budgetSelect) {
  budgetSelect.addEventListener('change', filterDestinations);
}

// Initialize with all destinations
if (searchResults) {
  displayResults(destinations);
}