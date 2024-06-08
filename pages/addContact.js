import React from 'react';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/router';

const AddContactPage = () => {
  const router = useRouter();

  const handleAddContact = () => {
    // Navigate back to the home page after adding a contact
    router.push('/');
  };

  return (
    <div>

      <ContactForm onAddContact={handleAddContact} />
    </div>
  );
};

export default AddContactPage;
