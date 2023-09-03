import React from "react";
import {TButton, TButtonJson, TItem, TItemJson, TJsonInput} from "../data/types";
import {ButtonType, ContentType} from "../data/enums";
import {resolveButtonType, resolveItemType} from "../helpers/resolveTypes";

const useForm = (setSelectedContent: (type: ContentType) => void) => {
  const [jsonText, setJsonText] = React.useState<string>("");
  const [fromTitle, setFormTitle] = React.useState<string>("");
  const [formButtons, setFormButtons] = React.useState<TButton[]>([]);
  const [formItems, setFormItems] = React.useState<TItem[]>([]);

  const handleJsonApply = React.useCallback(() => {
    try {
      const jsonValue: TJsonInput = JSON.parse(jsonText);
      const buttons: TButton[] = [];
      const items: TItem[] = [];

      jsonValue.buttons.forEach((button: TButtonJson) => {
        buttons.push({label: button.label, type: resolveButtonType(button.type)});
      })
      jsonValue.items.forEach((item: TItemJson) => {
        items.push({label: item.label, type: resolveItemType(item.type), labels: item.labels});
      })

      setFormTitle(jsonValue.title ?? "");
      setFormButtons(buttons);
      setFormItems(items);
      setSelectedContent(ContentType.Result);
    } catch {
      alert("Could not parse the given json");
    }
  }, [jsonText, setSelectedContent]);

  const handleFromButtonClicked = (buttonType: ButtonType) => {
    switch (buttonType) {
      case ButtonType.Reset:
        // TODO implement reset
        alert(`Clicked on ${buttonType}.`);
        break;
      case ButtonType.SaveWithReset:
      case ButtonType.Save:
        // TODO implement save
        alert(`Clicked on ${buttonType}`);
        break;
      case ButtonType.Unsupported:
        alert(`No supported action for ${buttonType}`);
        break;
      default:
        throw new Error(`Not implemented type ${buttonType}`);
    }
  };

  return {
    fromTitle,
    formItems,
    formButtons,
    jsonText,
    setJsonText,
    handleJsonApply,
    handleFromButtonClicked,
  }
};

export default useForm;