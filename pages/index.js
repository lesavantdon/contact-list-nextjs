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
      <h1 className= {styles.h1}>All Contacts</h1>
     <div className = {styles.buttonContainer}>
      <button className={styles.btn} onClick={handleAddContact}>Add Contact</button>
     </div>
      <div>
        <input
          type="text"
          className={styles.inputText}
          placeholder="Search Contacts"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className = {styles.header} >
        <h2>Profile Pic</h2>
          <h2>Name</h2>
          <h2>Email</h2>
          <h2> Phone </h2>
          </div>
          <hr/>
        
         <ContactsList contacts = {filteredContacts}/>
      </div>
    </div>
  );
};

export default Home;