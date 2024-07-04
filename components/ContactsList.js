import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styles from '@/styles/page.module.css';

const ContactsList = ({ contacts }) => {
  const router = useRouter();

  const handleContactClick = (id) => {
    router.push(`/contactInfo/${id}`);
  };
  const handleEditClick = (id) => {
    router.push(`/editContact/${id}`);
  };

  return (
    <ul className={styles.contactsList}>
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className={styles.contactsListItem}
          onClick={() => handleContactClick(contact.id)}
        >
          <div>
            <img
              src={contact.image_url}
              className={styles.circularImage}
              style={{ width: '50px', height: '50px' }}
            />
          </div>
          <span>{contact.name}</span>
          <span>{contact.email}</span>
          <span>{contact.phone_number}</span>
          
          <button onClick={() => handleEditClick(contact.id)} className={styles.editButton}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      phone_number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactsList;
