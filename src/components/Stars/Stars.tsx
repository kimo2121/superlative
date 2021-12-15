import React from "react";
import "./styles.css";

const Stars = ({ className, img }: any) => {
  return <img src={img} className={`${className} stars`} alt="" />;
};

export default Stars;
