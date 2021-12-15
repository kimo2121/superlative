import React from "react";
import "./styles.css";
import Fireball from "../../assets/Fireball.png";
import Arura from "../../assets/Arura.png";
import Daxter from "../../assets/Daxter.png";
import Metaman from "../../assets/Metaman.png";
const Team = () => {
  return (
    <div id="Team" className="team">
      <div className="member">
        <div
          style={{
            position: "relative",
          }}
        >
          <div className="hoverable-info">
            <h2>
              <a target="_blank" href="https://www.instagram.com/iiamsd/">
                “Believing <br /> is <br /> achieving”
              </a>
            </h2>
          </div>
          <img src={Fireball} alt="" />
        </div>
        <h1>FIREBALL</h1>
        <h3>visionary</h3>
      </div>
      <div className="member">
        <div style={{ position: "relative" }}>
          <div className="hoverable-info">
            <h2>
              <a
                target="_blank"
                href="https://nl.linkedin.com/in/yasin-tipiler-293120183"
              >
                “It's all about the stats”
              </a>
            </h2>
          </div>
          <img src={Arura} alt="" />
        </div>
        <h1>ARURA</h1>
        <h3>focus</h3>
      </div>
      <div className="member">
        <div style={{ position: "relative" }}>
          <img src={Daxter} alt="" />
          <div className="hoverable-info">
            <h2>
              <a target="_blank" href="https://twitter.com/dax_oss">
                “Colors are happiness”
              </a>
            </h2>
          </div>
        </div>
        <h1>DAXTER</h1>
        <h3>dreamer</h3>
        <div></div>
      </div>
      <div className="member">
        <div style={{ position: "relative" }}>
          <div className="hoverable-info">
            <h2>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/anish-poeran-6860a1157/?originalSubdomain=nl"
              >
                “Wen Moon”
              </a>
            </h2>
          </div>
          <img src={Metaman} alt="" />
        </div>
        <h1>METAMAN</h1>
        <h3>tech ape</h3>
      </div>
    </div>
  );
};

export default Team;
