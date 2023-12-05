import { MouseEventHandler } from "react";
export interface CustomButtonProps {
    title : string;
    containerStyles: string;
    btnType? : "button" | "submit";
    textStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;

}