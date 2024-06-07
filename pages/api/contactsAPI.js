let contacts = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;
    if (id) {
      const contact = contacts.find(contact => contact.id === id);
      if (contact) {
        res.status(200).json(contact);
      } else {
        res.status(404).json({ message: 'Contact not found' });
      }
    } else {
      res.status(200).json(contacts);
    }
  } else if (req.method === 'POST') {
    const newContact = req.body;
    contacts.push(newContact);
    res.status(201).json({ contact: newContact });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
