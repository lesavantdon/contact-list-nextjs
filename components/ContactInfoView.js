import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styles from '@/styles/page.module.css';

const ContactInfoView = () => {
  const router = useRouter();
  const { id } = router.query;
  const [contact, setContact] = useState(null);

  const handleHomeClick = () => {
    router.push('/');
  };

  useEffect(() => {
    const fetchContact = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/contactsAPI/${id}`);
          if (response.ok) {
            const data = await response.json();
            setContact(data);
          } else {
            console.error(`Failed to fetch contact, status: ${response.status}`);
          }
        }
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    };

    fetchContact();
  }, [id]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.centeredContainer}>
      <div className={styles.contactInfo}>
        <h2>{contact.name}</h2>
        <img src={contact.image_url} style={{ width: '175px', height: '175px' }} />
        <p>{contact.email}</p>
        <p>{contact.phone_number}</p>
        <button type="button" className={styles.homeButton} onClick={handleHomeClick}>
          Home
        </button>
      </div>
    </div>
  );
};

ContactInfoView.propTypes = {
  id: PropTypes.string,
  contact: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    image_url: PropTypes.string,
    phone_number: PropTypes.string,
  }),
};

export default ContactInfoView;
