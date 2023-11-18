import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import s from "./Contact.module.css";
import ContactCard from "./ContactCard";
import data from "../../data";
import ContactCardContainer from "./ContactCardContainer";
import Titles from "../Titles/Titles";

const Contact = () => {
  const [message, setMessage] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [aux, setAux] = useState(false);

  const form = useRef();

  const formHandler = (event) => {
    let property = event.target.name;
    let value = event.target.value;
    setMessage({ ...message, [property]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_krfd05e",
        "template_9n7bjdi",
        form.current,
        "BIuVlxkkx4TlwCP7p"
      )
      .then(
        setMessage({
          user_name: "",
          user_email: "",
          message: "",
        })
      )
      .then(setAux(true));
  };

  return (
    <section className={s.sectionContainer}>
      <div className={s.infoContact}>
        <ContactCardContainer data={data.contact} />
      </div>
      <form ref={form} onSubmit={sendEmail} className={s.formContainer}>
        <input
          onChange={formHandler}
          value={message.user_name}
          type="text"
          name="user_name"
          placeholder="Your name"
        />
        <input
          onChange={formHandler}
          value={message.user_email}
          type="email"
          name="user_email"
          placeholder="Your email"
        />
        <textarea
          onChange={formHandler}
          value={message.message}
          name="message"
          placeholder="Write your message..."
        />
        {!aux && (
          <button className={s.button} type="submit" value="Send">
            Send
          </button>
        )}
        {aux ? (
          <div className={s.success}>
            <Titles double={2} title="Thanks for your message. I'll get in touch with you shortly" />
          </div>
        ) : null}
      </form>
    </section>
  );
};

export default Contact;
