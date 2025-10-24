// Contact section functionality
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animate contact elements
gsap.fromTo(".careers__wrapper", {
  y: 50,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".careers__step-one",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  }
});

// Email copy functionality
const copyButton = document.getElementById('copy-button');
const emailText = document.getElementById('email-text');

if (copyButton && emailText) {
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(emailText.textContent);
      
      // Visual feedback
      const originalText = copyButton.textContent;
      copyButton.textContent = 'Скопійовано!';
      copyButton.style.background = '#4CAF50';
      
      setTimeout(() => {
        copyButton.textContent = originalText;
        copyButton.style.background = '';
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  });
}

// Contact form validation (if you add a form later)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Export for potential use
export { validateEmail };