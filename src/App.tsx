import React, { useEffect, useState } from "react";
import "./App.css";
import Collection from "./components/Collection/Collection";
import Exclusive from "./components/Exclusive/Exclusive";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
import ColorLogo from "../src/assets/ColorLogo.png";
import rainbow from "../src/assets/rainbow.png";
import Mint from "./components/Mint/Mint";
import Clouds from "./components/Clouds/Clouds";
import Stars from "./components/Stars/Stars";
import star1 from "./assets/star1.png";
import unknown from "./assets/unknown.png";
import star2 from "./assets/star2.png";
import star3 from "./assets/star3.png";
import planet from "./assets/planet.png";
import cloud from "./assets/cloud.png";
import Announcement from "./components/Announcement/Announcement";
import Roadmap from "./components/Roadmap/Roadmap";
import TopClouds from "./components/TopClouds/TopClouds";
import CustomizedAccordions from "./components/FAQ/FAQ";

function App() {
  const [move, setMove] = useState(1);
  const [pos, setPos] = useState(300);
  const [posY, setPosY] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  window.onscroll = () => {
    const scrolltop = window.pageYOffset;
    const winHeight = window.innerHeight;
    if (scrolltop <= winHeight / 0.5) {
      setScrollY(scrolltop);
      setPosY(1 - scrollY / (winHeight / 0.5));
    } else {
      setPosY(0);
    }

    return () => (window.onscroll = null);
  };

  useEffect(() => {
    setMove(posY);
  });
  return (
    <div id="pinned-trigger1" className="App">
      <img className="rainbow" src={rainbow} alt="" />
      <Navbar />
      <img className="color-logo" src={ColorLogo} alt="" />
      <img
        className="web-clouds"
        style={{
          position: "absolute",
          top: "300px",
          right: pos * move,
        }}
        src={cloud}
        alt=""
      />
      <img
        className="web-clouds"
        style={{
          position: "absolute",
          top: "600px",
          right: pos * 1.4 * move,
        }}
        src={cloud}
        alt=""
      />
      <img
        className="web-clouds"
        style={{
          position: "absolute",
          marginTop: "450px",
          right: pos * 4.2 * move,
        }}
        src={cloud}
        alt=""
      />
      {/* <img
        className="web-clouds"
        style={{
          position: "absolute",
          marginTop: "620px",
          right: pos + 1000 * move,
        }}
        src={cloud}
        alt=""
      /> */}
      {window.innerWidth < 577 && <TopClouds />}
      <Mint />
      <Collection />
      <img
        className="web-clouds"
        style={{
          position: "absolute",
          top: "1300px",
          right: pos * 2 * move,
        }}
        src={cloud}
        alt=""
      />
      <img
        className="web-clouds"
        style={{
          position: "absolute",
          top: "1500px",
          right: pos * 7 * move,
        }}
        src={cloud}
        alt=""
      />
      {/* <Announcement /> */}
      <Roadmap />
      <Team />
      <div className="stars-container">
        <Stars className="star1" img={star1} />
        <Stars className="star2" img={star2} />
        <Stars className="star3" img={planet} />
        <Stars className="star4" img={star1} />
        <Stars className="star5" img={star3} />
      </div>
      <Exclusive />
      <CustomizedAccordions />
      <Footer />
    </div>
  );
}

export default App;
