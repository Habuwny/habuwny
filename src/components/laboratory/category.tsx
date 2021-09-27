import { RoundedButton } from "../common/rounded-button";
import { useTypedSelector } from "../../hooks";
import { themColor } from "../../infra/themes";
import { useEffect } from "react";
import { laboratoryCatagorySetts } from "../../helpers/components/laboratory/catagory-setts";

export const LaboratoryCategory = () => {
  const theme = useTypedSelector((state) => state.theme.currentTheme);
  const colors = themColor(theme);
  useEffect(() => {
    laboratoryCatagorySetts(colors);
  }, []);
  return (
    <div className={"laboratoryCategory"}>
      <div className={"laboratoryCategory-buttons"}>
        <span>
          <RoundedButton name={"Show All"} type={"small"} />
        </span>
        <span className={"laboratoryCategory-buttons__front-end"}>
          <RoundedButton name={"Front-End"} type={"small"} />
          <div className={"laboratoryCategory-buttons__front-end-list"}>
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
              className={"laboratoryCategory-buttons__front-end__list-react"}
            >
              Html
            </span>
            <span
              className={"laboratoryCategory-buttons__front-end__list-react"}
            >
              Css/Scss
            </span>
          </div>
        </span>
        <span className={"laboratoryCategory-buttons__back-end"}>
          <RoundedButton name={"Back-End"} type={"small"} />
          <div className={"laboratoryCategory-buttons__back-end-list"}>
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
        </span>
        <span className={"laboratoryCategory-buttons__tools"}>
          <RoundedButton name={"Tools"} type={"small"} />
          <div className={"laboratoryCategory-buttons__tools-list"}>
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
