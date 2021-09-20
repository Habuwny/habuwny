import gsap from 'gsap';

export const heartsLight = () => {
  const light = (heart: string) => {
    let tl = gsap.timeline();

    tl.fromTo(
      heart,
      {
        opacity: 0.7,
        fill: "random(['#042A2B', '#5EB1BF', '#7209b7', '#f94144', '#00bbf9', '#fee440', '#3a0ca3', '#0ead69', '#ff0054', '#cbf3f0', '#ede7e3', '#5603ad', '#ef9cda', '#00a5e0'])",
        // fill: col,
      },
      {
        opacity: 1,
        duration: 'random([2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6])',
        fill: "random(['#042A2B', '#5EB1BF', '#7209b7', '#f94144', '#00bbf9', '#fee440', '#3a0ca3', '#0ead69', '#ff0054', '#cbf3f0', '#ede7e3', '#5603ad', '#ef9cda', '#00a5e0'])",
        // fill: col,
        yoyo: true,
        repeat: -1,
        repeatRefresh: true,
      }
    );

    return tl;
  };
  let master = gsap.timeline({});
  master.add('start');
  // let master = gsap.timeline({ repeat: -1, repeatRefresh: true });
  master.add(light('#heartLight1'));
  master.add(
    light('#heartLight4'),
    `start+=${gsap.utils.random(0.3, 1.3, 0.2)}`
  );
  master.add(
    light('#heartLight2'),
    `start+=${gsap.utils.random(0.3, 1.3, 0.2)}`
  );
  master.add(
    light('#heartLight8'),
    `start+=${gsap.utils.random(0.3, 1.3, 0.2)}`
  );
  master.add(
    light('#heartLight3'),
    `start+=${gsap.utils.random(0.3, 1.3, 0.2)}`
  );
  master.add(
    light('#heartLight6'),
    `start+=${gsap.utils.random(0.3, 1.3, 0.2)}`
  );
  master.add(
    light('#heartLight7'),
    `start+=${gsap.utils.random(0.3, 1.3, 0.2)}`
  );
  master.add(
    light('#heartLight5'),
    `start+=${gsap.utils.random(0.3, 1.3, 0.2)}`
  );

  return master;
};
