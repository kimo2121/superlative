import React from "react";
import "./styles.css";
import logo from "../../assets/logo.png";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import opensea from "../../assets/opensea.png";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo" src={logo} alt="" />
      <div className="footer-nav">
        <Link activeClass="active" smooth={true} duration={800} to="Home">
          HOME
        </Link>
        <Link activeClass="active" smooth={true} duration={800} to="About">
          ABOUT
        </Link>
        <Link activeClass="active" smooth={true} duration={800} to="Roadmap">
          ROADMAP
        </Link>
        <Link activeClass="active" smooth={true} duration={800} to="Team">
          TEAM
        </Link>
        <Link activeClass="active" smooth={true} duration={800} to="Perks">
          BENEFITS
        </Link>
      </div>
      <div className="footer-ext-link">
        <a target="_blank" href="https://twitter.com/SUPERLATIVEAPES">
          <img src={twitter} alt="" />
        </a>
        <a target="_blank" href="https://discord.com/invite/superlativeapes">
          <FaDiscord color="white" />
        </a>
        <a target="_blank" href="https://opensea.io/superlativeapes">
          <img src={opensea} alt="" />
        </a>
      </div>
      <p>Copyright © Superlative apes 2021. All rights reserved</p>
    </div>
  );
};

export default Footer;
