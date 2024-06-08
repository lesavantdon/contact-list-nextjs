// pages/contactinfo/[id].js

import React from 'react';
import { useRouter } from 'next/router';
import ContactInfoView from '@/components/ContactInfoView';

const ContactIdPage = () => {
  const router = useRouter();
  const {id} = router.query;


  const handleHomeClick = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>Contact Info Page</h1>
      <ContactInfoView id = {id}/>
      <button type="button" onClick={handleHomeClick}>Home</button>
    </div>
  );
};

export default ContactIdPage;
