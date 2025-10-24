// Contact form and communication functionality
import { gsap } from "gsap";

export class ContactManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupContactForm();
    this.setupEmailCopy();
    this.setupPhoneClick();
    this.setupSocialLinks();
    this.setupChatWidget();
  }

  setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmission(contactForm);
      });

      // Real-time validation
      const inputs = contactForm.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('blur', () => {
          this.validateField(input);
        });

        input.addEventListener('input', () => {
          this.clearFieldError(input);
        });
      });
    }
  }

  handleFormSubmission(form) {
    // Show loading state
    this.showFormLoading(form);

    // Collect form data
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      tourType: formData.get('tour-type'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    };

    // Validate data
    const validation = this.validateFormData(data);
    if (!validation.isValid) {
      this.showFormErrors(form, validation.errors);
      this.hideFormLoading(form);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      this.submitContactForm(data, form);
    }, 1500);
  }

  validateFormData(data) {
    const errors = {};
    let isValid = true;

    // Name validation
    if (!data.name || data.name.trim().length < 2) {
      errors.name = 'Ім\'я повинно містити принаймні 2 символи';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = 'Введіть коректну електронну адресу';
      isValid = false;
    }

    // Phone validation (optional but if provided should be valid)
    if (data.phone) {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(data.phone)) {
        errors.phone = 'Введіть коректний номер телефону';
        isValid = false;
      }
    }

    // Message validation
    if (!data.message || data.message.trim().length < 10) {
      errors.message = 'Повідомлення повинно містити принаймні 10 символів';
      isValid = false;
    }

    return { isValid, errors };
  }

  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    switch (field.type) {
      case 'text':
        if (field.name === 'name' && value.length < 2) {
          isValid = false;
          errorMessage = 'Ім\'я повинно містити принаймні 2 символи';
        }
        break;
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
          isValid = false;
          errorMessage = 'Введіть коректну електронну адресу';
        }
        break;
      
      case 'tel':
        if (value) {
          const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
          if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Введіть коректний номер телефону';
          }
        }
        break;
    }

    if (field.tagName === 'TEXTAREA' && field.name === 'message') {
      if (value.length > 0 && value.length < 10) {
        isValid = false;
        errorMessage = 'Повідомлення повинно містити принаймні 10 символів';
      }
    }

    if (!isValid) {
      this.showFieldError(field, errorMessage);
    } else {
      this.clearFieldError(field);
    }

    return isValid;
  }

  showFieldError(field, message) {
    const formGroup = field.closest('.form-group');
    if (!formGroup) return;

    // Remove existing error
    const existingError = formGroup.querySelector('.field-error');
    if (existingError) {
      existingError.remove();
    }

    // Add error class
    formGroup.classList.add('has-error');
    field.classList.add('error');

    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    formGroup.appendChild(errorDiv);

    // Animate error appearance
    gsap.fromTo(errorDiv, {
      opacity: 0,
      y: -10
    }, {
      opacity: 1,
      y: 0,
      duration: 0.3
    });
  }

  clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    if (!formGroup) return;

    formGroup.classList.remove('has-error');
    field.classList.remove('error');

    const errorDiv = formGroup.querySelector('.field-error');
    if (errorDiv) {
      gsap.to(errorDiv, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        onComplete: () => {
          errorDiv.remove();
        }
      });
    }
  }

  showFormErrors(form, errors) {
    Object.keys(errors).forEach(fieldName => {
      const field = form.querySelector(`[name="${fieldName}"]`);
      if (field) {
        this.showFieldError(field, errors[fieldName]);
      }
    });

    // Scroll to first error
    const firstError = form.querySelector('.has-error');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  showFormLoading(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="loading-spinner"></span>
        Відправляємо...
      `;
    }
  }

  hideFormLoading(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Відправити заявку</span>';
    }
  }

  submitContactForm(data, form) {
    // Simulate successful submission
    console.log('Contact form submitted:', data);

    // Hide loading
    this.hideFormLoading(form);

    // Show success message
    this.showFormSuccess(form);

    // Send to analytics/tracking
    this.trackFormSubmission(data);
  }

  showFormSuccess(form) {
    const formContainer = form.parentElement;
    
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.innerHTML = `
      <div class="success-icon">✓</div>
      <h3>Дякуємо за звернення!</h3>
      <p>Ваше повідомлення успішно відправлено. Ми зв'яжемося з вами найближчим часом.</p>
      <button class="btn-secondary" onclick="this.parentElement.style.display='none'; this.parentElement.nextElementSibling.style.display='block';">
        Відправити ще одне повідомлення
      </button>
    `;

    // Hide form and show success
    form.style.display = 'none';
    formContainer.appendChild(successDiv);

    // Animate success message
    gsap.fromTo(successDiv, {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5
    });

    // Reset form after delay
    setTimeout(() => {
      form.reset();
    }, 1000);
  }

  setupEmailCopy() {
    const copyButton = document.getElementById('copy-button');
    const emailText = document.getElementById('email-text');
    
    if (copyButton && emailText) {
      copyButton.addEventListener('click', () => {
        const email = emailText.textContent.trim();
        
        navigator.clipboard.writeText(email).then(() => {
          this.showCopySuccess(copyButton);
        }).catch(() => {
          // Fallback for older browsers
          this.fallbackCopyText(email);
          this.showCopySuccess(copyButton);
        });
      });
    }
  }

  fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback copy failed:', err);
    }
    
    document.body.removeChild(textArea);
  }

  showCopySuccess(button) {
    const originalText = button.textContent;
    
    button.textContent = 'Скопійовано!';
    button.classList.add('copied');
    
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('copied');
    }, 2000);
  }

  setupPhoneClick() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.trackPhoneClick(link.href);
      });
    });
  }

  setupSocialLinks() {
    const socialLinks = document.querySelectorAll('.footer__nav-top a, .social-links a');
    
    socialLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const platform = this.getSocialPlatform(link.href);
        this.trackSocialClick(platform);
      });
    });
  }

  getSocialPlatform(url) {
    if (url.includes('facebook')) return 'Facebook';
    if (url.includes('instagram')) return 'Instagram';
    if (url.includes('telegram')) return 'Telegram';
    if (url.includes('twitter')) return 'Twitter';
    if (url.includes('linkedin')) return 'LinkedIn';
    return 'Unknown';
  }

  setupChatWidget() {
    // Create floating chat button
    const chatButton = document.createElement('div');
    chatButton.className = 'chat-widget';
    chatButton.innerHTML = `
      <button class="chat-button" title="Онлайн чат">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2"/>
        </svg>
        <span class="chat-notification">1</span>
      </button>
    `;

    document.body.appendChild(chatButton);

    // Chat functionality
    const chatBtn = chatButton.querySelector('.chat-button');
    chatBtn.addEventListener('click', () => {
      this.openChatWidget();
    });

    // Animate chat button entrance
    gsap.fromTo(chatButton, {
      scale: 0,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      delay: 2,
      ease: "back.out(1.7)"
    });
  }

  openChatWidget() {
    // Create chat modal
    const chatModal = document.createElement('div');
    chatModal.className = 'chat-modal';
    chatModal.innerHTML = `
      <div class="chat-overlay"></div>
      <div class="chat-container">
        <div class="chat-header">
          <h3>Онлайн підтримка</h3>
          <button class="chat-close">&times;</button>
        </div>
        <div class="chat-messages">
          <div class="message bot-message">
            <div class="message-content">
              Привіт! Я можу допомогти вам з питаннями про подорожі. Як вас звати?
            </div>
            <div class="message-time">${new Date().toLocaleTimeString('uk-UA', {hour: '2-digit', minute: '2-digit'})}</div>
          </div>
        </div>
        <div class="chat-input">
          <input type="text" placeholder="Введіть повідомлення..." class="chat-text-input">
          <button class="chat-send-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18 2L9 11L4 6" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(chatModal);

    // Setup chat events
    this.setupChatEvents(chatModal);

    // Animate chat appearance
    gsap.fromTo(chatModal, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 0.3
    });

    gsap.fromTo(chatModal.querySelector('.chat-container'), {
      scale: 0.8,
      y: 50
    }, {
      scale: 1,
      y: 0,
      duration: 0.4,
      ease: "back.out(1.7)"
    });
  }

  setupChatEvents(modal) {
    const closeBtn = modal.querySelector('.chat-close');
    const overlay = modal.querySelector('.chat-overlay');
    const textInput = modal.querySelector('.chat-text-input');
    const sendBtn = modal.querySelector('.chat-send-btn');
    const messagesContainer = modal.querySelector('.chat-messages');

    // Close chat
    [closeBtn, overlay].forEach(element => {
      element.addEventListener('click', () => {
        this.closeChatWidget(modal);
      });
    });

    // Send message
    const sendMessage = () => {
      const message = textInput.value.trim();
      if (message) {
        this.addChatMessage(messagesContainer, message, 'user');
        textInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
          const botResponse = this.getBotResponse(message);
          this.addChatMessage(messagesContainer, botResponse, 'bot');
        }, 1000);
      }
    };

    sendBtn.addEventListener('click', sendMessage);
    textInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }

  addChatMessage(container, text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `
      <div class="message-content">${text}</div>
      <div class="message-time">${new Date().toLocaleTimeString('uk-UA', {hour: '2-digit', minute: '2-digit'})}</div>
    `;

    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;

    // Animate message appearance
    gsap.fromTo(messageDiv, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.3
    });
  }

  getBotResponse(userMessage) {
    const responses = {
      'привіт': 'Привіт! Радий вас бачити. Чим можу допомогти?',
      'ціна': 'Ціни на наші тури починаються від €299. Хочете дізнатися про конкретний напрямок?',
      'бронювання': 'Для бронювання ви можете скористатися нашою формою на сайті або зателефонувати за номером +38 (044) 123-45-67',
      'контакти': 'Наші контакти:\n📞 +38 (044) 123-45-67\n📧 info@travelexplorer.ua\n📍 вул. Хрещатик, 1, Київ',
      'default': 'Дякую за повідомлення! Наш менеджер зв\'яжеться з вами найближчим часом. Можете також зателефонувати нам за номером +38 (044) 123-45-67'
    };

    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
      if (message.includes(key)) {
        return response;
      }
    }
    
    return responses.default;
  }

  closeChatWidget(modal) {
    gsap.to(modal, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        document.body.removeChild(modal);
      }
    });
  }

  trackFormSubmission(data) {
    // Analytics tracking
    console.log('Form submission tracked:', {
      event: 'contact_form_submit',
      tourType: data.tourType,
      timestamp: data.timestamp
    });
  }

  trackPhoneClick(phoneNumber) {
    console.log('Phone click tracked:', phoneNumber);
  }

  trackSocialClick(platform) {
    console.log('Social click tracked:', platform);
  }
}

// Initialize contact manager
document.addEventListener('DOMContentLoaded', () => {
  new ContactManager();
});