import { createContext } from "react";

import "./folder.scss";

import { useFolderHooks } from "./_hooks";
import { TFolder, TResFolderHook } from "./_types";
import { FolderProperty } from "./FolderProperty";

export const FolderContext = createContext<TResFolderHook | undefined>(
  undefined
);

export const Folder = ({ title, view = "list", propertyMenu }: TFolder) => {
  const folderHooks = useFolderHooks();

  return (
    <FolderContext.Provider value={{ ...folderHooks, propertyMenu }}>
      <div
        className={`folder folder__${view}`}
        onContextMenu={folderHooks.handleOpenPropertiesTab}
      >
        <div className="folder--layer--wrapper">
          <div className="folder--layer--wrapper--layer1" />
          <div className="folder--layer--wrapper--layer2" />
          <div className="folder--layer--wrapper--layer3" />
        </div>
        <span className="folder--title">{title}</span>

        <FolderProperty />
      </div>
    </FolderContext.Provider>
  );
};
