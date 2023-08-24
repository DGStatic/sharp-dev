"use client";

const CornerButton = ({
  text,
  shadow,
  isOpen,
  setIsOpen,
}: {
  text: string;
  shadow: string;
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}) => {
  return (
    <button
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      data-is-open={isOpen}
      className={`corner-button data-[is-open=true]:${shadow}`}
    >
      {text}
    </button>
  );
};

export default CornerButton;
