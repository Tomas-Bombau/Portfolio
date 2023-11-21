import React from 'react'
import s from './Welcome.module.css'

import githublogo from "../../assets/githublogo.png";
import linkedinlogo from "../../assets/linkedinlogo.png";
import twitter from "../../assets/twitter.png";

const Welcome = () => {
  return (
    <div className={s.backgroundFirstSection}>
        <div className={s.headLine}>
          <h1>Tomas Bombau</h1>
        </div>
        <div>
          <ul className={s.socialPlatforms}>
            <li>
              <a
                href="https://www.linkedin.com/in/tom%C3%A1s-ignacio-bombau-049a52139/"
                target="newtab"
              >
                <img src={linkedinlogo} alt="" />
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay=".2s">
              <a href="https://github.com/tomas-bombau" target="newtab">
                <img src={githublogo} alt="" />
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Welcome