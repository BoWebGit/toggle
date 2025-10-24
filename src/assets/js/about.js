// About section functionality (Про нас)
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animate team members
gsap.fromTo(".team__wrapper .items-circle span", {
  scale: 0,
  opacity: 0,
}, {
  scale: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
  stagger: {
    each: 0.1,
  }
});

// Animate team description
gsap.fromTo("#about .team__wrapper p", {
  opacity: 0,
  y: 50,
}, {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: "#about",
    start: "top 60%",
    end: "top 20%",
    scrub: true,
  }
});

// Animate team text
gsap.fromTo("#about p:last-child", {
  opacity: 0,
  y: 30,
}, {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: "#about",
    start: "top 40%",
    end: "top 10%",
    scrub: true,
  }
});

// Add hover effects to team members
const teamMembers = document.querySelectorAll('.team__wrapper .items-circle span');
teamMembers.forEach(member => {
  member.addEventListener('mouseenter', () => {
    gsap.to(member, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
  
  member.addEventListener('mouseleave', () => {
    gsap.to(member, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});