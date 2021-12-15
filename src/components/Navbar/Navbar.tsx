import React, { useRef, useState } from "react";
import "./styles.css";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";
import { ReactComponent as Instagram } from "../../assets/instagram2.svg";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import SimpleModal from "../Modal/Modal";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [navbar, setNavbar] = useState(false);
  const changeHeight = (): void => {
    if (window.scrollY > 103) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeHeight);

  const content: any = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active-style" : "");
    setHeightState(
      setActive === "active-style" ? "0px" : `${content.current.scrollHeight}px`
    );
  }
  return (
    <div id="Home" className={navbar ? "navbar height" : "navbar"}>
      <div className="web-nav">
        <div></div>
        <div className="nav-links">
          <Link smooth={true} duration={800} to="Home">
            HOME
          </Link>
          <Link smooth={true} duration={800} to="About">
            ABOUT
          </Link>
          <Link smooth={true} duration={800} to="Roadmap">
            ROADMAP
          </Link>
          <Link smooth={true} duration={800} to="Team">
            TEAM
          </Link>
          <Link smooth={true} duration={800} to="Perks">
            BENEFITS
          </Link>
        </div>
        <div className="external-links">
          <SimpleModal />
          <a target="_blank" href="https://twitter.com/SUPERLATIVEAPES">
            <FaTwitter color="#00acee" />
          </a>
          <a target="_blank" href="https://discord.com/invite/superlativeapes">
            <FaDiscord color="#5865F2" />
          </a>
        </div>
      </div>
      <div className="slide-menu">
        <div className="slide-outter">
          <div></div>
          <div className="mob-menu-btn">
            <SimpleModal />
            <HiMenu
              color="black"
              onClick={toggleAccordion}
              className={
                menu ? "slide-menu-icon active-style" : "slide-menu-icon"
              }
            />
          </div>
        </div>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <Link smooth={true} duration={800} to="Home">
            HOME
          </Link>
          <Link smooth={true} duration={800} to="About">
            ABOUT
          </Link>
          <Link smooth={true} duration={800} to="Roadmap">
            ROADMAP
          </Link>
          <Link smooth={true} duration={800} to="Team">
            TEAM
          </Link>
          <Link smooth={true} duration={800} to="Perks">
            BENEFITS
          </Link>
          <div className="external-links">
            <a target="_blank" href="https://twitter.com/SUPERLATIVEAPES">
              <FaTwitter color="#00acee" />
            </a>
            <a
              target="_blank"
              href="https://discord.com/invite/superlativeapes"
            >
              <FaDiscord color="#5865F2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
