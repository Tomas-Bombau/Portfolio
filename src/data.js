import work from "./assets/work.png";
import design from "./assets/design.png";
import teamwork from "./assets/teamwork.png";
import programming from "./assets/programming.png";
import dogsPI from "./assets/dogsPI.jpg";
import ecommerce from "./assets/ecommerce.jpeg";
import adress from "./assets/adress.png";
import email from "./assets/email.png";

const competences = [
  {
    id: 1,
    image: programming,
    title: "Full-Stack",
    description: "Databases, Back and Front. Learning integrally",
  },
  {
    id: 2,
    image: design,
    title: "Front-end",
    description: "Passionate about communication and UI/UX experience",
  },
  {
    id: 3,
    image: work,
    title: "Work hard",
    description: "Always believe in hard-work, persistance and determination",
  },
  {
    id: 4,
    image: teamwork,
    title: "Collaborative",
    description: "Ability to work effectively in a team.",
  },
];

const projects = [
  {
    id: 1,
    image: dogsPI,
    title: "Dogs APP",
    description: "A Single Page Application (SPA) that consumes data from an external API, and allows general and detailed information of more 170 dog breed's to be displayed. Among the functionalities it allows filtering and ordering breeds by different variables. Users can also create theirs own breed.",
    tecnologies: "React, Redux, Express, Node, PostgreSQL",
    deploy: "https://deploy-six-jet.vercel.app/"
  },
  {
    id: 2,
    image: ecommerce,
    title: "E-Commmerce",
    description: "A collaborative Single Page Application (SPA) created as a group project, employing SCRUM methodology. My primary responsibility centered on the front-end, utilizing technologies such as React, Redux, and extensive CSS styling.",
    tecnologies: "React, Redux, Express, PostgreSQL",
    deploy: "https://www.google.com.ar"
  },
];

const contact = [
  {
    id: 1,
    image: adress,
    title: "Current Location",
    description: "Buenos Aires, Argentina",
    phrase: "Serving clients worldwide"
  },
  {
    id: 2,
    image: email,
    title: "Have a question?",
    description: "I am here to help you. ",
    phrase: "Complete the form below."
  },

];

export default { competences, projects, contact };

