
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ContactInfoView = ({ contact }) => {
  const router = useRouter();

  if (!contact) {
    return (
      <div><p>Loading...</p></div>
    );
  }

  return (
    <div>
      <h1>Contact Info View</h1>
      <Link href="/contact-list"><a className="btn btn-primary">Back</a></Link>

      <div className="header">
        <div> <h1>Name</h1> {contact.name} </div>
        <div> <h2>Profile Pic</h2> {contact.image}</div>
        <div><h3>Email</h3>{contact.email}</div>
        <div><h4>Phone</h4>{contact.phone_number}</div>
      </div>
    </div>
  );
};

export default ContactInfoView;
