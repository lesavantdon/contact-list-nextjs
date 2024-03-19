import contactsData from '../../data/contactsAPI';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { search } = req.query;

      // Filter contacts based on the search term
      const filteredContacts = contactsData.filter((contact) =>
        Object.values(contact).some((value) =>
          String(value).toLowerCase().includes(search.toLowerCase())
        )
      );

      return res.status(200).json(filteredContacts);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'POST') {
    try {
      // Extract the contact data from the request body
      const contactData = JSON.parse(req.body);

      // Perform the logic to save the contact data to the data/contactsAPI folder or your database
      // For simplicity, let's assume you have a function to save the data
      // SaveContactToDatabase(contactData);

      // Respond with a success message or the saved contact data
      return res.status(200).json({ message: 'Contact added successfully', contact: contactData });
    } catch (error) {
      console.error('Error adding contact:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    // Handle other HTTP methods if needed
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
