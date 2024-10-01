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

gsap.to("#about .section__wrapper-decor", {
  overflow: "hidden",
  scrollTrigger: {
    trigger: "#about",
    start: "top -55%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__description-top", {
  opacity: 0,
  x: "-60%",
}, {
  opacity: 1,
  x: 0,
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
  scrollTrigger: {
    trigger: "#about",
    start: "top 60%",
    end: "top 0%",
    scrub: true,
  }
});

const statsCells = gsap.utils.toArray("#about .about__stats .about__stats-cell");

function sortCellsByScreenSize() {
  let sortedCells;

  if (window.innerWidth > 1027) {
    sortedCells = [statsCells[1], statsCells[0], statsCells[3], statsCells[2]];
  } else {
    sortedCells = statsCells;
  }

  return sortedCells;
}

const sortedCells = sortCellsByScreenSize();

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

// window.addEventListener('resize', () => {
//   const sortedCells = sortCellsByScreenSize();
//   gsap.fromTo(sortedCells, {
//     opacity: 0,
//     scale: 0.5,
//   }, {
//     opacity: 1,
//     scale: 1,
//     scrollTrigger: {
//       trigger: "#about",
//       start: "top 60%",
//       end: "top 0%",
//       scrub: true,
//     },
//     stagger: {
//       each: 0.2,
//     }
//   });
// });


    gsap.fromTo(sortedCells.map(el => [el.querySelector('h3'), el.querySelector('h5')]), {
      opacity: 0,
      y: (index) => index % 2 === 0 ? -30 : 30,
    }, {
      opacity: 1,
      y: 0,
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
       start: "top -60%",
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
       start: "top -150%",
       end: "top -240%",
       scrub: true,
    }
});

gsap.to("#about .about__step-one > div", {
    y: "-120%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#about",
      start: "top -70%",
      end: "top -210%",
      scrub: true,
    }
});

gsap.to("#about .bg-step-one img", {
  y: "-120%",
  opacity: 0,
  scrollTrigger: {
    trigger: "#about",
    start: "top -70%",
    end: "top -210%",
    scrub: true,
  }
});


gsap.fromTo("#about .about__description-top", {
  opacity: 1,
  x: 0,
}, {
  opacity: 0,
  x: "120%",
  scrollTrigger: {
    trigger: "#about",
    start: "top -60%",
    end: "top -210%",
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
  scrollTrigger: {
    trigger: "#about",
    start: "top -60%",
    end: "top -210%",
    scrub: true,
  }
});



/**  Step Two In  **/

gsap.fromTo("#about .about__step-two p", {
    opacity: 0,
    y: "100%",
    x: "-50%",
    top: "50%",
    left: "50%",
  }, {
    opacity: 1,
    y: "-50%",
    x: "-50%",
    top: "50%",
    left: "50%",
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

gsap.fromTo("#about .about__eclipse", {
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

gsap.fromTo("#about .about__eclipse img", {
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
  y: "-50%",
  x: "-50%",
  top: "50%",
  left: "50%",
}, {
  opacity: 0,
  y: "-100%",
  x: "-50%",
  top: "50%",
  left: "50%",
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

gsap.fromTo("#about .about__eclipse", {
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

gsap.fromTo("#about .about__eclipse img", {
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

gsap.fromTo("#about .about__eclipse span", {
  opacity: 0,
}, {
  opacity: 0.4,
  scrollTrigger: {
    trigger: "#about",
    start: "top -530%",
    end: "top -590%",
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
    start: "top -660%",
    end: "top -750%",
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

gsap.to("#about .about__step-three .about__slider .about__slider-wrapper .left > div", {
  rotate: -10,
  scrollTrigger: {
    trigger: "#about",
    start: "top -810%",
    end: "top -840%",
    scrub: true,
  },
  immediateRender: false
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

gsap.to("#about .about__step-three .about__slider .about__slider-wrapper .right > div", {
  rotate: 10,
  scrollTrigger: {
    trigger: "#about",
    start: "top -810%",
    end: "top -840%",
    scrub: true,
  },
  immediateRender: false
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

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .active", {
  zIndex: 5,
}, {
  zIndex: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top -920%",
    end: "top -920%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .right > div", {
  rotate: 10,
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

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .right", { 
  zIndex: 1,
}, {
  zIndex: 5,
  scrollTrigger: {
    trigger: "#about",
    start: "top -920%",
    end: "top -920%",
    scrub: true,
  }
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .left", { 
  zIndex: 1,
}, {
  zIndex: 2,
  scrollTrigger: {
    trigger: "#about",
    start: "top -920%",
    end: "top -920%",
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
    start: "top -960%",
    end: "top -1000%",
    scrub: true,
  },
  immediateRender: false
});

gsap.to("#about .about__step-three .about__slider .about__slider-wrapper .right > div", {
  rotate: -10,
  scale: 0.66,
  y: "0px",
  scrollTrigger: {
    trigger: "#about",
    start: "top -960%",
    end: "top -1000%",
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
    start: "top -960%",
    end: "top -1000%",
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
    start: "top -960%",
    end: "top -1000%",
    scrub: true,
  },
  immediateRender: false
});

gsap.to("#about .about__step-three .about__slider .about__slider-wrapper .right img", {
  top: "50%",
  y: "28%",
  scrollTrigger: {
    trigger: "#about",
    start: "top -960%",
    end: "top -1000%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .right", {
  zIndex: 5,
}, {
  zIndex: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top -980%",
    end: "top -980%",
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
    start: "top -960%",
    end: "top -1000%",
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
    start: "top -960%",
    end: "top -1000%",
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
    start: "top -960%",
    end: "top -1000%",
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
    start: "top -960%",
    end: "top -1000%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__step-three .about__slider .about__slider-wrapper .left", {
  zIndex: 2,
}, {
  zIndex: 5,
  scrollTrigger: {
    trigger: "#about",
    start: "top -980%",
    end: "top -980%",
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
    end: "top -1100%",
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
    start: "top -1050%",
    end: "top -1100%",
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
    start: "top -1050%",
    end: "top -1100%",
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
     start: "top -1050%",
     end: "top -1100%",
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
     start: "top -1050%",
     end: "top -1100%",
     scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__eclipse", {
  scale: 2.4,
}, {
  scale: 6,
  scrollTrigger: {
    trigger: "#about",
    start: "top -1050%",
    end: "top -1100%",
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
     start: "top -1099%",
     end: "top -1100%",
     scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__eclipse", {
  opacity: 1,
}, {
  opacity: 0,
  scrollTrigger: {
    trigger: "#about",
    start: "top -1099%",
    end: "top -1100%",
    scrub: true,
  },
  immediateRender: false
});

gsap.fromTo("#about .about__eclipse span", {
  opacity: 0.4,
}, {
  opacity: 0,
  scrollTrigger: {
    trigger: "#about",
    start: "top -1050%",
    end: "top -1100%",
    scrub: true,
  },
  immediateRender: false
});