import gsap from 'gsap';

export const meteors = () => {
  let master = gsap.timeline({
    repeat: -1,
    repeatRefresh: true,
    repeatDelay: 10,
  });

  const meteor = (meteorID: string) => {
    let tl = gsap.timeline({});
    tl.fromTo(
      meteorID,
      { opacity: 0, scale: 0.9, y: 0, x: 0 },
      {
        duration: 3,
        opacity: 1,
        scale: 0.001,
        y: '+=3000',
        x: '-=4000',
      }
    ).to('#meteorID', { opacity: 0 });
    return tl;
  };

  master.add(meteor('#meteor1'));
  master.add(meteor('#meteor4'), '+=15');
  master.add(meteor('#meteor2'), '+=15');

  return master;
};
