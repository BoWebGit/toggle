// Tours functionality
import { gsap } from "gsap";

export class ToursManager {
  constructor() {
    this.tours = [
      {
        id: 1,
        title: 'Європейський тур',
        description: '7 країн за 14 днів',
        duration: 14,
        countries: ['Франція', 'Італія', 'Іспанія', 'Німеччина', 'Австрія', 'Швейцарія', 'Чехія'],
        price: 999,
        oldPrice: 1299,
        features: ['✈️ Авіаперельоти', '🏨 Готелі 4*', '🍽️ Сніданки', '🚌 Трансфери'],
        image: 'europe-tour.jpg',
        rating: 4.8,
        available: true
      },
      {
        id: 2,
        title: 'Азійський тур',
        description: 'Таїланд + В\'єтнам за 12 днів',
        duration: 12,
        countries: ['Таїланд', 'В\'єтнам'],
        price: 1199,
        oldPrice: 1599,
        features: ['✈️ Авіаперельоти', '🏨 Готелі 5*', '🍽️ Повний пансіон', '🏖️ Пляжний відпочинок'],
        image: 'asia-tour.jpg',
        rating: 4.9,
        available: true
      },
      {
        id: 3,
        title: 'Скандинавський тур',
        description: 'Норвегія + Швеція + Данія за 10 днів',
        duration: 10,
        countries: ['Норвегія', 'Швеція', 'Данія'],
        price: 1399,
        oldPrice: 1799,
        features: ['✈️ Авіаперельоти', '🏨 Готелі 4*', '🍽️ Сніданки', '🚢 Круїз фіордами'],
        image: 'scandinavia-tour.jpg',
        rating: 4.7,
        available: false
      }
    ];

    this.currentTourIndex = 0;
    this.init();
  }

  init() {
    this.setupTourSlider();
    this.setupBookingButtons();
    this.setupTourFilters();
  }

  setupTourSlider() {
    const tourCards = document.querySelectorAll('.tour-card');
    const prevBtn = document.querySelector('.tour-prev');
    const nextBtn = document.querySelector('.tour-next');

    // Auto-rotate tours
    this.startAutoRotation();

    // Manual navigation
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.previousTour();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.nextTour();
      });
    }

    // Touch/swipe support
    this.setupTouchNavigation();
  }

  startAutoRotation() {
    this.rotationInterval = setInterval(() => {
      this.nextTour();
    }, 5000); // Change tour every 5 seconds
  }

  stopAutoRotation() {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
    }
  }

  nextTour() {
    const tourCards = document.querySelectorAll('.tour-card');
    const currentCard = tourCards[this.currentTourIndex];
    
    this.currentTourIndex = (this.currentTourIndex + 1) % this.tours.length;
    const nextCard = tourCards[this.currentTourIndex];

    this.animateTourTransition(currentCard, nextCard);
  }

  previousTour() {
    const tourCards = document.querySelectorAll('.tour-card');
    const currentCard = tourCards[this.currentTourIndex];
    
    this.currentTourIndex = this.currentTourIndex === 0 ? this.tours.length - 1 : this.currentTourIndex - 1;
    const prevCard = tourCards[this.currentTourIndex];

    this.animateTourTransition(currentCard, prevCard);
  }

  animateTourTransition(fromCard, toCard) {
    // Remove active class from all cards
    document.querySelectorAll('.tour-card').forEach(card => {
      card.classList.remove('active');
    });

    // Add active class to new card
    toCard.classList.add('active');

    // Animate transition
    gsap.fromTo(toCard, {
      x: 100,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    });
  }

  setupTouchNavigation() {
    const slider = document.querySelector('.tours__slider');
    if (!slider) return;

    let startX = 0;
    let endX = 0;

    slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      this.stopAutoRotation();
    });

    slider.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          this.nextTour();
        } else {
          this.previousTour();
        }
      }

      this.startAutoRotation();
    });
  }

  setupBookingButtons() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('book-tour-btn') || 
          e.target.closest('.book-tour-btn')) {
        const tourCard = e.target.closest('.tour-card');
        const tourIndex = Array.from(document.querySelectorAll('.tour-card')).indexOf(tourCard);
        const tour = this.tours[tourIndex];
        
        if (tour && tour.available) {
          this.openBookingModal(tour);
        } else {
          this.showUnavailableMessage();
        }
      }
    });
  }

  setupTourFilters() {
    const durationFilter = document.querySelector('.duration-filter');
    const priceFilter = document.querySelector('.tour-price-filter');

    if (durationFilter) {
      durationFilter.addEventListener('change', (e) => {
        this.filterByDuration(e.target.value);
      });
    }

    if (priceFilter) {
      priceFilter.addEventListener('change', (e) => {
        this.filterByPrice(e.target.value);
      });
    }
  }

  filterByDuration(maxDuration) {
    const filteredTours = maxDuration === 'all' 
      ? this.tours 
      : this.tours.filter(tour => tour.duration <= parseInt(maxDuration));
    
    this.displayFilteredTours(filteredTours);
  }

  filterByPrice(maxPrice) {
    const filteredTours = maxPrice === 'all'
      ? this.tours
      : this.tours.filter(tour => tour.price <= parseInt(maxPrice));
    
    this.displayFilteredTours(filteredTours);
  }

  displayFilteredTours(tours) {
    const tourCards = document.querySelectorAll('.tour-card');
    
    tourCards.forEach((card, index) => {
      const tour = this.tours[index];
      const isVisible = tours.includes(tour);
      
      gsap.to(card, {
        opacity: isVisible ? 1 : 0.3,
        scale: isVisible ? 1 : 0.95,
        duration: 0.3
      });
    });
  }

  openBookingModal(tour) {
    const modal = this.createBookingModal(tour);
    document.body.appendChild(modal);
    
    gsap.fromTo(modal, {
      opacity: 0,
      scale: 0.8
    }, {
      opacity: 1,
      scale: 1,
      duration: 0.3
    });
  }

  createBookingModal(tour) {
    const modal = document.createElement('div');
    modal.className = 'booking-modal';
    modal.innerHTML = `
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <button class="modal-close">&times;</button>
        <div class="booking-content">
          <h2>Бронювання туру</h2>
          <div class="tour-summary">
            <h3>${tour.title}</h3>
            <p>${tour.description}</p>
            <div class="tour-details">
              <span class="duration">Тривалість: ${tour.duration} днів</span>
              <span class="countries">Країни: ${tour.countries.join(', ')}</span>
            </div>
            <div class="price-info">
              ${tour.oldPrice ? `<span class="old-price">€${tour.oldPrice}</span>` : ''}
              <span class="current-price">€${tour.price}</span>
            </div>
          </div>
          
          <form class="booking-form">
            <div class="form-row">
              <div class="form-group">
                <label>Ім'я</label>
                <input type="text" name="firstName" required>
              </div>
              <div class="form-group">
                <label>Прізвище</label>
                <input type="text" name="lastName" required>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" required>
              </div>
              <div class="form-group">
                <label>Телефон</label>
                <input type="tel" name="phone" required>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label>Дата початку</label>
                <input type="date" name="startDate" required>
              </div>
              <div class="form-group">
                <label>Кількість осіб</label>
                <select name="travelers" required>
                  <option value="1">1 особа</option>
                  <option value="2">2 особи</option>
                  <option value="3">3 особи</option>
                  <option value="4">4 особи</option>
                  <option value="5+">5+ осіб</option>
                </select>
              </div>
            </div>
            
            <div class="form-group">
              <label>Додаткові побажання</label>
              <textarea name="comments" rows="3"></textarea>
            </div>
            
            <button type="submit" class="submit-booking-btn">
              Забронювати тур
            </button>
          </form>
        </div>
      </div>
    `;

    // Add event listeners
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    const form = modal.querySelector('.booking-form');

    [closeBtn, overlay].forEach(element => {
      element.addEventListener('click', () => {
        this.closeModal(modal);
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.submitBooking(form, tour, modal);
    });

    return modal;
  }

  closeModal(modal) {
    gsap.to(modal, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      onComplete: () => {
        document.body.removeChild(modal);
      }
    });
  }

  submitBooking(form, tour, modal) {
    const formData = new FormData(form);
    const bookingData = {
      tour: tour,
      customer: Object.fromEntries(formData)
    };

    // Simulate booking submission
    console.log('Бронювання відправлено:', bookingData);
    
    // Show success message
    this.showBookingSuccess(modal);
  }

  showBookingSuccess(modal) {
    const content = modal.querySelector('.booking-content');
    content.innerHTML = `
      <div class="booking-success">
        <div class="success-icon">✓</div>
        <h2>Бронювання успішне!</h2>
        <p>Дякуємо за ваше бронювання. Ми зв'яжемося з вами найближчим часом для підтвердження деталей.</p>
        <button class="close-success-btn">Закрити</button>
      </div>
    `;

    const closeBtn = content.querySelector('.close-success-btn');
    closeBtn.addEventListener('click', () => {
      this.closeModal(modal);
    });
  }

  showUnavailableMessage() {
    const message = document.createElement('div');
    message.className = 'unavailable-message';
    message.innerHTML = `
      <div class="message-content">
        <p>На жаль, цей тур наразі недоступний для бронювання.</p>
        <button class="close-message-btn">Зрозуміло</button>
      </div>
    `;

    document.body.appendChild(message);

    gsap.fromTo(message, {
      opacity: 0,
      y: -50
    }, {
      opacity: 1,
      y: 0,
      duration: 0.3
    });

    const closeBtn = message.querySelector('.close-message-btn');
    closeBtn.addEventListener('click', () => {
      gsap.to(message, {
        opacity: 0,
        y: -50,
        duration: 0.3,
        onComplete: () => {
          document.body.removeChild(message);
        }
      });
    });

    // Auto-hide after 3 seconds
    setTimeout(() => {
      if (document.body.contains(message)) {
        closeBtn.click();
      }
    }, 3000);
  }
}

// Initialize tours manager
document.addEventListener('DOMContentLoaded', () => {
  new ToursManager();
});