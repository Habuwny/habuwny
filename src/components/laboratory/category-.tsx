import { useEffect } from "react";
import gsap from "gsap";
import { RoundedButton } from "../common/rounded-button";
import { useTypedSelector } from "../../hooks";
import { laboratoryCategorySetts } from "../../helpers/components/laboratory/category-setts";
import { Back } from "gsap/gsap-core";
import { rgbToArr } from "../../tools/rgbToArray";
import { randomId } from "../../tools";

export const LaboratoryCategory = () => {
  const theme = useTypedSelector((state) => state.theme.currentTheme);

  const onMouseOver = (e: any) => {
    const ListTarget = e.target.parentElement.children[1];
    const bgProp = e.target.classList[1];
    const color = rgbToArr([`.${bgProp}`])[0];
    gsap.to(e.target, {
      backgroundColor: `rgb(${color[0] + 20}, ${color[1] + 20}, ${
        color[2] + 20
      })`,
    });
    gsap.to(ListTarget, {
      duration: 0.5,
      scaleY: 1,
      ease: Back.easeOut,
    });
  };
  const onMouseLeave = (e: any) => {
    const ListTarget = e.target.parentElement.children[1];
    const bgProp = e.target.classList[1];
    const color = rgbToArr([`.${bgProp}`])[0];
    gsap.to(e.target, {
      backgroundColor: `rgb(${color[0] - 20}, ${color[1] - 20}, ${
        color[2] - 20
      })`,
    });
    gsap.to(ListTarget, {
      duration: 0.5,
      scaleY: 0,
      transformOrigin: "top center",
      ease: Back.easeIn,
    });
  };
  useEffect(() => {
    let f = theme.split("_")[0];
    // @ts-ignore
    laboratoryCategorySetts(f);
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={"laboratoryCategoryw"}>
      <div className={"laboratoryCategory-buttons"}>
        <span>
          <RoundedButton name={"Show All"} type={"small"} />
        </span>
        <div
          className={"laboratoryCategory-buttons__front-end"}
          // onMouseOver={onMouseOver}
          // onMouseLeave={onMouseLeave}
        >
          <button
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            id={`${randomId()}`}
            className={`roundedButton roundedButton__small`}
          >
            Front-End
          </button>
          {/*<RoundedButton name={"Front-End"} type={"small"} />*/}
          <div
            className={"laboratoryCategory-buttons__front-end-list"}
            onMouseLeave={onMouseLeave}
          >
            <span
              className={
                "laboratoryCategory-buttons__front-end__list-javascript"
              }
            >
              javascript
            </span>
            <span
              className={"laboratoryCategory-buttons__front-end__list-react"}
            >
              React
            </span>
            <span
              className={"laboratoryCategory-buttons__front-end__list-html"}
            >
              Html
            </span>
            <span
              className={"laboratoryCategory-buttons__front-end__list-css/scss"}
            >
              Css/Scss
            </span>
          </div>
        </div>
        <div
          className={"laboratoryCategory-buttons__back-end"}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          <RoundedButton name={"Back-End"} type={"small"} />
          <div
            className={"laboratoryCategory-buttons__back-end-list"}
            onMouseLeave={onMouseLeave}
          >
            <span
              className={"laboratoryCategory-buttons__back-end__list-nodeJS"}
            >
              NodeJS
            </span>
            <span className={"laboratoryCategory-buttons__back-end__list-php"}>
              Php
            </span>
            <span
              className={"laboratoryCategory-buttons__back-end__list-python"}
            >
              Python
            </span>
            <span
              className={"laboratoryCategory-buttons__back-end__list-mongoDB"}
            >
              MongoDB
            </span>
            <span className={"laboratoryCategory-buttons__back-end__list-SQL"}>
              SQL
            </span>
            <span
              className={
                "laboratoryCategory-buttons__back-end__list-Postgresql"
              }
            >
              PostgreSQL
            </span>
          </div>
        </div>
        <span
          className={"laboratoryCategory-buttons__tools"}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          <RoundedButton name={"Tools"} type={"small"} />
          <div
            className={"laboratoryCategory-buttons__tools-list"}
            onMouseLeave={onMouseLeave}
          >
            <span className={"laboratoryCategory-buttons__tools-list-github"}>
              Github
            </span>
            <span className={"laboratoryCategory-buttons__tools-list-webstorm"}>
              Webstorm
            </span>
            <span className={"laboratoryCategory-buttons__tools-list-vscode"}>
              VSCode
            </span>
            <span className={"laboratoryCategory-buttons__tools-list-pyCharm"}>
              PyCharm
            </span>
          </div>
        </span>
        <span>
          <RoundedButton name={"Others"} type={"small"} />
        </span>
      </div>
    </div>
  );
};
