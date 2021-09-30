import gsap from "gsap";
import { useTypedSelector } from "../../hooks";
import { LaboratoryBTN } from "./laboratoryBTN";
import { CategoryBtnList } from "./categoryBtnList";
import { RGB, RGBA } from "../../tools/rgbToRgba";
import { useEffect } from "react";
export const LaboratoryCategory = () => {
  const theme = useTypedSelector((state) => state.theme.currentTheme);

  const onMouseOver = (e: any) => {
    const btnRGB = gsap.getProperty(e.target, "backgroundColor") as string;
    const bg = RGBA(btnRGB, 0.6);
    gsap.to(e.target, { backgroundColor: bg });

    const list = e.target.parentElement
      ? e.target.parentElement.children[1]
      : "";
    if (list) {
      gsap
        .timeline()
        .to(list, {
          duration: 0.2,
          scaleY: 1,
          transformOrigin: "top",
        })
        .to(list.children, {
          duration: 0.1,
          scale: 1,
          transformOrigin: "center",
        });
    }
  };
  const onMouseLeave = (e: any) => {
    console.log(e.target);
    // if (e.target == "") {
    // }
    // const btnRGB = gsap.getProperty(e.target, "backgroundColor") as string;
    // const bg = RGB(btnRGB);
    // gsap.to(e.target, { backgroundColor: bg });
    // const list = e.target.parentElement
    //   ? e.target.parentElement.children[1]
    //   : "";
    //
    // if (list) {
    //   gsap
    //     .timeline()
    //     .to(list.children, {
    //       duration: 0.1,
    //       scale: 0,
    //       transformOrigin: "center",
    //     })
    //     .to(list, {
    //       duration: 0.2,
    //       scaleY: 0,
    //       transformOrigin: "top",
    //     });
    // }
  };
  return (
    <div className={"laboratoryCategory"}>
      <div className={"laboratoryCategory__showAll"}>
        <LaboratoryBTN
          name={"show All"}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        />
      </div>
      <div className={"laboratoryCategory__front-end"}>
        <LaboratoryBTN
          name={"Front-End"}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        />
        <CategoryBtnList list={["Javascript", "React", "Html", "Css/Scss"]} />
      </div>
      <div className={"laboratoryCategory__back-end"}>
        <LaboratoryBTN
          name={"Back-End"}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        />
        <CategoryBtnList
          list={["NodeJS", "Php", "Python", "MongoDB", "SQL", "PostgreSQL"]}
        />
      </div>
      <div className={"laboratoryCategory__tools"}>
        <LaboratoryBTN
          name={"Tools"}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        />
        <CategoryBtnList list={["Github", "Webstorm", "VSCode", "PyCharm"]} />
      </div>
      <div className={"laboratoryCategory__others"}>
        <LaboratoryBTN
          name={"Others"}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        />
      </div>
    </div>
  );
};
