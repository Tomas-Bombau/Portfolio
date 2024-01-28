import React from "react";
import s from "./Welcome.module.css";

import githublogo from "../../assets/githublogo.png";
import linkedinlogo from "../../assets/linkedinlogo.png";
import curriculum from "../../assets/cv.png";
import cv from "../../assets/cv/CV.pdf";

const Welcome = () => {
  return (
    <section className={s.backgroundFirstSection}>
      <div className={s.presentationContainer}>
        <p>Hi, my name is</p>
        <div className={s.headLine}>
          <h1>Tomas Bombau</h1>
        </div>
        <div>
          <h2>Front End Developer</h2>
        </div>
        <p>
        I'm 33 years old, living in Buenos Aires, Argentina, with a degree in Communication. I'm passionate about Front-end development, driven by understanding users and providing design and navigability solutions directly from the code. In addition to my love for the front end, I have a solid foundation in backend technologies such as Node.js, Express, and Sequelize. Every day in this tech world presents an opportunity for me to learn and enhance my skills.
        </p>
        <div>
          <ul className={s.socialPlatforms}>
            <li>
              <a
                href="https://www.linkedin.com/in/tom%C3%A1s-ignacio-bombau-049a52139/"
                target="newtab"
              >
                <img src={linkedinlogo} alt="linkeding-logo" />
              </a>
            </li>
            <li>
              <a href="https://github.com/tomas-bombau" target="newtab">
                <img src={githublogo} alt="github-logo"/>
              </a>
            </li>
            <li>
              <a href={cv} target="newtab">
                <img src={curriculum} alt="CV-logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
