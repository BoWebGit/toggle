import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#team .team__wrapper > p", {
    opacity: 0,
    scale: 0,
  }, {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: "#team",
      start: "top 0%",
      end: "top -120%",
      scrub: true,
    }
});

gsap.fromTo("#team .col > p", {
    opacity: 0,
    y: 100,
  }, {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: "#team",
      start: "top 0%",
      end: "top -120%",
      scrub: true,
    }
});

const teamCells = gsap.utils.toArray("#team .team__wrapper span");

gsap.fromTo(teamCells, {
    opacity: 0,
    scale: 0,
  }, {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
        trigger: "#team",
        start: "top 0%",
        end: "top -100%",
      scrub: true,
    },
    stagger: {
      each: 0.3,
    }
});

gsap.fromTo("#team .team__wrapper > p", {
    opacity: 1,
    scale: 1,
  }, {
    opacity: 0,
    scale: 0,
    scrollTrigger: {
      trigger: "#team",
      start: "top -180%",
      end: "top -260%",
      scrub: true,
    },
    immediateRender: false
});


gsap.fromTo("#team .col > p", {
    opacity: 1,
    y: 0,
  }, {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: "#team",
      start: "top -180%",
      end: "top -260%",
      scrub: true,
    },
    immediateRender: false
});  


gsap.fromTo("#products .products__galaxy", {
    opacity: 1,
    scale: 1,
  }, {
    opacity: 0,
    scale: 0,
    scrollTrigger: {
      trigger: "#team",
      start: "top -230%",
      end: "top -280%",
      scrub: true,
    },
    immediateRender: false
});

gsap.fromTo(teamCells, {
  scale: 1,
}, {
  scale: 0,
  x: 50,
  y: 50,
  scrollTrigger: {
      trigger: "#team",
      start: "top -180%",
      end: "top -260%",
    scrub: true,
  },
  stagger: {
    each: 0.2,
  }
});