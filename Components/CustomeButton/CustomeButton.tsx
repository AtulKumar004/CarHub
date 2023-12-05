"use client";
import { CustomButtonProps } from "@/types";
import React from "react";
const CustomButton = ({
  title,
  handleClick,
  containerStyles,
  textStyles,
  btnType
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"  }
      onClick={handleClick}
      className={` flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
    </button>
  );
};

export default CustomButton;
