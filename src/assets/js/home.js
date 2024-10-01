import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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