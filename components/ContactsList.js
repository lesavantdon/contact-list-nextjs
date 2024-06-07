import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/page.module.css';

const ContactsList = ({ contacts }) => {
  const router = useRouter();

  const handleContactClick = (contactId) => {
    router.push(`/contactInfoPage/${contactId}`);
  };

  return (
    
    <ul className={styles.contactsList}>
      {contacts.map(contact => (
        <li
          key={contact.id}
          className={styles.contactsListItem}
          onClick={() => handleContactClick(contact.id)}>
          <img src = {contact.image_url}  style = {{width:'50px', height: '50px'}}/>
          <span>{contact.name}</span>
          <span>{contact.email} </span>
          <span>{contact.phone_number}</span>
        </li>
          
      ))}
    </ul>
  );
};

export default ContactsList;
