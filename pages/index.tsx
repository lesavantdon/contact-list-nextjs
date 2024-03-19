// pages/index.js (or Home.js)
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ContactForm from '@/components/ContactForm';
import ContactsList from '@/components/ContactsList';
import styles from '../styles/page.module.css';

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    // Fetch initial contacts when the component mounts
    const fetchContacts = async () => {
      try {
        const response = await fetch('/api/contactsAPI');
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []); // Run once when the component mounts to fetch initial data

  const addContact = async (contact) => {
    try {
      const response = await fetch('/api/contactsAPI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        const addedContactData = await response.json();
        setContacts((prevContacts) => [...prevContacts, addedContactData.contact]);
        setShowContactForm(false);
      } else {
        console.error('Failed to add contact:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const handleAddContact = () => {
    setShowContactForm(true);
  };

  return (
    <>
      <Head>{/* Additional head content if needed */}</Head>
      <main>
        <div>
          <div>
            <div>
              <h1>All Contacts</h1>
              <button onClick={handleAddContact}>Add Contact</button>
              {showContactForm && <ContactForm addContact={addContact} />}
              <div>
                <input type='text' id='post-text' placeholder='Search Contacts' />
              </div>
            </div>
            <div>
              <header>Profile Pic Name Email Phone</header>
            </div>
            <div>
              <ContactsList contacts={contacts} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home; 