import gsap from 'gsap';

export const drawCharacterTL = (duration: number) => {
  let tl = gsap.timeline();
  tl.from('.helloHPathMask', {
    duration,
    drawSVG: '0% 0%',
    stroke: '#FFF',
    stagger: {
      each: 6,
    },
    ease: 'power1.inOut',
  })
    .from('.helloE1PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.helloE2PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.helloL1PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.helloL2PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.helloO1PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.helloO2PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.qumaPathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.myMPathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.myY1PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.myY2PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.nameNPathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.nameA1PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.nameA2PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.nameMPathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.nameE1PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.nameE2PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.isI1PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .add('dot')
    .from('.isI2PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    // .to('.isI2Path', { duration: 4, morphSVG: '#common_full-IntroText' }, '<')
    .from('.isS1PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.isS2PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.ahmedA1PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.ahmedA2PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.ahmedHPathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.ahmedMPathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.ahmedE1PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.ahmedE2PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.ahmedD1PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.ahmedD2PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.habuwnyHPathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.habuwnyA1PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.habuwnyA2PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.habuwnyB1PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.habuwnyB2PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.habuwnyUPathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.habuwnyWPathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.habuwnyNPathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.habuwnyY1PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    })
    .from('.habuwnyY2PathMask', {
      duration,
      drawSVG: '0% 0%',
      stroke: '#FFF',
      stagger: {
        each: 6,
      },
      ease: 'power1.inOut',
    });

  return tl;
};
