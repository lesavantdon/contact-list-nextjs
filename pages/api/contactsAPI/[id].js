import contacts from '../../data/contacts';

export default function handler(req, res) {
  const { id } = req.query; // Extract the ID from the URL parameter
  if (req.method === 'GET') {
    if (id) {
      // Find the contact with the matching ID
      const contact = contacts.find((contact) => contact.id === id);
      if (contact) {
        res.status(200).json(contact);
      } else {
        res.status(404).json({ message: 'Contact not found' });
      }
    } else {
      res.status(400).json({ message: 'ID parameter missing' }); // Handle case where ID is missing in the request
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
