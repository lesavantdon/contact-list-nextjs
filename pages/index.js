import React, { useState, useEffect } from 'react';
import { useRouter} from 'next/router';
import styles from '@/styles/page.module.css';
import ContactsList from '@/components/ContactsList';



const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  
  const handleAddContact = () => {
    router.push('/addContact');
  };
  
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('/api/contactsAPI');
        const data = await response.json();
        console.log('Fetched Contacts:', data); // Log fetched contacts
        setContacts(data);
        
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

  fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div>
      <h1>All Contacts</h1>
      <button className={styles.btn} onClick={handleAddContact}>Add Contact</button>
      <div>
        <input
          type="text"
          className={styles.inputText}
          placeholder="Search Contacts"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div style = {{ display: 'flex', justifyContent: 'space-between'}}>
        <h1>Profile Pic</h1>
          <h1>Name</h1>
          <h1>Email</h1>
          <h1> Phone </h1>
          </div>
        
         <ContactsList contacts = {filteredContacts}/>
      </div>
    </div>
  );
};

export default Home;