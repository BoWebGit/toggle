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

// Trip planner interactivity
function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return null;
    return d.toISOString().slice(0, 10);
  } catch { return null; }
}

function calculateTripSummary({ from, to, depart, ret, travelers, budget }) {
  const days = Math.max(1, Math.ceil((new Date(ret).getTime() - new Date(depart).getTime()) / (1000 * 60 * 60 * 24)));
  const estPerDay = budget && budget > 0 ? Math.max(20, Math.floor(budget / days / Math.max(1, travelers))) : 75;
  return {
    days,
    estPerDay,
    totalEst: estPerDay * days * Math.max(1, travelers),
    route: `${from} → ${to}`,
  };
}

function renderTripSummary(summary) {
  const container = document.getElementById('trip-summary');
  if (!container) return;
  const { days, estPerDay, totalEst, route } = summary;
  container.innerHTML = `
    <div style="padding:14px 16px;border-radius:12px;background:rgba(255,255,255,0.06);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,0.08)">
      <p style="margin:0 0 6px 0"><strong>Маршрут:</strong> ${route}</p>
      <p style="margin:0 0 6px 0"><strong>Тривалість:</strong> ${days} днів</p>
      <p style="margin:0 0 6px 0"><strong>Орієнтовно на особу/день:</strong> $${estPerDay}</p>
      <p style="margin:0"><strong>Орієнтовний бюджет разом:</strong> $${totalEst}</p>
    </div>
  `;
}

function setupTripPlanner() {
  const form = document.getElementById('trip-planner-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const from = (document.getElementById('from-city')?.value || '').trim();
    const to = (document.getElementById('to-city')?.value || '').trim();
    const depart = formatDate(document.getElementById('depart-date')?.value || '');
    const ret = formatDate(document.getElementById('return-date')?.value || '');
    const travelers = parseInt(document.getElementById('travelers')?.value || '1', 10) || 1;
    const budget = parseInt(document.getElementById('budget')?.value || '0', 10) || 0;

    if (!from || !to || !depart || !ret) return;
    if (new Date(ret) < new Date(depart)) return;

    const summary = calculateTripSummary({ from, to, depart, ret, travelers, budget });
    renderTripSummary(summary);
  });
}

window.addEventListener('load', setupTripPlanner);

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