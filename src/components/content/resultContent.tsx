import React from "react";
import {ButtonType} from "../../data/enums";
import {resolveButtonHtmlType} from "../../helpers/resolveTypes";
import {TButton, TItem} from "../../data/types";
import {transformFormItemsToHTML} from "./helpers";

interface IProps {
  fromTitle: string;
  formItems: TItem[];
  formButtons: TButton[];
  handleFromButtonClicked: (buttonType: ButtonType) => void;
}

const ResultContent: React.FC<IProps> = ({fromTitle, formItems, formButtons, handleFromButtonClicked}) => {
  return (
    <div className={"resultWrapper"}>
      <div className={"title"}>
        {fromTitle}
      </div>
      <form>
        <div className={"fromContent"}>
          {transformFormItemsToHTML(formItems)}
        </div>
        <div className={"fromButtons"}>
          {formButtons.map((button) => (
            <button type={resolveButtonHtmlType(button.type)} key={`${button.label}Button`} onClick={() => handleFromButtonClicked(button.type)}>
              {button.label}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}

export default ResultContent;