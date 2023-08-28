"use client";

const CornerButton = ({
  text,
  className,
  isOpen,
  setIsOpen,
}: {
  text: string;
  className: string;
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}) => {
  return (
    <button
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      data-is-open={isOpen}
      className={`corner-button ${className}`}
    >
      {text}
    </button>
  );
};

export default CornerButton;
