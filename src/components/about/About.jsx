import React from "react";
import ME from "../../assets/Hacker.jpg";
import { FaAward } from "react-icons/fa";
import { MdOutlineDoneAll } from "react-icons/md";
import "./About.css";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>7 Months</small>
            </article>

            <article className="about__card">
              <MdOutlineDoneAll className="about__icon" />
              <h5>Projects</h5>
              <small>4 Completed Projects</small>
            </article>
          </div>
          <p>
            Since I was 13 years old, I used to spend time sitting behind the
            computer screens and explore it and always try new things on my own.
            Throughout the years I found my self that I am really into computers
            and complex stuff like coding and programming. I feel really excited
            to work as a Web Developer because I am passionate about everything
            coding and programming, I work hard, care about writing clean and
            organzied code, and I genuinely love to learn to reach the highest
            levels in Web Development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
