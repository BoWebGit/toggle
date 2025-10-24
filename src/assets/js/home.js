import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animate hero elements
gsap.fromTo("#home .home__block h1", {
  y: 100,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  duration: 1.5,
  ease: "power3.out"
});

gsap.fromTo("#home .home__block h3", {
  y: 50,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  duration: 1.2,
  delay: 0.3,
  ease: "power3.out"
});

gsap.fromTo("#home .home__block .btn", {
  y: 30,
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  duration: 1,
  delay: 0.6,
  ease: "power3.out"
});

gsap.to("#home .home__block", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#home", 
      start: "top 0%",   
      end: "top -45%",     
      scrub: true,        
    }
});

gsap.matchMedia().add("(min-width: 501px)", () => {
  gsap.to(".site-header .logo", {
    y: -100,
    scrollTrigger: {
      trigger: "#home", 
      start: "top 0%",   
      end: "top -45%",      
      scrub: true,         
    }
  });
});

gsap.to("#home .home__scroll-down", {
    opacity: 0,
    scrollTrigger: {
    trigger: "#home", 
    start: "top 0%",   
    end: "top -10%",      
    scrub: true, 
    once: true        
    }
});