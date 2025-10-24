// Destinations functionality
import { gsap } from "gsap";

export class DestinationsManager {
  constructor() {
    this.destinations = [
      {
        id: 1,
        name: 'Париж',
        country: 'Франція',
        price: 299,
        image: 'paris.jpg',
        description: 'Місто кохання та романтики',
        rating: 4.8
      },
      {
        id: 2,
        name: 'Токіо',
        country: 'Японія', 
        price: 599,
        image: 'tokyo.jpg',
        description: 'Сучасний мегаполіс з давньою культурою',
        rating: 4.9
      },
      {
        id: 3,
        name: 'Балі',
        country: 'Індонезія',
        price: 399,
        image: 'bali.jpg',
        description: 'Тропічний рай з чудовими пляжами',
        rating: 4.7
      },
      {
        id: 4,
        name: 'Санторіні',
        country: 'Греція',
        price: 449,
        image: 'santorini.jpg',
        description: 'Романтичний острів з білими будинками',
        rating: 4.6
      }
    ];

    this.init();
  }

  init() {
    this.setupDestinationCards();
    this.setupFilters();
  }

  setupDestinationCards() {
    const cards = document.querySelectorAll('.destination-card');
    
    cards.forEach((card, index) => {
      // Add click handler for destination details
      card.addEventListener('click', () => {
        this.showDestinationDetails(this.destinations[index]);
      });

      // Add hover effects
      card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.destination-image img'), {
          scale: 1.1,
          duration: 0.3
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.destination-image img'), {
          scale: 1,
          duration: 0.3
        });
      });
    });
  }

  setupFilters() {
    // Price filter functionality
    const priceFilter = document.querySelector('.price-filter');
    if (priceFilter) {
      priceFilter.addEventListener('change', (e) => {
        this.filterByPrice(e.target.value);
      });
    }

    // Region filter
    const regionFilter = document.querySelector('.region-filter');
    if (regionFilter) {
      regionFilter.addEventListener('change', (e) => {
        this.filterByRegion(e.target.value);
      });
    }
  }

  filterByPrice(maxPrice) {
    const cards = document.querySelectorAll('.destination-card');
    
    cards.forEach((card, index) => {
      const destination = this.destinations[index];
      if (maxPrice === 'all' || destination.price <= parseInt(maxPrice)) {
        gsap.to(card, { opacity: 1, scale: 1, duration: 0.3 });
      } else {
        gsap.to(card, { opacity: 0.3, scale: 0.9, duration: 0.3 });
      }
    });
  }

  filterByRegion(region) {
    const cards = document.querySelectorAll('.destination-card');
    
    cards.forEach((card, index) => {
      const destination = this.destinations[index];
      const destinationRegion = this.getRegion(destination.country);
      
      if (region === 'all' || destinationRegion === region) {
        gsap.to(card, { opacity: 1, scale: 1, duration: 0.3 });
      } else {
        gsap.to(card, { opacity: 0.3, scale: 0.9, duration: 0.3 });
      }
    });
  }

  getRegion(country) {
    const regions = {
      'Франція': 'europe',
      'Греція': 'europe',
      'Японія': 'asia',
      'Індонезія': 'asia'
    };
    return regions[country] || 'other';
  }

  showDestinationDetails(destination) {
    // Create modal or navigate to destination page
    const modal = this.createDestinationModal(destination);
    document.body.appendChild(modal);
    
    // Animate modal appearance
    gsap.fromTo(modal, {
      opacity: 0,
      scale: 0.8
    }, {
      opacity: 1,
      scale: 1,
      duration: 0.3
    });
  }

  createDestinationModal(destination) {
    const modal = document.createElement('div');
    modal.className = 'destination-modal';
    modal.innerHTML = `
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <button class="modal-close">&times;</button>
        <div class="modal-image">
          <img src="./assets/images/destinations/${destination.image}" alt="${destination.name}">
        </div>
        <div class="modal-info">
          <h2>${destination.name}</h2>
          <p class="country">${destination.country}</p>
          <p class="description">${destination.description}</p>
          <div class="rating">
            <span class="stars">${'★'.repeat(Math.floor(destination.rating))}</span>
            <span class="rating-value">${destination.rating}</span>
          </div>
          <div class="price">від €${destination.price}</div>
          <button class="book-btn">Забронювати</button>
        </div>
      </div>
    `;

    // Add close functionality
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    [closeBtn, overlay].forEach(element => {
      element.addEventListener('click', () => {
        gsap.to(modal, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          onComplete: () => {
            document.body.removeChild(modal);
          }
        });
      });
    });

    return modal;
  }

  searchDestinations(query) {
    const results = this.destinations.filter(dest => 
      dest.name.toLowerCase().includes(query.toLowerCase()) ||
      dest.country.toLowerCase().includes(query.toLowerCase())
    );
    
    return results;
  }
}

// Initialize destinations manager
document.addEventListener('DOMContentLoaded', () => {
  new DestinationsManager();
});