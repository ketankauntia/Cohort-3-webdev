"use client";

import { ReactNode } from "react";
import router from "next/router";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
      // onClick={()=>{router.push("/chat/123")}}
    >
      {children}
    </button>
  );
};
