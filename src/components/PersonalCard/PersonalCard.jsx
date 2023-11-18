//assets
import me from "../../assets/man.jpg";
import s from "./PersonalCard.module.css";
import cv from "../../assets/cv/CV.pdf";

const PersonalCard = () => {
  return (
    <div className={s.personalCardContainer}>
      <div className={s.imagePersonal}>
        <img src={me} alt="" />
      </div>
      <div className={s.infoPersonal}>
        <div className={s.title}>
          <h3>Hello! This is Tomas</h3>
          <div className={s.underline1}></div>
          <div className={s.underline2}></div>
        </div>
        <p>
          I am a web developer from Kolkata, India. I enjoy building everything
          from small business sites to rich interactive web apps. if you are a
          business seeking a web presence or an employer looking to hire, you
          can get in touch with me{" "}
          <a className="underline2" href="#contact">
            {" "}
            here.
          </a>{" "}
          I design and build digital products with simple and beautiful code. I
          specialize in custom web theme development and love what I do.
        </p>
        <p>
          Since beginning my journey as a web developer in my college days, I've
          done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops one design problem at a
          time.
        </p>
        <div className={s.buttonsToPersonal}>
          <a
            href={cv}
            target="_blank"
          >
            See Resume
          </a>
          <a href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
