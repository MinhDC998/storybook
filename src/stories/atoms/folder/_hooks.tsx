import { MouseEvent, useState, useEffect } from "react";
import { useBoolean } from "../../../utils/boolean";
import { TFolderPropertyAlerter, TResFolderHook } from "./_types";

export const useFolderHooks = (): TResFolderHook => {
  const { isOpen, handleToggle, handleClose } = useBoolean();
  const [propsPos, setPropsPos] = useState({ x: 0, y: 0 });

  const handleOpenPropertiesTab = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleToggle();

    const folder = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - folder.left;
    const y = e.clientY - folder.top;

    setPropsPos({ x, y });
  };

  return {
    isOpen,
    handleOpenPropertiesTab,
    propsPos,
    handleClose,
  };
};

export const useOutsideAlerter = ({
  handleClose,
  ref,
  sub,
}: TFolderPropertyAlerter) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        ref.current &&
        !ref.current.contains(event.currentTarget) &&
        event.target.className !== sub
      ) {
        handleClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);
};
