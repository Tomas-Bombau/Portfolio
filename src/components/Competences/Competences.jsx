import React from "react";
import s from "./Competences.module.css";

const Card = (props) => {
  const { image, title, description } = props;
  return (
    <div className={s.cardContainer}>
      <div className={s.imgContainer}>
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <div className="">
        <div className={s.underline1}></div>
        <div className={s.underline2}></div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
