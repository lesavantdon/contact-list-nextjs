// pages/contactinfo/[id].js

import React from 'react';
import { useRouter } from 'next/router';
import ContactInfoView from '@/components/ContactInfoView';
import styles from '@/styles/page.module.css';

const ContactIdPage = () => {
  const router = useRouter();
  const {id} = router.query;

  return (
    <div>
      

      <h1 className = {styles.h2} >Contact Info Page</h1>
      
      <ContactInfoView id = {id}/>
     
    </div>
  );
};

export default ContactIdPage;
