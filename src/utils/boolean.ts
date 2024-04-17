import { useState } from "react";

type TResBoolean = {
  isOpen: boolean;
  handleToggle: () => void;
  handleClose: () => void;
  handleOpen: () => void;
};

export const useBoolean = (): TResBoolean => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleClose = () => setIsOpen(false);

  const handleOpen = () => setIsOpen(true);

  return {
    isOpen,
    handleToggle,
    handleClose,
    handleOpen,
  };
};
