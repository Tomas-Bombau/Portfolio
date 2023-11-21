
//CSS
import s from "./Main.module.css";

//data
import data from "../../data";
import CompetencesContainer from "../Competences/CompetencesContainer";
import PersonalCard from "../PersonalCard/PersonalCard";
import Titles from "../Titles/Titles";
import Skills from "../Skills/Skills";
import ProjectsContainer from "../Projects/ProjectsContainer";
import ScrollButton from "../ScrollButton/ScrollButton";
import Contact from "../Contact/Contact";
import Welcome from "../Welcome/Welcome";

const Main = () => {
  return (
    <main className={s.main}>
      <ScrollButton />
      <section id="home">
        <Welcome />
      </section>
      <section id="about" className={s.backgroundSecondSection}>
        <section className={s.myCompetences}>
          <PersonalCard />
          <CompetencesContainer data={data.competences} />
        </section>
        <section id="skills">
          <Titles title={"Skills"} />
          <Skills />
        </section>
        <section id="projects">
          <Titles title={"Projects"} />
          <ProjectsContainer data={data.projects} />
        </section>
        <section id="contact">
          <Titles title={"Contact me"} />
          <Contact />
        </section>
      </section>
    </main>
  );
};

export default Main;

{
  /* <div className={s.aboutMe}>
          <h3> What I do </h3>
          <div className={s.underline1}></div>
          <div className={s.underline2}></div>
          <p>
            At present time I'm working on a multi-role, as a Web Developer I
            design and create various websites. And as UI/UX Designer I create
            many designs for Web Applications and Mobile applications. I create
            the beauty of the site. I'm responsible for the site's technical
            aspects, such as its performance and capacity, which are measures of
            a website's speed and how much traffic the site can handle. In
            addition, I also create content for the site.
          </p>
        </div> */
}
