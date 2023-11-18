import React from 'react'
import ContactCard from './ContactCard';
import s from './ContactCardContainer.module.css'


const ContactCardContainer = (props) => {
    const { data } = props;
  
    return (
      <div className={s.contactCardsContainer}>
        {data.map((e) => {
          return (
            <ContactCard key={e.id} image={e.image} title={e.title} description={e.description} phrase={e.phrase} />
          );
        })}
      </div>
    );
  };
  
  export default ContactCardContainer;
  