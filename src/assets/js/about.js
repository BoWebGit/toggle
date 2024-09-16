import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**  Step One In  **/

gsap.fromTo("#about .about__sphere", {
    opacity: 0,
    scale: 0,
    x: "-50%",
    y: "-50%",
    top: 0,
  }, {
    opacity: 1,
    scale: .4,
    top: 0,
    scrollTrigger: {
      trigger: "#about",
      start: "top 100%",
      end: "top 55%",
      scrub: true,
    }
});


gsap.fromTo("#about .about__description-top", {
  opacity: 0,
  x: "-60%",
}, {
  opacity: 1,
  x: 0,
  ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
  scrollTrigger: {
    trigger: "#about",
    start: "top 60%",
    end: "top 0%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__description-bottom", {
  opacity: 0,
  x: "60%",
}, {
  opacity: 1,
  x: 0,
  ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
  scrollTrigger: {
    trigger: "#about",
    start: "top 60%",
    end: "top 0%",
    scrub: true,
  }
});


const statsCells = gsap.utils.toArray("#about .about__stats .about__stats-cell");

const sortedCells = statsCells.slice().sort((a, b) => {
  return +window.getComputedStyle(a).order - +window.getComputedStyle(b).order;
});

gsap.fromTo(sortedCells, {
  opacity: 0,
  scale: 0.5,
}, {
  opacity: 1,
  scale: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top 60%",
    end: "top 0%",
    scrub: true,
  },
  stagger: {
    each: 0.2,
  }
});

gsap.fromTo(sortedCells.map(el => el.querySelector('h3')), {
  opacity: 0,
  y: -30,
}, {
  opacity: 1,
  y: 0,
  ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
  scrollTrigger: {
    trigger: "#about",
    start: "top 20%",
    end: "top -40%",
    scrub: true,
  },
  stagger: {
    each: 0.2, 
  }
});

gsap.fromTo(sortedCells.map(el => el.querySelector('h5')), {
  opacity: 0,
  y: 30,
}, {
  opacity: 1,
  y: 0,
  ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
  scrollTrigger: {
    trigger: "#about",
    start: "top 20%",
    end: "top -40%",
    scrub: true,
  },
  stagger: {
    each: 0.2, 
  }
});



/**  Step One Out  **/

gsap.fromTo("#about .about__sphere", {
    opacity: 1,
    scale: .4,
   }, {
    opacity: 1,
    scale: 0.8,
    top: "50%",
    scrollTrigger: {
       trigger: "#about",
       start: "top -110%",
       end: "top -300%",
       scrub: true,
    }
});

gsap.fromTo("#about .about__swirl", {
    opacity: 0,
   }, {
    opacity: 1,
    scrollTrigger: {
       trigger: "#about",
       start: "top -200%",
       end: "top -300%",
       scrub: true,
    }
});

gsap.to("#about .about__step-one", {
    y: "-120%",
    scrollTrigger: {
      trigger: "#about",
      start: "top -110%",
      end: "top -270%",
      scrub: true,
    }
});

gsap.to("#about .bg-step-one", {
  y: "-120%",
  scrollTrigger: {
    trigger: "#about",
    start: "top -110%",
    end: "top -270%",
    scrub: true,
  }
});


gsap.fromTo("#about .about__description-top", {
  opacity: 1,
  x: 0,
}, {
  opacity: 0,
  x: "120%",
  ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
  scrollTrigger: {
    trigger: "#about",
    start: "top -110%",
    end: "top -270%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__description-bottom", {
  opacity: 1,
  x: 0,
}, {
  opacity: 0,
  x: "-120%",
  ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
  scrollTrigger: {
    trigger: "#about",
    start: "top -110%",
    end: "top -270%",
    scrub: true,
  }
});



/**  Step Two In  **/

gsap.fromTo("#about .about__step-two p", {
    opacity: 0,
    y: 60,
  }, {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#about",
      start: "top -300%",
      end: "top -350%",
      scrub: true,
    }
});

gsap.fromTo("#about .about__sphere", {
    opacity: 1,
    scale: 0.8,
    top: "50%",
   }, {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
       trigger: "#about",
       start: "top -315%",
       end: "top -350%",
       scrub: true,
    }
});

gsap.fromTo("#about .about__step-two .about__eclipse", {
  opacity: 0,
  scale: .3,
}, {
  opacity: 1,
  scale: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top -300%",
    end: "top -350%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-two .about__eclipse img", {
    opacity: 0,
  }, {
    opacity: 1,
    scrollTrigger: {
      trigger: "#about",
      start: "top -300%",
      end: "top -350%",
      scrub: true,
    }
});

function splitText(textElement) {
  const text = textElement.innerText;
  textElement.innerHTML = text.split('').map(char => `<span class="char">${char}</span>`).join('');
}

const textElement = document.querySelector('#about .about__step-two p');
splitText(textElement);

const chars = document.querySelectorAll('#about .about__step-two p .char');

gsap.fromTo(chars, 
  {
    opacity: 0.5,
  }, 
  {
    opacity: 1,
    scrollTrigger: {
      trigger: '#about',
      start: "top -350%",
      end: "top -480%",
      scrub: true,
    },
    stagger: 0.1
  }
);

/**  Step Two Out  **/

gsap.fromTo("#about .about__step-two p", {
  y: 0,
}, {
  opacity: 0,
  y: -60,
  scrollTrigger: {
    trigger: "#about",
    start: "top -500%",
    end: "top -550%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__sphere", {
  opacity: 1,
  scale: 1,
  top: "50%",
  rotate: 0,
 }, {
  opacity: 1,
  scale: 2.4,
  rotate: -36,
  scrollTrigger: {
     trigger: "#about",
     start: "top -500%",
     end: "top -570%",
     scrub: true,
  }
});

gsap.fromTo("#about .about__step-two .about__eclipse", {
  scale: 1,
}, {
  scale: 2.4,
  scrollTrigger: {
    trigger: "#about",
    start: "top -500%",
    end: "top -570%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-two .about__eclipse img", {
  scale: 1,
}, {
  opacity: 0,
  scrollTrigger: {
    trigger: "#about",
    start: "top -500%",
    end: "top -570%",
    scrub: true,
  }
});

/**  Step Three In  **/

gsap.fromTo("#about .about__step-three p", {
  opacity: 0,
  top: "50%",
  y: 0,
}, {
  opacity: 1,
  top: "50%",
  y: "-50%",
  scrollTrigger: {
    trigger: "#about",
    start: "top -570%",
    end: "top -650%",
    scrub: true,
  }
});


gsap.fromTo("#about .about__step-three p", {
  top: "50%",
  y: "-50%",
}, {
  top: "0%",
  y: "0%",
  scrollTrigger: {
    trigger: "#about",
    start: "top -700%",
    end: "top -790%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider", {
  opacity: 0,
}, {
  opacity: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top -730%",
    end: "top -800%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider > span:nth-child(1)", {
  top: "40%",
  left: "40%",
}, {
  top: 0,
  left: 0,
  scrollTrigger: {
    trigger: "#about",
    start: "top -730%",
    end: "top -800%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider > span:nth-child(2)", {
  top: "40%",
  right: "40%",
}, {
  top: 0,
  right: 0,
  scrollTrigger: {
    trigger: "#about",
    start: "top -730%",
    end: "top -800%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider > span:nth-child(3)", {
  bottom: "40%",
  right: "40%",
}, {
  bottom: 0,
  right: 0,
  scrollTrigger: {
    trigger: "#about",
    start: "top -730%",
    end: "top -800%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider > span:nth-child(4)", {
  bottom: "40%",
  left: "40%",
}, {
  bottom: 0,
  left: 0,
  scrollTrigger: {
    trigger: "#about",
    start: "top -730%",
    end: "top -800%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper", {
  opacity: 0,
  y: 100,
}, {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: "#about",
    start: "top -765%",
    end: "top -810%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .left > div", {
  rotate: -4,
  y: "0px",
}, {
  rotate: -10,
  y: "0px",
  scrollTrigger: {
    trigger: "#about",
    start: "top -810%",
    end: "top -840%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .left > div > div", {
  filter: "grayscale(100%)",
}, {
  filter: "grayscale(100%)",
  scrollTrigger: {
    trigger: "#about",
    start: "top -810%",
    end: "top -840%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .left h3", {
  opacity: 0,
  top: "50%",
}, {
  opacity: 0,
  top: "50%",
  scrollTrigger: {
    trigger: "#about",
    start: "top -810%",
    end: "top -840%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .left img", {
  top: "50%",
  y: "28%",
}, {
  top: "50%",
  y: "28%",
  scrollTrigger: {
    trigger: "#about",
    start: "top -810%",
    end: "top -840%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .right > div", {
  rotate: 4,
  y: "0px",
}, {
  rotate: 10,
  y: "0px",
  scrollTrigger: {
    trigger: "#about",
    start: "top -810%",
    end: "top -840%",
    scrub: true,
  }
});


gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .right > div > div", {
  filter: "grayscale(100%)",
}, {
  filter: "grayscale(100%)",
  scrollTrigger: {
    trigger: "#about",
    start: "top -810%",
    end: "top -840%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .right h3", {
  opacity: 0,
  top: "50%",
}, {
  opacity: 0,
  top: "50%",
  scrollTrigger: {
    trigger: "#about",
    start: "top -810%",
    end: "top -840%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .right img", {
  top: "50%",
  y: "28%",
}, {
  top: "50%",
  y: "28%",
  scrollTrigger: {
    trigger: "#about",
    start: "top -810%",
    end: "top -840%",
    scrub: true,
  }
});


/***************** *******************/


gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .left > div", {
  rotate: -10,
  y: "0px",
}, {
  rotate: 10,
  y: "0px",
  scrollTrigger: {
    trigger: "#about",
    start: "top -900%",
    end: "top -940%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .active > div", {
  rotate: 0,
}, {
  rotate: -10,
  scale: 0.66,
  y: "0px",
  scrollTrigger: {
    trigger: "#about",
    start: "top -900%",
    end: "top -940%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .active > div > div", {
  filter: "grayscale(0%)",
}, {
  filter: "grayscale(100%)",
  scrollTrigger: {
    trigger: "#about",
    start: "top -900%",
    end: "top -940%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .active h3", {
  opacity: 1,
}, {
  opacity: 0,
  scrollTrigger: {
    trigger: "#about",
    start: "top -900%",
    end: "top -940%",
    scrub: true,
  },
  immediateRender: false
});

gsap.to("#about .about__step-three .about__slider .about__slider-wrapper .active img", {
  top: "50%",
  y: "28%",
  scrollTrigger: {
    trigger: "#about",
    start: "top -900%",
    end: "top -940%",
    scrub: true,
  },
  immediateRender: false
});

gsap.to("#about .about__step-three .about__slider .about__slider-wrapper .active", {
  
  zIndex: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top -930%",
    end: "top -930%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .right > div", {
  rotate: 10
}, {
  rotate: 0,
  scale: 1,
  y: "466px",
  scrollTrigger: {
    trigger: "#about",
    start: "top -900%",
    end: "top -940%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .right > div > div", {
  filter: "grayscale(100%)",
}, {
  filter: "grayscale(0%)",
  scrollTrigger: {
    trigger: "#about",
    start: "top -900%",
    end: "top -940%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .right h3", {
  opacity: 0,
}, {
  opacity: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top -900%",
    end: "top -940%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .right img", {
  top: "50%",
  y: "28%",
}, {
  top: "0",
  y: "0",
  scrollTrigger: {
    trigger: "#about",
    start: "top -900%",
    end: "top -940%",
    scrub: true,
  },
  immediateRender: false
});

gsap.to("#about .about__step-three .about__slider .about__slider-wrapper .right", {  
  zIndex: 5,
  scrollTrigger: {
    trigger: "#about",
    start: "top -930%",
    end: "top -930%",
    scrub: true,
  }
});



/***************** *******************/

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .active > div", {
  rotate: -10
}, {
  rotate: 10,
  scrollTrigger: {
    trigger: "#about",
    start: "top -1000%",
    end: "top -1040%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .right > div", {
  rotate: 0
}, {
  rotate: -10,
  scale: 0.66,
  y: "0px",
  scrollTrigger: {
    trigger: "#about",
    start: "top -1000%",
    end: "top -1040%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .right > div > div", {
  filter: "grayscale(0%)",
}, {
  filter: "grayscale(100%)",
  scrollTrigger: {
    trigger: "#about",
    start: "top -1000%",
    end: "top -1040%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .right h3", {
  opacity: 1,
}, {
  opacity: 0,
  scrollTrigger: {
    trigger: "#about",
    start: "top -1000%",
    end: "top -1040%",
    scrub: true,
  },
  immediateRender: false
});

gsap.to("#about .about__step-three .about__slider .about__slider-wrapper .right img", {
  top: "50%",
  y: "28%",
  scrollTrigger: {
    trigger: "#about",
    start: "top -1000%",
    end: "top -1040%",
    scrub: true,
  },
  immediateRender: false
});

gsap.to("#about .about__step-three .about__slider .about__slider-wrapper .right", {
  zIndex: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top -930%",
    end: "top -930%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .left > div", {
  rotate: 10
}, {
  rotate: 0,
  scale: 1,
  y: "466px",
  scrollTrigger: {
    trigger: "#about",
    start: "top -1000%",
    end: "top -1040%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .left > div > div", {
  filter: "grayscale(100%)",
}, {
  filter: "grayscale(0%)",
  scrollTrigger: {
    trigger: "#about",
    start: "top -1000%",
    end: "top -1040%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .left h3", {
  opacity: 0,
}, {
  opacity: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top -1000%",
    end: "top -1040%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .left img", {
  top: "50%",
  y: "28%",
}, {
  top: "0",
  y: "0",
  scrollTrigger: {
    trigger: "#about",
    start: "top -1000%",
    end: "top -1040%",
    scrub: true,
  },
  immediateRender: false
});

gsap.to("#about .about__step-three .about__slider .about__slider-wrapper .left", {
  zIndex: 5,
  scrollTrigger: {
    trigger: "#about",
    start: "top -1030%",
    end: "top -1030%",
    scrub: true,
  }
});


gsap.fromTo("#about .about__step-three .about__slider .about__slider-progress span", {
  width: "0%",
}, {
  width: "100%",
  scrollTrigger: {
    trigger: "#about",
    start: "top -810%",
    end: "top -1030%",
    scrub: true,
  }
});




gsap.fromTo("#about .about__step-three p", {
  opacity: 1,
}, {
  y: "-50%",
  opacity: 0,
  scrollTrigger: {
    trigger: "#about",
    start: "top -1100%",
    end: "top -1200%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-three .about__slider", {
  opacity: 1,
  scale: 1,
}, {
  opacity: 0,
  scale: 1.5,
  scrollTrigger: {
    trigger: "#about",
    start: "top -1100%",
    end: "top -1200%",
    scrub: true,
  }
  ,
  immediateRender: false
});

gsap.fromTo("#about .about__swirl", {
  opacity: 1,
}, {
  opacity: 0,
  scrollTrigger: {
     trigger: "#about",
     start: "top -1100%",
     end: "top -1200%",
     scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__sphere", {
  scale: 2.4,
}, {
  scale: 6,
  scrollTrigger: {
     trigger: "#about",
     start: "top -1100%",
     end: "top -1200%",
     scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-two .about__eclipse", {
  scale: 2.4,
}, {
  scale: 6,
  scrollTrigger: {
    trigger: "#about",
    start: "top -1100%",
    end: "top -1200%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__sphere", {
  opacity: 1,
}, {
  opacity: 0,
  scrollTrigger: {
     trigger: "#about",
     start: "top -1199%",
     end: "top -1200%",
     scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-two .about__eclipse", {
  opacity: 1,
}, {
  opacity: 0,
  scrollTrigger: {
    trigger: "#about",
    start: "top -1199%",
    end: "top -1200%",
    scrub: true,
  },
  immediateRender: false
});