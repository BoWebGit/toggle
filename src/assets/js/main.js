import '../scss/main.scss';

import Lenis from '@studio-freight/lenis'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const lenis = new Lenis({
  duration: 4,
  easing: (t) => 1 - Math.pow(1 - t, 3),
  direction: 'vertical',
  gestureDirection: 'vertical',
  // lerp: 0.02,
  // smooth: 1,
  smoothTouch: true,
  touchMultiplier: 8,
  wheelMultiplier: 3,
  infinite: false,
  autoResize: true,
  //syncTouch: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

lenis.on('scroll', ScrollTrigger.update)

export function disableScroll() {
  lenis.stop();
}

export function enableScroll() {
  lenis.start();
}

import './home';
import './about';
import './products';
import './team';
import './careers';

window.addEventListener('load', function() {

  let isUserScrolling = false;

  window.addEventListener('wheel', () => {
    isUserScrolling = true;
  });

  window.addEventListener('touchmove', () => {
    isUserScrolling = true;
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      isUserScrolling = false;
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const offsetPercentage = this.getAttribute('data-offset');
  
      if (targetElement) {
        const offset = window.innerHeight * (offsetPercentage / 100);
        lenis.scrollTo(targetElement, { offset: offset, duration: 0 });
      }
    });
  });

  document.body.classList.add('loading');

  const navToggle = document.querySelector('.toggle-menu');
  const header = document.querySelector('.site-header');

  navToggle.addEventListener('click', function(){
    if(header.classList.contains('active')) {
      header.classList.remove('active');
      navToggle.innerHTML= 'Menu';
    } else {
      header.classList.add('active');
      navToggle.innerHTML= 'Close';
    }
  });

  const sections = document.querySelectorAll('.section');
  const sectionsCount = document.querySelector('.sections-count');

  gsap.fromTo(".footer__heading span", {
    y: "100%",
    opacity: 0,
  }, {
    y: "0",
    opacity: 1,
    scrollTrigger: {
      trigger: ".site-footer",
      start: "top 70%",
      end: "top 50%",
      scrub: true,
    },
    stagger: {
      each: 0.2,
    }
  });

  sections.forEach((section, index) => {
    const sectionTitle = section.getAttribute("data-title");
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("section-progress");

    const titleSpan = document.createElement("span");
    titleSpan.textContent = `${sectionTitle}`;
    titleSpan.classList.add('title');

    const percentSpan = document.createElement("span");
    percentSpan.classList.add("progress-percent");
    percentSpan.style.display = "block";
    percentSpan.style.height = "0";

    sectionDiv.appendChild(titleSpan);
    sectionDiv.appendChild(percentSpan);
    sectionsCount.appendChild(sectionDiv);


    gsap.to(percentSpan, {
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
          const progress = (self.progress * 100).toFixed(0);
          percentSpan.style.height = `${progress}%`;

          if (self.isActive) {
            document.querySelectorAll(".section-progress").forEach(div => div.classList.remove("active"));
            sectionDiv.classList.add("active");
          }
        },
      },
    });
  });

  document.getElementById('copy-button').addEventListener('click', function() {
    const emailText = document.getElementById('email-text').textContent; 
    navigator.clipboard.writeText(emailText);

  });

  const sectionH = document.querySelector("#home");
  const sectionA = document.querySelector("#about");
  const sectionP = document.querySelector("#products");
  const sectionT = document.querySelector("#team");
  const sectionC = document.querySelector("#careers");

  let progress = 0;


  const scrollTriggers = [
    {
      trigger: "#about",
      start: "top 100%",
      end: "top -40%",
      onEnter: () => lenis.scrollTo(sectionA, { offset: window.innerHeight * 0.39, duration: 4, lock: true }),
      onEnterBack: () => lenis.scrollTo(sectionH, { offset: 0, duration: 3, lock: true })
    },
    {
      trigger: "#about",
      start: "top -60%",
      end: "top -320%",
      onEnter: () => lenis.scrollTo(sectionA, { offset: window.innerHeight * 3.5, duration: 6, lock: true }),
      onEnterBack: () => lenis.scrollTo(sectionA, { offset: window.innerHeight * 0.5, duration: 3.5, lock: true })
    },
    {
      trigger: "#about",
      start: "top -490%",
      end: "top -630%",
      toggleActions: "play none none reverse",
      onEnter: () => lenis.scrollTo(sectionA, { offset: window.innerHeight * 6.5, duration: 3, lock: true }),
      onEnterBack: () => lenis.scrollTo(sectionA, { offset: window.innerHeight * 4.8, duration: 1.3, lock: true })
    },
    {
      trigger: "#about",
      start: "top -665%",
      end: "top -830%",
      toggleActions: "play none none reverse",
      onEnter: () => lenis.scrollTo(sectionA, { offset: window.innerHeight * 8.4, duration: 3, lock: true }),
      onEnterBack: () => lenis.scrollTo(sectionA, { offset: window.innerHeight * 6.6, duration: 1.3, lock: true })
    },
    {
      trigger: "#about",
      start: "top -910%",
      end: "top -930%",
      toggleActions: "play none none reverse",
      onEnter: () => lenis.scrollTo(sectionA, { offset: window.innerHeight * 9.4, duration: 3, lock: true }),
      onEnterBack: () => lenis.scrollTo(sectionA, { offset: window.innerHeight * 9, duration: 1.3, lock: true })
    },
    {
      trigger: "#about",
      start: "top -970%",
      end: "top -990%",
      toggleActions: "play none none reverse",
      onEnter: () => lenis.scrollTo(sectionA, { offset: window.innerHeight * 10, duration: 3, lock: true }),
      onEnterBack: () => lenis.scrollTo(sectionA, { offset: window.innerHeight * 9.6, duration: 2, lock: true })
    },
    {
      trigger: "#products",
      start: "top 100%",
      end: "top -130%",
      toggleActions: "play none none reverse",
      onEnter: () => lenis.scrollTo(sectionP, { offset: window.innerHeight * 1.45, duration: 5, lock: true }),
      onEnterBack: () => lenis.scrollTo(sectionA, { offset: window.innerHeight * 10, duration: 3, lock: true })
    },
    {
      trigger: "#products",
      start: "top -150%",
      end: "top -370%",
      toggleActions: "play none none reverse",
      onEnter: () => lenis.scrollTo(sectionP, { offset: window.innerHeight * 3.7, duration: 6, lock: true }),
      onEnterBack: () => lenis.scrollTo(sectionP, { offset: window.innerHeight * 1.5, duration: 4, lock: true })
    },
    {
      trigger: "#team",
      start: "top 60%",
      end: "top -110%",
      toggleActions: "play none none reverse",
      onEnter: () => lenis.scrollTo(sectionT, { offset: window.innerHeight * 1.4, duration: 5, lock: true }),
      onEnterBack: () => lenis.scrollTo(sectionP, { offset: window.innerHeight * 3.8, duration: 3, lock: true })
    },
    {
      trigger: "#team",
      start: "top -155%",
      end: "top -365%",
      toggleActions: "play none none reverse",
      onEnter: () => lenis.scrollTo(sectionC, { offset: window.innerHeight * 2, duration: 5, lock: true }),
      onEnterBack: () => lenis.scrollTo(sectionT, { offset: window.innerHeight * 1.4, duration: 2, lock: true })
    }
  ];
  
  scrollTriggers.forEach(triggerConfig => {
    ScrollTrigger.create({
      trigger: triggerConfig.trigger,
      start: triggerConfig.start,
      end: triggerConfig.end,
      toggleActions: triggerConfig.toggleActions || "play none none reverse",
      onEnter: () => {
        if (isUserScrolling) {
          triggerConfig.onEnter();
        }
      },
      onEnterBack: () => {
        if (isUserScrolling) {
          triggerConfig.onEnterBack();
        }
      }
    });
  });
});

