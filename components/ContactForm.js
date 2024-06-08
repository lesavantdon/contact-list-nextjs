import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import styles from '@/styles/page.module.css';


const AddContactPage = () => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      name,
      email,
      image_url,
      phone_number,
    };

    const response = await fetch('/api/contactsAPI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });

    if (response.ok) {
      setName('');
      setEmail('');
      setImageUrl('');
      setPhoneNumber('');

      router.push('/');
    } else {
      console.error('Failed to add contact');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a New Contact</h1>
      <div className={styles.formGroup}>
        <label>Name</label>
        <input
          className={styles.inputText}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
      </div>
      <div className={styles.formGroup}>
        <label>Email</label>
        <input
          type="email"
          className={styles.inputText}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
      </div>
      <div className={styles.formGroup}>
        <label>Image Url</label>
        <input
          className={styles.inputText}
          value={image_url}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter Image URL"
        />
      </div>
      <div className={styles.formGroup}>
        <label>Phone Number</label>
        <input
          className={styles.inputText}
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter Phone Number"
        />
      </div>
      <button type="submit" className={styles.btn}>ADD NEW CONTACT</button>
      
    </form>
  );
};

export default AddContactPage;