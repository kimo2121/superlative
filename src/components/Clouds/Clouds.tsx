import React from "react";
import "./styles.css";
import cloud from "../../assets/cloud.png";

const Clouds = ({ className, id }: any) => {
  return <img id={id} src={cloud} alt="" className={`${className} clouds`} />;
};

export default Clouds;
