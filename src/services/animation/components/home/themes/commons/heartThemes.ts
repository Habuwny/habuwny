import gsap from "gsap";

export const heartThemes = () => {
  const theming = (theme: string) => {
    let tl = gsap.timeline({});
    tl.fromTo(
      theme,
      { visibility: "hidden", scale: 0.95 },
      {
        duration: 50,
        scale: 1,
        visibility: "visible",
        motionPath: {
          path: "random(['#heartPath2', '#heartPath4', '#heartPath6'])",
          align: "random(['#heartPath2', '#heartPath4', '#heartPath6'])",
          alignOrigin: [0.5, 0.5],
        },
        repeat: -1,
        repeatRefresh: true,
        transformOrigin: "50% 50%",
      }
    );
    return tl;
  };

  let master = gsap.timeline({});
  master.add("star");
  master.add(theming("#moonTheme"));
  master.add(theming("#sunTheme"), "star+=7");
  return master;
};
