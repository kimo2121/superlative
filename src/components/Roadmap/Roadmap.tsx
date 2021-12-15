import React from "react";
import Data from "./data";
import "./styles.css";

const Roadmap = () => {
  return (
    <div id="Roadmap" className="roadmap">
      <h1>ROADMAP</h1>
      <div className="roads-container">
        {Data.map((item, index) => (
          <div key={index} className="road">
            <h3>{item.percent}</h3>
            <p>
              {item.text} {item?.key}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
