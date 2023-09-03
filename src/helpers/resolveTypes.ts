import {ButtonType, ItemType} from "../data/enums";

export const resolveButtonType = (buttonType: string): ButtonType => {
  switch (buttonType) {
    case "saveWithReset":
      return ButtonType.SaveWithReset;
    case "reset":
    case "cancel":
      return ButtonType.Reset;
    case "save":
    case "apply":
      return ButtonType.Save;
    default:
      return ButtonType.Unsupported;
  }
};

export const resolveButtonHtmlType = (buttonType: ButtonType) => {
  switch (buttonType) {
    case ButtonType.Reset:
      return "reset";
    case ButtonType.SaveWithReset:
    case ButtonType.Save:
      return "submit";
    case ButtonType.Unsupported:
      return "button";
    default:
      throw new Error(`Not implemented type ${buttonType}`);
  }
};

export const resolveItemType = (buttonType: string): ItemType => {
  switch (buttonType) {
    case "number":
    case "int":
    case "double":
    case "integer":
      return ItemType.Number;
    case "string":
      return ItemType.String;
    case "text":
      return ItemType.Text;
    case "boolean":
    case "bool":
      return ItemType.Boolean;
    case "date":
      return ItemType.Date;
    case "list":
    case "enum":
    case "radio":
      return ItemType.List;
    default:
      return ItemType.Unsupported;
  }
};