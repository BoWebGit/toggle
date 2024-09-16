import '../scss/main.scss';

import Lenis from '@studio-freight/lenis'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const lenis = new Lenis({
  smooth: true,
  smoothTouch: true,
  touchMultiplier: 1.5, 
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

import './home';
import './about';
import './products';
import './team';
import './careers';

window.addEventListener('load', function() {

  document.body.classList.add('loading');

  const sections = document.querySelectorAll('.section');
  const sectionsCount = document.querySelector('.sections-count');

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
});

