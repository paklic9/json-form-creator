import {ButtonType, ItemType} from "./enums";

export type TButtonJson = {
  label: string;
  type: string;
}

export type TItemJson = {
  label: string;
  type: string;
  labels?: string[];
}

export type TJsonInput = {
  title?: string;
  buttons: TButtonJson[];
  items: TItemJson[];
}

export type TButton = {
  label: string;
  type: ButtonType;
}

export type TItem = {
  label: string;
  type: ItemType;
  labels?: string[];
}