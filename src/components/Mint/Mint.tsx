import React from "react";
import "./styles.css";
import cloud from "../../assets/cloud.png";
import Clouds from "../Clouds/Clouds";
const Mint = () => {
  const [count, setCount] = React.useState(1);

  return (
    <div className="mint">
      <h1>MINT A SLAPE</h1>
      <p>4444 / 4444 SLAPES LEFT AT 0,069 ETH</p>
      <div className="counter">
        <span>{count}</span>
        <div>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            ▲
          </button>
          <button
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            ▼
          </button>
        </div>
      </div>

      <div className="mint-btn">
        <p>MINT</p>
        <p></p>
      </div>
    </div>
  );
};

export default Mint;
