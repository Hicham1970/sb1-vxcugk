import express from 'express';
import { Contact } from '../models/Contact.js';
import { validateContact } from '../validators/contact.js';

const router = express.Router();


router.post('/', async (req, res) => {
  try {
    console.log('Received request body:', req.body);
    const validatedData = validateContact(req.body);
    console.log('Validated data:', validatedData);
    const contact = new Contact(validatedData);
    await contact.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error details:', error);
    if (error.name === 'ValidationError') {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});


export { router as contactRouter };