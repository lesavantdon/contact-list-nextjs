import React from 'react';
import Link from 'next/link';

const ContactsList = ({ contacts, onContactClick }) => {
	return(
		<ul>
			{contacts.map(contact => (
        <li key={contact.id}>
          <Link href={`/contact-info/${contact.id}`}>
            <a onClick={() => onContactClick(contact)}>{contact.name}</a>
          </Link>
        </li>
      ))}
		</ul>
	);
};

export default ContactsList;