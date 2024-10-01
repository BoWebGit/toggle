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


gsap.fromTo("#careers .careers__step-one .careers__wrapper .decor", {
  opacity: 0,
}, {
  opacity: 1,
  scrollTrigger: {
    trigger: "#careers",
    start: "top -80%",
    end: "top -130%",
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
      start: "top -120%",
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
      start: "top -120%",
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
      start: "top -130%",
      end: "top -180%",
      scrub: true,
    }
});

gsap.fromTo("#careers .careers__step-one .careers__wrapper a", {
    opacity: 0,
    scale: 0.6,
  }, {
    opacity: 1,
    scale: 1.1,
    scrollTrigger: {
      trigger: "#careers",
      start: "top -130%",
      end: "top -170%",
      scrub: true,
    }
});

gsap.fromTo("#careers .careers__step-one .careers__wrapper a", {
  opacity: 1,
  scale: 1.1,
}, {
  opacity: 1,
  scale: 1,
  scrollTrigger: {
    trigger: "#careers",
    start: "top -170.1%",
    end: "top -180%",
    scrub: true,
  },
  immediateRender: false
});

gsap.to("#careers .careers__step-one .careers__wrapper", {
    top: "-100vh",
    scrollTrigger: {
      trigger: "#careers",
      start: "top -200%",
      end: "top -310%",
      scrub: true,
    }
});

gsap.fromTo("#careers .lines", {
  top: "100%",
}, {
  top: "0",
  scrollTrigger: {
    trigger: "#careers",
    start: "top -200%",
    end: "top -310%",
    scrub: true,
  },
  immediateRender: false
});



gsap.fromTo("#careers .light img", {
    y: "100vh",
  }, {
    y: 0,
    scrollTrigger: {
      trigger: "#careers",
      start: "top -200%",
      end: "top -310%",
      scrub: true,
    }
});


gsap.fromTo("#careers .careers__step-two", {
  y: "100vh",
  x: '-50%',
  left: "50%",
}, {
  y: 0,
  x: '-50%',
  left: "50%",
  scrollTrigger: {
    trigger: "#careers",
    start: "top -200%",
    end: "top -310%",
    scrub: true,
  }
});

gsap.fromTo("#careers .careers__step-two p", {
  x: '20%',
}, {
  x: '0%',
  scrollTrigger: {
    trigger: "#careers",
    start: "top -200%",
    end: "top -310%",
    scrub: true,
  }
});


gsap.fromTo("#careers .light img", {
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

gsap.fromTo("#careers .lines", {
  top: "0",
}, {
  top: "-100%",
  scrollTrigger: {
    trigger: "#careers",
    start: "top -410%",
    end: "top -500%",
    scrub: true,
  },
  immediateRender: false
});