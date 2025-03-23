import React, { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const defaultStyles = "px-4 py-2 m-2 rounded-md font-light flex items-center";

export function Button({ variant, text, startIcon, endIcon }: ButtonProps) {
  return (
    <button className={variantClasses[variant] + " " + defaultStyles}>
      <div className="pr-2">{startIcon}</div>
      {text}
      {endIcon}
    </button>
  );
}
