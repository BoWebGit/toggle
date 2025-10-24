// Booking system functionality
import { gsap } from "gsap";

export class BookingSystem {
  constructor() {
    this.bookings = [];
    this.currentStep = 1;
    this.totalSteps = 4;
    
    this.init();
  }

  init() {
    this.setupBookingFlow();
    this.setupDateValidation();
    this.setupPriceCalculator();
  }

  setupBookingFlow() {
    const bookingBtns = document.querySelectorAll('[href="#booking"], .book-btn, .header_btn');
    
    bookingBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openBookingModal();
      });
    });
  }

  openBookingModal() {
    const modal = this.createBookingModal();
    document.body.appendChild(modal);
    
    gsap.fromTo(modal, {
      opacity: 0,
      scale: 0.9
    }, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  }

  createBookingModal() {
    const modal = document.createElement('div');
    modal.className = 'booking-modal-system';
    modal.innerHTML = `
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <button class="modal-close">&times;</button>
        
        <div class="booking-header">
          <h2>Бронювання подорожі</h2>
          <div class="progress-bar">
            <div class="progress-step active" data-step="1">
              <span class="step-number">1</span>
              <span class="step-label">Напрямок</span>
            </div>
            <div class="progress-step" data-step="2">
              <span class="step-number">2</span>
              <span class="step-label">Дати</span>
            </div>
            <div class="progress-step" data-step="3">
              <span class="step-number">3</span>
              <span class="step-label">Деталі</span>
            </div>
            <div class="progress-step" data-step="4">
              <span class="step-number">4</span>
              <span class="step-label">Підтвердження</span>
            </div>
          </div>
        </div>

        <div class="booking-content">
          ${this.createStep1()}
        </div>

        <div class="booking-footer">
          <button class="btn-secondary" id="prevStep" style="display: none;">Назад</button>
          <button class="btn-primary" id="nextStep">Далі</button>
        </div>
      </div>
    `;

    this.setupModalEvents(modal);
    return modal;
  }

  setupModalEvents(modal) {
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    const nextBtn = modal.querySelector('#nextStep');
    const prevBtn = modal.querySelector('#prevStep');

    // Close modal
    [closeBtn, overlay].forEach(element => {
      element.addEventListener('click', () => {
        this.closeModal(modal);
      });
    });

    // Navigation
    nextBtn.addEventListener('click', () => {
      this.nextStep(modal);
    });

    prevBtn.addEventListener('click', () => {
      this.prevStep(modal);
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal(modal);
      }
    });
  }

  createStep1() {
    return `
      <div class="booking-step" data-step="1">
        <h3>Оберіть напрямок подорожі</h3>
        
        <div class="destination-search">
          <input type="text" id="destinationSearch" placeholder="Введіть назву міста або країни" class="search-input">
          <div class="search-results" id="searchResults"></div>
        </div>

        <div class="popular-destinations">
          <h4>Популярні напрямки:</h4>
          <div class="destination-chips">
            <button class="destination-chip" data-destination="Париж, Франція">Париж</button>
            <button class="destination-chip" data-destination="Токіо, Японія">Токіо</button>
            <button class="destination-chip" data-destination="Балі, Індонезія">Балі</button>
            <button class="destination-chip" data-destination="Рим, Італія">Рим</button>
            <button class="destination-chip" data-destination="Барселона, Іспанія">Барселона</button>
            <button class="destination-chip" data-destination="Нью-Йорк, США">Нью-Йорк</button>
          </div>
        </div>

        <div class="selected-destination" id="selectedDestination" style="display: none;">
          <h4>Обрано:</h4>
          <div class="destination-info">
            <span class="destination-name"></span>
            <button class="change-destination">Змінити</button>
          </div>
        </div>
      </div>
    `;
  }

  createStep2() {
    return `
      <div class="booking-step" data-step="2">
        <h3>Оберіть дати подорожі</h3>
        
        <div class="date-selection">
          <div class="date-group">
            <label for="checkIn">Дата початку</label>
            <input type="date" id="checkIn" class="date-input" required>
          </div>
          
          <div class="date-group">
            <label for="checkOut">Дата завершення</label>
            <input type="date" id="checkOut" class="date-input" required>
          </div>
        </div>

        <div class="duration-info" id="durationInfo" style="display: none;">
          <span class="duration-text"></span>
        </div>

        <div class="travelers-selection">
          <h4>Кількість мандрівників</h4>
          
          <div class="travelers-counter">
            <div class="counter-item">
              <span class="counter-label">Дорослі (18+)</span>
              <div class="counter-controls">
                <button type="button" class="counter-btn" data-action="decrease" data-target="adults">-</button>
                <span class="counter-value" id="adults">2</span>
                <button type="button" class="counter-btn" data-action="increase" data-target="adults">+</button>
              </div>
            </div>
            
            <div class="counter-item">
              <span class="counter-label">Діти (2-17)</span>
              <div class="counter-controls">
                <button type="button" class="counter-btn" data-action="decrease" data-target="children">-</button>
                <span class="counter-value" id="children">0</span>
                <button type="button" class="counter-btn" data-action="increase" data-target="children">+</button>
              </div>
            </div>
            
            <div class="counter-item">
              <span class="counter-label">Немовлята (0-2)</span>
              <div class="counter-controls">
                <button type="button" class="counter-btn" data-action="decrease" data-target="infants">-</button>
                <span class="counter-value" id="infants">0</span>
                <button type="button" class="counter-btn" data-action="increase" data-target="infants">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  createStep3() {
    return `
      <div class="booking-step" data-step="3">
        <h3>Деталі бронювання</h3>
        
        <div class="booking-options">
          <div class="option-group">
            <h4>Тип розміщення</h4>
            <div class="radio-group">
              <label class="radio-option">
                <input type="radio" name="accommodation" value="hotel" checked>
                <span class="radio-custom"></span>
                <span class="option-text">Готель</span>
              </label>
              <label class="radio-option">
                <input type="radio" name="accommodation" value="apartment">
                <span class="radio-custom"></span>
                <span class="option-text">Апартаменти</span>
              </label>
              <label class="radio-option">
                <input type="radio" name="accommodation" value="hostel">
                <span class="radio-custom"></span>
                <span class="option-text">Хостел</span>
              </label>
            </div>
          </div>

          <div class="option-group">
            <h4>Додаткові послуги</h4>
            <div class="checkbox-group">
              <label class="checkbox-option">
                <input type="checkbox" name="services" value="transfer">
                <span class="checkbox-custom"></span>
                <span class="option-text">Трансфер з/до аеропорту (+€50)</span>
              </label>
              <label class="checkbox-option">
                <input type="checkbox" name="services" value="insurance">
                <span class="checkbox-custom"></span>
                <span class="option-text">Туристична страховка (+€25)</span>
              </label>
              <label class="checkbox-option">
                <input type="checkbox" name="services" value="guide">
                <span class="checkbox-custom"></span>
                <span class="option-text">Персональний гід (+€100/день)</span>
              </label>
              <label class="checkbox-option">
                <input type="checkbox" name="services" value="meals">
                <span class="checkbox-custom"></span>
                <span class="option-text">Харчування (сніданок + вечеря) (+€40/день)</span>
              </label>
            </div>
          </div>
        </div>

        <div class="customer-info">
          <h4>Контактна інформація</h4>
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">Ім'я *</label>
              <input type="text" id="firstName" required>
            </div>
            <div class="form-group">
              <label for="lastName">Прізвище *</label>
              <input type="text" id="lastName" required>
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" required>
            </div>
            <div class="form-group">
              <label for="phone">Телефон *</label>
              <input type="tel" id="phone" required>
            </div>
          </div>

          <div class="form-group">
            <label for="specialRequests">Спеціальні побажання</label>
            <textarea id="specialRequests" rows="3" placeholder="Розкажіть про ваші особливі потреби або побажання..."></textarea>
          </div>
        </div>
      </div>
    `;
  }

  createStep4() {
    const bookingData = this.getBookingData();
    
    return `
      <div class="booking-step" data-step="4">
        <h3>Підтвердження бронювання</h3>
        
        <div class="booking-summary">
          <div class="summary-section">
            <h4>Деталі подорожі</h4>
            <div class="summary-item">
              <span class="label">Напрямок:</span>
              <span class="value">${bookingData.destination}</span>
            </div>
            <div class="summary-item">
              <span class="label">Дати:</span>
              <span class="value">${bookingData.checkIn} - ${bookingData.checkOut}</span>
            </div>
            <div class="summary-item">
              <span class="label">Тривалість:</span>
              <span class="value">${bookingData.duration} днів</span>
            </div>
            <div class="summary-item">
              <span class="label">Мандрівники:</span>
              <span class="value">${bookingData.travelers}</span>
            </div>
          </div>

          <div class="summary-section">
            <h4>Розміщення та послуги</h4>
            <div class="summary-item">
              <span class="label">Тип розміщення:</span>
              <span class="value">${bookingData.accommodation}</span>
            </div>
            ${bookingData.services.length > 0 ? `
              <div class="summary-item">
                <span class="label">Додаткові послуги:</span>
                <span class="value">${bookingData.services.join(', ')}</span>
              </div>
            ` : ''}
          </div>

          <div class="summary-section">
            <h4>Контактна інформація</h4>
            <div class="summary-item">
              <span class="label">Ім'я:</span>
              <span class="value">${bookingData.firstName} ${bookingData.lastName}</span>
            </div>
            <div class="summary-item">
              <span class="label">Email:</span>
              <span class="value">${bookingData.email}</span>
            </div>
            <div class="summary-item">
              <span class="label">Телефон:</span>
              <span class="value">${bookingData.phone}</span>
            </div>
          </div>

          <div class="price-breakdown">
            <h4>Вартість</h4>
            <div class="price-item">
              <span class="label">Базова вартість:</span>
              <span class="value">€${bookingData.basePrice}</span>
            </div>
            ${bookingData.additionalCosts.map(cost => `
              <div class="price-item">
                <span class="label">${cost.name}:</span>
                <span class="value">€${cost.amount}</span>
              </div>
            `).join('')}
            <div class="price-total">
              <span class="label">Загальна вартість:</span>
              <span class="value">€${bookingData.totalPrice}</span>
            </div>
          </div>
        </div>

        <div class="terms-agreement">
          <label class="checkbox-option">
            <input type="checkbox" id="agreeTerms" required>
            <span class="checkbox-custom"></span>
            <span class="option-text">Я погоджуюся з <a href="#" target="_blank">умовами користування</a> та <a href="#" target="_blank">політикою конфіденційності</a></span>
          </label>
        </div>
      </div>
    `;
  }

  nextStep(modal) {
    if (!this.validateCurrentStep()) {
      return;
    }

    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      this.updateStep(modal);
    } else {
      this.submitBooking(modal);
    }
  }

  prevStep(modal) {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.updateStep(modal);
    }
  }

  updateStep(modal) {
    const content = modal.querySelector('.booking-content');
    const nextBtn = modal.querySelector('#nextStep');
    const prevBtn = modal.querySelector('#prevStep');
    
    // Update progress bar
    modal.querySelectorAll('.progress-step').forEach((step, index) => {
      if (index + 1 <= this.currentStep) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    // Update content
    let stepContent = '';
    switch (this.currentStep) {
      case 1:
        stepContent = this.createStep1();
        break;
      case 2:
        stepContent = this.createStep2();
        break;
      case 3:
        stepContent = this.createStep3();
        break;
      case 4:
        stepContent = this.createStep4();
        break;
    }

    content.innerHTML = stepContent;
    
    // Update buttons
    prevBtn.style.display = this.currentStep > 1 ? 'block' : 'none';
    nextBtn.textContent = this.currentStep === this.totalSteps ? 'Забронювати' : 'Далі';

    // Setup step-specific functionality
    this.setupStepEvents(modal);

    // Animate transition
    gsap.fromTo(content, {
      opacity: 0,
      x: 50
    }, {
      opacity: 1,
      x: 0,
      duration: 0.3
    });
  }

  setupStepEvents(modal) {
    switch (this.currentStep) {
      case 1:
        this.setupDestinationSearch(modal);
        break;
      case 2:
        this.setupDateSelection(modal);
        this.setupTravelersCounter(modal);
        break;
      case 3:
        this.setupPriceCalculation(modal);
        break;
    }
  }

  setupDestinationSearch(modal) {
    const searchInput = modal.querySelector('#destinationSearch');
    const chips = modal.querySelectorAll('.destination-chip');
    
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const destination = chip.dataset.destination;
        this.selectDestination(destination, modal);
      });
    });

    searchInput.addEventListener('input', (e) => {
      this.searchDestinations(e.target.value, modal);
    });
  }

  selectDestination(destination, modal) {
    const selectedDiv = modal.querySelector('#selectedDestination');
    const nameSpan = selectedDiv.querySelector('.destination-name');
    
    nameSpan.textContent = destination;
    selectedDiv.style.display = 'block';
    
    // Store selection
    this.bookingData = this.bookingData || {};
    this.bookingData.destination = destination;
  }

  setupDateSelection(modal) {
    const checkIn = modal.querySelector('#checkIn');
    const checkOut = modal.querySelector('#checkOut');
    const durationInfo = modal.querySelector('#durationInfo');

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    checkIn.min = today;
    
    checkIn.addEventListener('change', () => {
      checkOut.min = checkIn.value;
      this.calculateDuration(modal);
    });

    checkOut.addEventListener('change', () => {
      this.calculateDuration(modal);
    });
  }

  calculateDuration(modal) {
    const checkIn = modal.querySelector('#checkIn');
    const checkOut = modal.querySelector('#checkOut');
    const durationInfo = modal.querySelector('#durationInfo');
    
    if (checkIn.value && checkOut.value) {
      const start = new Date(checkIn.value);
      const end = new Date(checkOut.value);
      const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      
      if (duration > 0) {
        durationInfo.style.display = 'block';
        durationInfo.querySelector('.duration-text').textContent = `Тривалість подорожі: ${duration} днів`;
      }
    }
  }

  setupTravelersCounter(modal) {
    const counterBtns = modal.querySelectorAll('.counter-btn');
    
    counterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        const target = btn.dataset.target;
        const counter = modal.querySelector(`#${target}`);
        let value = parseInt(counter.textContent);
        
        if (action === 'increase') {
          value++;
        } else if (action === 'decrease' && value > 0) {
          value--;
          
          // Ensure at least one adult
          if (target === 'adults' && value < 1) {
            value = 1;
          }
        }
        
        counter.textContent = value;
      });
    });
  }

  setupPriceCalculation(modal) {
    const serviceCheckboxes = modal.querySelectorAll('input[name="services"]');
    
    serviceCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        this.updatePricePreview(modal);
      });
    });
  }

  updatePricePreview(modal) {
    // This would calculate and display price preview
    // Implementation depends on pricing logic
  }

  validateCurrentStep() {
    switch (this.currentStep) {
      case 1:
        return this.bookingData && this.bookingData.destination;
      case 2:
        const checkIn = document.querySelector('#checkIn');
        const checkOut = document.querySelector('#checkOut');
        return checkIn.value && checkOut.value;
      case 3:
        const required = document.querySelectorAll('#firstName, #lastName, #email, #phone');
        return Array.from(required).every(field => field.value.trim());
      case 4:
        const agreeTerms = document.querySelector('#agreeTerms');
        return agreeTerms && agreeTerms.checked;
      default:
        return true;
    }
  }

  getBookingData() {
    // Collect all booking data from form
    return {
      destination: this.bookingData?.destination || 'Не обрано',
      checkIn: document.querySelector('#checkIn')?.value || '',
      checkOut: document.querySelector('#checkOut')?.value || '',
      duration: 7, // Calculate from dates
      travelers: '2 дорослих',
      accommodation: 'Готель',
      services: [],
      firstName: document.querySelector('#firstName')?.value || '',
      lastName: document.querySelector('#lastName')?.value || '',
      email: document.querySelector('#email')?.value || '',
      phone: document.querySelector('#phone')?.value || '',
      basePrice: 599,
      additionalCosts: [],
      totalPrice: 599
    };
  }

  submitBooking(modal) {
    const bookingData = this.getBookingData();
    
    // Simulate booking submission
    console.log('Бронювання відправлено:', bookingData);
    
    // Show success
    this.showBookingSuccess(modal);
  }

  showBookingSuccess(modal) {
    const content = modal.querySelector('.booking-content');
    const footer = modal.querySelector('.booking-footer');
    
    content.innerHTML = `
      <div class="booking-success">
        <div class="success-animation">
          <div class="success-icon">✓</div>
        </div>
        <h2>Бронювання успішне!</h2>
        <p>Дякуємо за ваше бронювання. Номер вашого бронювання: <strong>#TB${Date.now().toString().slice(-6)}</strong></p>
        <p>Ми надіслали підтвердження на вашу електронну пошту та зв'яжемося з вами найближчим часом.</p>
        
        <div class="next-steps">
          <h4>Наступні кроки:</h4>
          <ul>
            <li>Перевірте електронну пошту для отримання деталей</li>
            <li>Підготуйте необхідні документи</li>
            <li>Очікуйте на дзвінок нашого менеджера</li>
          </ul>
        </div>
      </div>
    `;
    
    footer.innerHTML = `
      <button class="btn-primary" onclick="this.closest('.booking-modal-system').querySelector('.modal-close').click()">
        Закрити
      </button>
    `;

    // Animate success
    gsap.fromTo('.success-icon', {
      scale: 0,
      rotation: -180
    }, {
      scale: 1,
      rotation: 0,
      duration: 0.6,
      ease: "back.out(1.7)"
    });
  }

  closeModal(modal) {
    gsap.to(modal, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      onComplete: () => {
        document.body.removeChild(modal);
        this.currentStep = 1; // Reset for next time
      }
    });
  }

  setupDateValidation() {
    // Additional date validation logic
  }

  setupPriceCalculator() {
    // Price calculation logic based on destination, dates, services
  }
}

// Initialize booking system
document.addEventListener('DOMContentLoaded', () => {
  new BookingSystem();
});