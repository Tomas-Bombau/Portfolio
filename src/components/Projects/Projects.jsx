import React, { useState } from "react";
import s from "./Projects.module.css";
import imgDeploy from "../../assets/deploy.png";

const Projects = (props) => {
  const { id, title, description, tecnologies, image, deploy } = props;
  return (
    <div
      className={
        id % 2 != 0 ? s.projectsCardContainer : s.projectsCardContainerLeft
      }
    >
      <div className={id % 2 != 0 ? s.projectsInfo : s.projectsInfoLeft}>
        <div>
          <h3>{title}</h3>
          <div className={s.underline1}></div>
          <div className={s.underline2}></div>
        </div>
        <p>{description}</p>
        <p>{tecnologies}</p>
        <div className={id % 2 != 0 ? s.deploy : s.deployLeft}>
          <a href={deploy}>
            <img src={imgDeploy} alt="deploy" />
          </a>
        </div>
      </div>
      <div className={s.projectsImg}>
        <a href={deploy}>
          <img src={image} alt="deploy-icon" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
