import React, { useRef, useState } from "react";
import "./styles.css";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";
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
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }
  return (
    <div className={navbar ? "navbar height" : "navbar"}>
      <div className="web-nav">
        <div></div>
        <div className="nav-links">
          <Link activeClass="active" smooth={true} duration={800} to="Home">
            HOME
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="About">
            ABOUT
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="Team">
            ROADMAP
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="Roadmap">
            TEAM
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="Roadmap">
            PERKS
          </Link>
        </div>
        <div className="external-links">
          <SimpleModal />
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <FaDiscord />
          </a>
        </div>
      </div>
      <div className="slide-menu">
        <div className="slide-outter">
          <div></div>
          <div className="mob-menu-btn">
            <HiMenu
              color="black"
              onClick={toggleAccordion}
              className={menu ? "slide-menu-icon active" : "slide-menu-icon"}
            />
          </div>
        </div>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <Link activeClass="active" smooth={true} duration={800} to="Home">
            HOME
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="About">
            ABOUT
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="Team">
            ROADMAP
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="Roadmap">
            TEAM
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="Roadmap">
            PERKS
          </Link>
          <div className="external-links">
            <SimpleModal />
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
