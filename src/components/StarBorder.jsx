import React from "react";
import "./StarBorder.css";

const StarBorder = ({
  color = "#3b82f6",
  speed = "6s",
  children,
}) => {
  return (
    <div
      className="star-border"
      style={{
        "--border-color": color,
        "--animation-speed": speed,
      }}
    >
      <div className="star-border-inner">{children}</div>
    </div>
  );
};

export default StarBorder;
