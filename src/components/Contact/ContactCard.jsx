import React from "react";
import s from "./ContactCard.module.css";

const ContactCard = (props) => {
  const { image, title, description, phrase } = props;
  return (
    <div className={s.contactCard}>
      <div>
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <p>
        {description}{" "}
        <div className={s.orientation}>
          <span >{phrase} </span>
        </div>
      </p>
    </div>
  );
};

export default ContactCard;
