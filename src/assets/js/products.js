import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#products .products_step-one", {
    opacity: 0,
    scale: 0,
  }, {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: "#products",
      start: "top 0%",
      end: "top -60%",
      scrub: true,
    }
});

gsap.fromTo("#products .products__galaxy", {
    opacity: 1,
    scale: 1.8,
    top: "250%",
  }, {
    opacity: 1,
    scale: 1.8,
    top: "135%",
    scrollTrigger: {
      trigger: "#products",
      start: "top -80%",
      end: "top -150%",
      scrub: true,
    }
});

gsap.matchMedia().add("(max-width: 500px)", () => {
  gsap.to("#products .products_step-one p > span:nth-child(1)", {
    top: "74px",
    scrollTrigger: {
      trigger: "#products",
      start: "top -150%",
      end: "top -200%",
      scrub: true,
    }
  });
});

gsap.matchMedia().add("(min-width: 501px)", () => {
  gsap.to("#products .products_step-one p > span:nth-child(1)", {
    x: '-50%',
    left: "50%",
    top: "74px",
    scrollTrigger: {
      trigger: "#products",
      start: "top -150%",
      end: "top -200%",
      scrub: true,
    }
  });
});

gsap.fromTo("#products .products_step-one p > span:nth-child(2)", {
  opacity: 1,
}, {
  opacity: 0,
  scrollTrigger: {
    trigger: "#products",
    start: "top -150%",
    end: "top -200%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#products .products_step-one p > span:nth-child(1)", {
  opacity: 1,
  scale: 1,
}, {
  opacity: .46,
  scale: 2.2,
  scrollTrigger: {
    trigger: "#products",
    start: "top -240%",
    end: "top -300%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#products .products_step-two .products__screens", {
  opacity: 0,
  scale: .7,
  y: "150%",
}, {
  opacity: .46,
  scale: .7,
  y: "60%",
  scrollTrigger: {
    trigger: "#products",
    start: "top -150%",
    end: "top -200%",
    scrub: true,
  }
});

gsap.fromTo("#products .products_step-two .products__screens", {
  opacity: .46,
  scale: .7,
  y: "60%",
}, {
  opacity: 1,
  scale: 1,
  y: "0%",
  scrollTrigger: {
    trigger: "#products",
    start: "top -240%",
    end: "top -300%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#products .products_step-two .products__screens .products__screen:nth-child(1) img", {
  x: "0",
}, {
  x: "-100%",
  scrollTrigger: {
    trigger: "#products",
    start: "top -300%",
    end: "top -370%",
    scrub: true,
  }
});

gsap.fromTo("#products .products_step-two .products__screens .products__screen:nth-child(2) img", {
  x: "0",
}, {
  x: "100%",
  scrollTrigger: {
    trigger: "#products",
    start: "top -300%",
    end: "top -370%",
    scrub: true,
  }
});

gsap.fromTo("#products .products__galaxy", {
  opacity: 1,
  scale: 1.8,
  top: "135%",
}, {
  opacity: 1,
  scale: 1.8,
  top: "130%",
  scrollTrigger: {
    trigger: "#products",
    start: "top -300%",
    end: "top -370%",
    scrub: true,
  },
  immediateRender: false
});


gsap.fromTo("#products .products__galaxy", {
  opacity: 1,
  scale: 1.8,
  top: "130%",
  position: "absolute",
}, {
  opacity: 1,
  scale: 1,
  top: "50%",
  scrollTrigger: {
    trigger: "#products",
    start: "top -450%",
    end: "top -520%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#products .products_step-two .products__screens", {
  opacity: 1,
  scale: 1,
}, {
  opacity: 0,
  scale: 0.4,
  scrollTrigger: {
    trigger: "#products",
    start: "top -450%",
    end: "top -520%",
    scrub: true,
  }
});

gsap.fromTo("#products .products_step-one p > span:nth-child(1)", {
  opacity: .46,
  scale: 2.2,
}, {
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: "#products",
    start: "top -450%",
    end: "top -520%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#products .products__galaxy", {
  top: "50%",
  position: "absolute",
}, {
  top: "50%",
  scrollTrigger: {
    trigger: "#products",
    start: "top -520%",
    end: "top -521%",
    scrub: true,
    onEnter: () => {
      gsap.set("#products .products__galaxy", { position: "fixed", top: "50%" });
    },

  },
  immediateRender: false
});







