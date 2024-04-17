import { useRef, useContext } from "react";
import { useOutsideAlerter } from "./_hooks";
import { FolderContext } from "./Folder";

export const FolderProperty = () => {
  const context = useContext(FolderContext);

  const { isOpen, handleClose, propsPos, propertyMenu } = context!;

  const ref = useRef<HTMLDivElement>(null);

  useOutsideAlerter({ ref, handleClose, sub: "folder--properties--menu" });

  return propertyMenu && propertyMenu?.length > 0 ? (
    <div
      className={`folder--properties ${isOpen ? "folder--properties__show" : ""}`}
      style={{ left: propsPos.x, top: propsPos.y }}
      ref={ref}
    >
      {propertyMenu?.map((v, i) => {
        return (
          <div
            key={`${v.label} - ${i}`}
            onClick={v.action}
            className="folder--properties--menu"
          >
            {v.label}
          </div>
        );
      })}
    </div>
  ) : (
    <div />
  );
};
