import React, { useEffect, useState } from "react";
import "./styles.css";
import cloud from "../../assets/cloud.png";

const TopClouds = () => {
  const [remove, setremove] = useState(1);
  const [repos, setrepos] = useState(300);
  const [reposY, setrePosY] = useState(1);
  const [rescrollY, setreScrollY] = useState(0);

  window.onscroll = () => {
    const rescrolltop = window.pageYOffset;
    const rewinHeight = window.innerHeight;
    if (rescrolltop <= rewinHeight / 0.5) {
      setreScrollY(rescrolltop);
      setrePosY(1 - rescrollY / (rewinHeight / 0.5));
    } else {
      setrePosY(0);
    }

    return () => (window.onscroll = null);
  };

  useEffect(() => {
    setremove(reposY);
  });

  return (
    <div className="top-cloud">
      <img
        style={{
          position: "absolute",
          top: "-150px",
          right: repos - 300 * remove,
        }}
        src={cloud}
        alt=""
      />
      <img
        style={{
          position: "absolute",
          marginTop: "30%",
          right: repos * remove,
        }}
        src={cloud}
        alt=""
      />
      <img
        style={{
          position: "absolute",
          top: "250px",
          right: repos - 200 * remove,
        }}
        src={cloud}
        alt=""
      />
      <img
        style={{
          position: "absolute",
          marginTop: "-20px",
          right: repos * 0.7 * remove,
        }}
        src={cloud}
        alt=""
      />
      <img
        style={{
          position: "absolute",
          top: "850px",
          right: repos * 1 * remove,
        }}
        src={cloud}
        alt=""
      />
      <img
        style={{
          position: "absolute",
          top: "1000px",
          right: repos * 1.4 * remove,
          zIndex: 0,
        }}
        src={cloud}
        alt=""
      />
    </div>
  );
};

export default TopClouds;
