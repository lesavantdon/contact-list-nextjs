// components/ContactForm.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

const ContactForm = ({ addContact }) => {
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
    await addContact(contact);
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
      </div>
      <div>
        <label>Image Url</label>
        <input
          type="text"
          value={image_url}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter Image URL"
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="number"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter Phone Number"
        />
      </div>
      <button type="submit">Add New Contact</button>
      
    </form>
  );
};

export default ContactForm;
