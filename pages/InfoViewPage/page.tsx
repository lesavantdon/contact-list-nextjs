import React from 'react';
import { useRouter } from 'next/router';
import ContactInfoView from '@/components/ContactInfoView';

const ContactInfoPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Mock function to simulate fetching contact details
  const fetchContactDetails = async () => {
    // Replace this with your actual data fetching logic or use local data
    return {
    };
  };

  const contactDetails = fetchContactDetails(); // Fetch contact details based on the ID

  return <ContactInfoView contact={contactDetails} />;
};

export default ContactInfoPage;