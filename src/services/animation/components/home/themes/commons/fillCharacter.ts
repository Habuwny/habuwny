import gsap from 'gsap';
export const fillCharacter = (
  duration: number,
  fill: string,
  baseColor: string
) => {
  const tl = gsap.timeline({});
  tl.to('.helloHPath', { duration, fill })
    .to('.helloE1Path', { duration, fill })
    .to('.helloE2Path', { duration, fill: baseColor })
    .to('.helloL1Path', { duration, fill })
    .to('.helloL2Path', { duration, fill })
    .to('.helloO1Path', { duration, fill: baseColor })
    .to('.helloO2Path', { duration, fill })
    .to('.qumaPath', { duration, fill })
    .to('.myMPath', { duration, fill })
    .to('.myY1Path', { duration, fill })
    .to('.myY2Path', { duration, fill: baseColor })
    .to('.nameNPath', { duration, fill })
    .to('.nameA1Path', { duration, fill })
    .to('.nameA2Path', { duration, fill: baseColor })
    .to('.nameMPath', { duration, fill })
    .to('.nameE1Path', { duration, fill })
    .to('.nameE2Path', { duration, fill: baseColor })
    .to('.isI1Path', { duration, fill })
    .to('.isI2Path', { duration, fill })
    .to('.isS1Path', { duration, fill })
    .to('.isS2Path', { duration, fill: baseColor })
    .to('.ahmedA1Path', { duration, fill })
    .to('.ahmedA2Path', { duration, fill: baseColor })
    .to('.ahmedHPath', { duration, fill })
    .to('.ahmedMPath', { duration, fill })
    .to('.ahmedE1Path', { duration, fill })
    .to('.ahmedE2Path', { duration, fill: baseColor })
    .to('.ahmedD1Path', { duration, fill })
    .to('.ahmedD2Path', { duration, fill: baseColor })
    .to('.habuwnyHPath', { duration, fill })
    .to('.habuwnyA1Path', { duration, fill })
    .to('.habuwnyA2Path', { duration, fill: baseColor })
    .to('.habuwnyB1Path', { duration, fill })
    .to('.habuwnyB2Path', { duration, fill: baseColor })
    .to('.habuwnyUPath', { duration, fill })
    .to('.habuwnyWPath', { duration, fill })
    .to('.habuwnyNPath', { duration, fill })
    .to('.habuwnyY1Path', { duration, fill })
    .to('.habuwnyY2Path', { duration, fill: baseColor });

  return tl;
};
