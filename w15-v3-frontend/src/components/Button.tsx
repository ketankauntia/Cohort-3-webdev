import React, { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const defaultStyles = "px-4 py-2 m-2 rounded-md font-light flex items-center";

export function Button({
  variant,
  text,
  startIcon,
  endIcon,
  onClick,
  fullWidth,
  loading,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        variantClasses[variant] +
        " " +
        defaultStyles +
        `${fullWidth ? " w-full flex items-center justify-center" : ""}  ${loading ? "opacity-45 cursor-not-allowed" : ""}`
      }
      disabled={loading}
    >
      <div className="pr-2">{startIcon}</div>
      {text}
      {endIcon}
    </button>
  );
}
