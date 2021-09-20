import gsap from 'gsap';
import { runParticle } from './runParticle';
import { createParticle } from './createParticle';
import { select } from '../imports';
import { clearParticles } from '../imports';

export const drawParticle = (duration: number) => {
  const container = select('.intro__theme');
  const particlesNum = 1000;
  let particlesPool: any;
  particlesPool = createParticle(particlesNum, container, 'particle_draw');
  const onStart = () => {
    gsap.set('#Pen', { clearProps: true });
    clearParticles(
      '.particle_draw, .particle_btn, .particle_switch, .particle_flag'
    );
    particlesPool = createParticle(particlesNum, container, 'particle_draw');
  };
  const onUpdate = () => {
    const obj = { particlesPool, particlesNum };
    runParticle(obj);
  };
  let tl = gsap.timeline({
    onStart,
    onUpdate,
  });
  tl.to('.pContainer, #Pen', {
    duration,
    ease: 'Power1.easeInOut',
    motionPath: {
      path: '.helloHPath',
      align: '.helloHPath',
      autoRotate: false,
      alignOrigin: [0, 1],
    },
  })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.helloE1Path',
        align: '.helloE1Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.helloE2Path',
        align: '.helloE2Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.helloL1Path',
        align: '.helloL1Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.helloL2Path',
        align: '.helloL2Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.helloO1Path',
        align: '.helloO1Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.helloO2Path',
        align: '.helloO2Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.qumaPath',
        align: '.qumaPath',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.myMPath',
        align: '.myMPath',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.myY1Path',
        align: '.myY1Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.myY2Path',
        align: '.myY2Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.nameNPath',
        align: '.nameNPath',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.nameA1Path',
        align: '.nameA1Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.nameA2Path',
        align: '.nameA2Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.nameMPath',
        align: '.nameMPath',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.nameE1Path',
        align: '.nameE1Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.nameE2Path',
        align: '.nameE2Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.isI1Path',
        align: '.isI1Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.isI2Path',
        align: '.isI2Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.isS1Path',
        align: '.isS1Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.isS2Path',
        align: '.isS2Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.ahmedA1Path',
        align: '.ahmedA1Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.ahmedA2Path',
        align: '.ahmedA2Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.ahmedHPath',
        align: '.ahmedHPath',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.ahmedMPath',
        align: '.ahmedMPath',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.ahmedE1Path',
        align: '.ahmedE1Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.ahmedE2Path',
        align: '.ahmedE2Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.ahmedD1Path',
        align: '.ahmedD1Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.ahmedD2Path',
        align: '.ahmedD2Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.habuwnyHPath',
        align: '.habuwnyHPath',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.habuwnyA1Path',
        align: '.habuwnyA1Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.habuwnyA2Path',
        align: '.habuwnyA2Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.habuwnyB1Path',
        align: '.habuwnyB1Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.habuwnyB2Path',
        align: '.habuwnyB2Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.habuwnyUPath',
        align: '.habuwnyUPath',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.habuwnyWPath',
        align: '.habuwnyWPath',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.habuwnyNPath',
        align: '.habuwnyNPath',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.habuwnyY1Path',
        align: '.habuwnyY1Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    })
    .to('.pContainer, #Pen', {
      duration,
      ease: 'Power1.easeInOut',
      motionPath: {
        path: '.habuwnyY2Path',
        align: '.habuwnyY2Path',
        autoRotate: false,
        alignOrigin: [0, 1],
      },
    });
  return tl;
};
