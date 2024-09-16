import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#careers .careers__step-one .careers__wrapper", {
    opacity: 0,
    scale: '0.6',
  }, {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: "#careers",
      start: "top 0%",
      end: "top -120%",
      scrub: true,
    }
});

gsap.fromTo("#careers .careers__step-one .careers__wrapper img", {
    opacity: 0,
    y: 10
  }, {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#careers",
      start: "top -100%",
      end: "top -160%",
      scrub: true,
    }
});

gsap.fromTo("#careers .careers__step-one .careers__wrapper h2", {
    opacity: 0,
    y: 10
  }, {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#careers",
      start: "top -100%",
      end: "top -160%",
      scrub: true,
    }
});

gsap.fromTo("#careers .careers__step-one .careers__wrapper p", {
    opacity: 0,
    y: 10
  }, {
    opacity: .5,
    y: 0,
    scrollTrigger: {
      trigger: "#careers",
      start: "top -120%",
      end: "top -180%",
      scrub: true,
    }
});

gsap.fromTo("#careers .careers__step-one .careers__wrapper a", {
    scale: 0,
  }, {
    scale: 1,
    scrollTrigger: {
      trigger: "#careers",
      start: "top -120%",
      end: "top -180%",
      scrub: true,
    }
});

gsap.fromTo("#careers .careers__step-one .careers__wrapper", {
    y: 0,
  }, {
    y: "-100vh",
    scrollTrigger: {
      trigger: "#careers",
      start: "top -240%",
      end: "top -350%",
      scrub: true,
    }
});



gsap.fromTo("#careers .light", {
    y: "100vh",
  }, {
    y: 0,
    scrollTrigger: {
      trigger: "#careers",
      start: "top -240%",
      end: "top -350%",
      scrub: true,
    }
});


gsap.fromTo("#careers .careers__step-two", {
  y: "100vh",
}, {
  y: 0,
  scrollTrigger: {
    trigger: "#careers",
    start: "top -240%",
    end: "top -350%",
    scrub: true,
  }
});


gsap.fromTo("#careers .light", {
  y: 0,
}, {
  y: "-100vh",
  scrollTrigger: {
    trigger: "#careers",
    start: "top -410%",
    end: "top -500%",
    scrub: true,
  },
  immediateRender: false
});


gsap.fromTo("#careers .careers__step-two", {
y: 0,
}, {
y: "-100vh",
scrollTrigger: {
  trigger: "#careers",
  start: "top -410%",
  end: "top -500%",
  scrub: true,
},
immediateRender: false
});