import {TItem} from "../../data/types";
import React, {ReactNode} from "react";
import {ItemType} from "../../data/enums";

export const transformFormItemsToHTML = (formItems: TItem[]) => {
  const items: ReactNode[] = [];

  formItems.forEach((item) => {
    switch (item.type) {
      case ItemType.Boolean:
        items.push(
          <div className={"inputWrapper"} key={`${item.label}Wrapper`}>
            <label className={"inputLabel"} htmlFor={item.label} key={`${item.label}Label`}>{item.label}</label>
            <input type="checkbox" id={item.label} name={item.label} key={`${item.label}Input`} />
          </div>
        );
        break;
      case ItemType.Date:
        items.push(
          <div className={"inputWrapper"} key={`${item.label}Wrapper`}>
            <label className={"inputLabel"} htmlFor={item.label} key={`${item.label}Label`}>{item.label}</label>
            <input type="date" id={item.label} name={item.label} key={`${item.label}Input`} />
          </div>
        );
        break;
      case ItemType.Number:
        items.push(
          <div className={"inputWrapper"} key={`${item.label}Wrapper`}>
            <label className={"inputLabel"} htmlFor={item.label} key={`${item.label}Label`}>{item.label}</label>
            <input type="number" id={item.label} name={item.label} key={`${item.label}Input`} />
          </div>
        );
        break;
      case ItemType.String:
        items.push(
          <div className={"inputWrapper"} key={`${item.label}Wrapper`}>
            <label className={"inputLabel"} htmlFor={item.label} key={`${item.label}Label`}>{item.label}</label>
            <input type="text" id={item.label} name={item.label} key={`${item.label}Input`} />
          </div>
        );
        break;
      case ItemType.Text:
        items.push(
          <div className={"inputWrapper"} key={`${item.label}Wrapper`}>
            <label className={"inputLabel"} htmlFor={item.label} key={`${item.label}Label`}>{item.label}</label>
            <textarea id={item.label} name={item.label} key={`${item.label}Input`} />
          </div>
        );
        break;
      case ItemType.List:
        if (item.labels) {
          items.push(
            <div className={"inputWrapper"} key={`${item.label}Wrapper`}>
              <label className={"inputLabel"} htmlFor={item.label} key={`${item.label}Label`}>{item.label}</label>
              <div className={"listWrapper"} id={item.label} key={`${item.label}listWrapper`}>
                {item.labels.map(label => (
                  <div className={"listInputWrapper"} key={`${label}listInputWrapper`}>
                    <input type="radio" id={label} name={label} key={`${label}Input`} />
                    <label htmlFor={label} key={`${label}Label`}>{label}</label>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        break;
      case ItemType.Unsupported:
        break;
      default:
        throw new Error(`Not implemented type ${item.type}`);
    }
  });

  return items;
};
