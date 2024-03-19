import React from "react";

interface ContactProps {
  contact: {
    id: string;
    name: string;
    email: string;
    image_url: string;
    phone_number: string;
  };
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  const { id, name, email, image_url, phone_number } = contact;
  const hiddenIdStyle: React.CSSProperties = {
    display: "none",
  };

  return (
    <li>
      <span style={hiddenIdStyle}>
        <strong> ID: </strong> {id}
      </span>
      <span>
        <strong> Name:</strong>
        {name} | <strong> Image</strong> {image_url} | <strong> Email </strong>
        {email} | <strong>Number:</strong>
        {phone_number}
      </span>
      <br />
      <img src={image_url} alt={name} />
    </li>
  );
};

export default Contact;
