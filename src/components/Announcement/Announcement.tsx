import React from "react";
import "./styles.css";
import ColorLogo from "../../assets/ColorLogo.png";

const Announcement = () => {
  return (
    <div className="ann-ment">
      <div className="img-headline">
        <img src={ColorLogo} alt="" />
        <h1>MINT DATE - ANNOUNCEMENT</h1>
      </div>
      <p className="second-headline">
        <span>PRE-SALE </span>- 2000 NFTS' CAP2 MINTS EACH
        <br />
        WHITELIST ONLY
        <br />
        <strong> DURATION:</strong>
        20 HOURS:
      </p>
      <h1>15 December At 10pm EST</h1>
      <h1>16 December At 3am UTC</h1>
      <h1>16 December At 11am GMT+8</h1>
      <p className="second-headline">
        <span>PUBLIC SALE </span>- REMAINING OF 4.444 NFTS' -
        <br />
        5 MINT EACH -
        <br />
        <strong> DURATION:</strong> TILL SELL OUT 20 HOURS:
      </p>
      <h1>15 December At 10pm EST</h1>
      <h1>16 December At 3am UTC</h1>
      <h1>16 December At 11am GMT+8</h1>
    </div>
  );
};

export default Announcement;
