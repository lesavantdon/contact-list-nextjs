import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/page.module.css';

const ContactInfoView = () => {
  const router = useRouter();
  const { id } = router.query;
  const [contact, setContact] = useState(null);


  useEffect(() => {
    const fetchContact = async () => {
      try {
        if (id) {
          const response = await fetch(`/api/contactsAPI/${id}`);
          console.log(`/api/contactsAPI/${id}`);
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
    <div className={styles.contactInfo}>
      <h1>{contact.name}</h1>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone_number}</p>
      <img src={contact.image_url} alt={contact.name} />
    </div>
  );
};

export default ContactInfoView;
