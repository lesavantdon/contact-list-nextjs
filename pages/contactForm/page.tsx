import React from 'react';
import ContactForm from './ContactForm';

const ContactFormPage = ({ addContact }) => {
  return (
    <div>
      <h1> Contact Form Page </h1>
      <ContactForm addContact = {addContact} />
    </div>
  );
};

export default ContactFormPage;