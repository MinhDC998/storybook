import { MouseEvent, RefObject } from "react";

export type TFolder = {
  title: string;
  view: "list" | "row";
  itemsLength?: {
    folders: number;
    images: number;
    pdf: number;
    txt: number;
    other: number;
  };
  size?: number;
  onClick?: () => void;
  sharingTo?: string[];
  comments?: string[];
  createdDate?: number;
  modifiedAt?: number;
  thumbImages?: string[];
  tags?: string[];
  propertyMenu?: TFolderPropertyMenu[];
};

export type TResFolderHook = {
  isOpen: boolean;
  handleOpenPropertiesTab: (e: MouseEvent<HTMLDivElement>) => void;
  propsPos: {
    x: number;
    y: number;
  };
  handleClose: () => void;
  propertyMenu?: TFolderPropertyMenu[];
};

export type TFolderProperty = {
  isOpen: boolean;
} & Pick<TResFolderHook, "handleClose" | "propsPos">;

export type TFolderPropertyAlerter = {
  ref: RefObject<HTMLDivElement>;
  sub: string;
} & Omit<TFolderProperty, "propsPos" | "isOpen">;

export type TFolderPropertyMenu = {
  label: string;
  action: () => void;
};
