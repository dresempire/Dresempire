import React from "react";

export const LineDivider = ({ bgClass, widthClass }) => {
  return (
    <div className={`${widthClass} ${bgClass}`} style={{ height: "2px" }} />
  );
};
