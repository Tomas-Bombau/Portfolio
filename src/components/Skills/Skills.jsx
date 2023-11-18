import React from "react";
import s from './Skills.module.css'
import javascript from "../../assets/js.png";
import html from "../../assets/html.png";
import css3 from "../../assets/css.png";
import git from "../../assets/git.png";
import sequelize from "../../assets/sequelize.png";
import node from "../../assets/nodejs.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.svg";
import postgres from "../../assets/postgres.svg";
import redux from "../../assets/redux.svg";

const Skills = () => {
  return (
    <div className={s.skills}>
      <img src={html} alt="html" />
      <img src={css3} alt="css3" />
      <img src={javascript} alt="javascript" />
      <img src={react} alt="react" />
      <img src={git} alt="git" />
      <img src={node} alt="node" />
      <img src={sequelize} alt="sequelize" />
      <img src={tailwind} alt="tailwind" />
      <img src={postgres} alt="postgres" />
      <img src={redux} alt="redux" />
    </div>
  );
};

export default Skills;
