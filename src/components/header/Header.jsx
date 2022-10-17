import React from "react";
import CTA from "./CTA";
import ME from "../../assets/Hacker.jpg";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Saleh Yassin</h1>
        <h5 className="text-light">Junior Front End Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
