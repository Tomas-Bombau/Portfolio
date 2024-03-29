//assets
import s from "./PersonalCard.module.css";
import cv from "../../assets/cv/CV.pdf";
import tomas from "../../assets/me.jpg"

const PersonalCard = () => {
  return (
    <div className={s.personalCardContainer}>
      <div className={s.imagePersonal}>
        <img src={tomas} alt="my-photo" />
      </div>
      <div className={s.infoPersonal}>
        <div className={s.title}>
          <h3>Hello! This is Tomas</h3>
          <div className={s.underline1}></div>
          <div className={s.underline2}></div>
        </div>
        <div>
          <p>
            I am a web developer from Buenos Aires, Argentina. I enjoy building
            everything from small business sites to rich interactive web apps.
            if you are a business seeking a web presence or an employer looking
            to hire, you can get in touch with me{" "}
            <a className={s.linked} href="#contact">
              {" "}
              here
            </a>.
            I design and build digital products with simple and beautiful code.
            I specialize in custom web theme development and love what I do.
          </p>
        </div>
        <div className={s.buttonsToPersonal}>
          <a href={cv} target="_blank">
            See Resume
          </a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
