import { createRef, MutableRefObject, useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks";
import { LaboratoryBTN } from "./laboratoryBTN";
import { CategoryBtnList } from "./categoryBtnList";
import { btnColorHover, laboratoryCategorySetts } from "../../helpers";
import { categoryList } from "../../helpers/components/laboratory/categoryListOver";

export const LaboratoryCategory = () => {
  const [headBtnClicked, setHeadBtnClicked] = useState<boolean>(false);
  const [outerClicked, setOuterClicked] = useState<boolean>(false);
  const [clickedTarget, setClickedTarget] = useState<Element>();
  const refs = {
    allRef: createRef() as MutableRefObject<HTMLInputElement>,
    frontRef: createRef() as MutableRefObject<HTMLInputElement>,
    backRef: createRef() as MutableRefObject<HTMLInputElement>,
    toolsRef: createRef() as MutableRefObject<HTMLInputElement>,
    othersRef: createRef() as MutableRefObject<HTMLInputElement>,
  };
  const theme = useTypedSelector((state) => state.theme.currentTheme).split(
    "_"
  )[0];

  useEffect(() => {
    laboratoryCategorySetts(theme);
    document
      .querySelector(".page__laboratory")!
      .addEventListener("click", (e: Event) => {
        const refsObj = Object.keys(refs);
        // setClickedTarget(clickedTarget + 1);
      });
  }, []);
  const onClick = (target: Element) => {
    if (clickedTarget !== target) {
      btnColorHover(target, "over");
    } else {
      btnColorHover(target, "leave");
    }
    setHeadBtnClicked(true);
    setClickedTarget(target);
  };
  const onMouseOver = (target: Element) => {
    btnColorHover(target, "over");
    categoryList(target, "over");
  };
  const onMouseLeave = (target: Element) => {
    if (headBtnClicked === false) {
      btnColorHover(target, "leave");
    }
    categoryList(target, "leave");
  };

  return (
    <div className={"laboratoryCategory"}>
      <div
        ref={refs.allRef}
        className={"laboratoryCategory__showAll"}
        onClick={() => onClick(refs.allRef.current)}
        onMouseOver={() => onMouseOver(refs.allRef.current)}
        onMouseLeave={() => onMouseLeave(refs.allRef.current)}
      >
        <LaboratoryBTN name={"show All"} />
      </div>
      <div
        className={"laboratoryCategory__front-end"}
        ref={refs.frontRef}
        onClick={() => onClick(refs.frontRef.current)}
        onMouseOver={() => onMouseOver(refs.frontRef.current)}
        onMouseLeave={() => onMouseLeave(refs.frontRef.current)}
      >
        <LaboratoryBTN name={"Front-End"} />
        <CategoryBtnList list={["Javascript", "React", "Html", "Css-Scss"]} />
      </div>
      <div
        className={"laboratoryCategory__back-end"}
        ref={refs.backRef}
        onMouseOver={() => onMouseOver(refs.backRef.current)}
        onMouseLeave={() => onMouseLeave(refs.backRef.current)}
      >
        <LaboratoryBTN name={"Back-End"} />
        <CategoryBtnList
          list={["NodeJS", "Php", "Python", "MongoDB", "SQL", "Postgres"]}
        />
      </div>
      <div
        className={"laboratoryCategory__tools"}
        ref={refs.toolsRef}
        onMouseOver={() => onMouseOver(refs.toolsRef.current)}
        onMouseLeave={() => onMouseLeave(refs.toolsRef.current)}
      >
        <LaboratoryBTN name={"Tools"} />
        <CategoryBtnList list={["Github", "Webstorm", "VSCode", "PyCharm"]} />
      </div>
      <div
        className={"laboratoryCategory__others"}
        ref={refs.othersRef}
        onMouseOver={() => onMouseOver(refs.othersRef.current)}
        onMouseLeave={() => onMouseLeave(refs.othersRef.current)}
      >
        <LaboratoryBTN name={"Others"} />
      </div>
    </div>
  );
};
