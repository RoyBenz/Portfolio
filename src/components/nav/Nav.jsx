import React, { useState } from "react";
import { BiHomeHeart } from "react-icons/bi";
import { FaUserSecret } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { MdOutlineWork } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import "./Nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const activeHomeHandler = () => {
    setActiveNav("#");
  };
  const activeAboutHandler = () => {
    setActiveNav("#about");
  };
  const activeExperienceHandler = () => {
    setActiveNav("#experience");
  };
  const activePortfolioHandler = () => {
    setActiveNav("#portfolio");
  };
  const activeContactHandler = () => {
    setActiveNav("#contact");
  };
  return (
    <nav>
      <a
        href="#"
        onClick={activeHomeHandler}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiHomeHeart />
      </a>
      <a
        href="#about"
        onClick={activeAboutHandler}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserSecret />
      </a>
      <a
        href="#experience"
        onClick={activeExperienceHandler}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={activePortfolioHandler}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <MdOutlineWork />
      </a>
      <a
        href="#contact"
        onClick={activeContactHandler}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
