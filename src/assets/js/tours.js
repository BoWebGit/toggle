import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Tours section animations
gsap.to("#tours .tours__screens", {
    opacity: 1,
    scrollTrigger: {
        trigger: "#tours", 
        start: "top 20%",   
        end: "top -20%",      
        scrub: true,        
    }
});

// Tours screen animations
gsap.fromTo("#tours .tours__screen", {
    scale: 0.8,
    opacity: 0.5
}, {
    scale: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: "#tours", 
        start: "top 30%",   
        end: "top -30%",      
        scrub: true,        
    }
});

// Active tour screen highlight
gsap.to("#tours .tours__screen.active", {
    scale: 1.1,
    scrollTrigger: {
        trigger: "#tours", 
        start: "top 40%",   
        end: "top -40%",      
        scrub: true,        
    }
});

// Tours text animation
gsap.fromTo("#tours .tours_step-one p", {
    y: 50,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: "#tours", 
        start: "top 60%",   
        end: "top 40%",      
        scrub: true,        
    }
});