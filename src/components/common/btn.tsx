import React, { MouseEventHandler } from "react";
import { CategoryHead } from "../../state/types";
interface BtnProps {
  border: string;
  color: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: MouseEventHandler;
  onMouseOver?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  radius: string;
  width?: string;
  padding?: string;
  classes?: string;
  type: CategoryHead;
  createREF: any;
  // ref?
}

export const Button = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  onMouseLeave,
  onMouseOver,
  padding,
  classes,
  type,
  createREF,
}: BtnProps) => {
  // const createREF = () => {
  //   createRef();
  // };
  return (
    <button
      ref={createREF}
      className={classes}
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
        padding: padding,
      }}
    >
      <span typeof={type}> {children}</span>
    </button>
  );
};
