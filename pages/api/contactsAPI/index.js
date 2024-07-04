import contacts from '../../data/contacts';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(contacts);
  } else if (req.method === 'POST') {
    const newContact = req.body;
    contacts.push(newContact);
    res.status(201).json({ contact: newContact });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
