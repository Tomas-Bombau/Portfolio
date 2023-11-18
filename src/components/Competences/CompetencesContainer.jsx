import React from "react";
import Competences from "./Competences";
import s from "./CompetencesContainer.module.css"

const CardsContainer = (props) => {
  const { data } = props;

  return (
    <div className={s.cardsContainer}>
      {data.map((e) => {
        return (
          <Competences key={e.id} image={e.image} title={e.title} description={e.description} />
        );
      })}
    </div>
  );
};

export default CardsContainer;
