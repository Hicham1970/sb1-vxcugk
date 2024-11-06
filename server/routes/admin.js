import express from 'express';
import { Contact } from '../models/Contact.js';

const router = express.Router();

// Récupérer tous les messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
  }
});

// Marquer un message comme lu
router.patch('/messages/:id', async (req, res) => {
  try {
    const message = await Contact.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour du message' });
  }
});

// Supprimer un message
router.delete('/messages/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Message supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du message' });
  }
});

export { router as adminRouter }; 