import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#products .products_step-one p", {
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

// Simple destinations search and list rendering
const destinationsData = [
  { city: 'Київ', country: 'Україна' },
  { city: 'Львів', country: 'Україна' },
  { city: 'Варшава', country: 'Польща' },
  { city: 'Краків', country: 'Польща' },
  { city: 'Прага', country: 'Чехія' },
  { city: 'Берлін', country: 'Німеччина' },
  { city: 'Париж', country: 'Франція' },
  { city: 'Рим', country: 'Італія' },
  { city: 'Барселона', country: 'Іспанія' },
  { city: 'Лісабон', country: 'Португалія' },
];

function renderDestinationsList(items) {
  const list = document.getElementById('destinations-list');
  if (!list) return;
  if (!items || items.length === 0) {
    list.innerHTML = '<p style="opacity:.7">Нічого не знайдено</p>';
    return;
  }
  const html = items
    .slice(0, 12)
    .map((d) => `<div class="destination-item" style="padding:10px 14px;border-radius:12px;background:rgba(255,255,255,0.06);backdrop-filter:blur(6px);margin-bottom:8px;border:1px solid rgba(255,255,255,0.08)"><strong>${d.city}</strong> — <span style="opacity:.8">${d.country}</span></div>`)
    .join('');
  list.innerHTML = html;
}

function setupDestinationsSearch() {
  const input = document.getElementById('destination-search');
  if (!input) return;
  renderDestinationsList(destinationsData);
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      renderDestinationsList(destinationsData);
      return;
    }
    const filtered = destinationsData.filter((d) =>
      d.city.toLowerCase().includes(q) || d.country.toLowerCase().includes(q)
    );
    renderDestinationsList(filtered);
  });
}

window.addEventListener('load', setupDestinationsSearch);

gsap.fromTo("#products .sun_flare img", {
  y: "150%",
}, {
  y: "0",
  scrollTrigger: {
    trigger: "#products",
    start: "top -80%",
    end: "top -150%",
    scrub: true,
  }
});

gsap.fromTo("#products .products__galaxy", {
    opacity: 1,
    scale: 1.8,
    top: "250%",
    left: "50%",
    x: "-50%",
    y: "-50%",
  }, {
    opacity: 1,
    scale: 1.8,
    top: "142%",
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
  background: "linear-gradient(180deg, #FFFFFF -23.98%, #FFFFFF 96.99%) text",
}, {
  opacity: .46,
  scale: 2.2,
  background: "linear-gradient(180deg, #FFFFFF -23.98%, rgba(255, 255, 255, 0.3) 96.99%) text",
  "-webkit-text-stroke": "0.5px rgba(255, 255, 255, 0.2)",
  scrollTrigger: {
    trigger: "#products",
    start: "top -200%",
    end: "top -300%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#products .products_step-two .products__screens", {
  opacity: 0,
  scale: .7,
  y: "220%",
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

gsap.fromTo("#products .screens", {
  zIndex: 0
}, {
  zIndex: 5,
  scrollTrigger: {
    trigger: "#products",
    start: "top -220%",
    end: "top -220%",
    scrub: true,
  },
  immediateRender: false
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
    start: "top -200%",
    end: "top -300%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#products .products_step-two .products__screens .products__screen:nth-child(1) picture", {
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

gsap.fromTo("#products .products_step-two .products__screens .products__screen:nth-child(2) picture", {
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
  top: "142%",
}, {
  opacity: 1,
  scale: 1.8,
  top: "138%",
  scrollTrigger: {
    trigger: "#products",
    start: "top -300%",
    end: "top -370%",
    scrub: true,
  },
  immediateRender: false
});

/************* *************/

gsap.fromTo("#products .products__galaxy", {
  opacity: 1,
  scale: 1.8,
  top: "138%",
  position: "absolute",
}, {
  opacity: 1,
  scale: 1,
  top: "50%",
  scrollTrigger: {
    trigger: "#products",
    start: "top -380%",
    end: "top -450%",
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
    start: "top -380%",
    end: "top -450%",
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
    start: "top -380%",
    end: "top -450%",
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
    start: "top -450%",
    end: "top -451%",
    scrub: true,
    onEnter: () => {
      gsap.set("#products .products__galaxy", { position: "fixed", top: "50%" });
    },

  },
  immediateRender: false
});

gsap.fromTo("#products .sun_flare img", {
  opacity: 1
}, {
  opacity: 0,
  scrollTrigger: {
    trigger: "#products",
    start: "top -380%",
    end: "top -450%",
    scrub: true,
  }
});







