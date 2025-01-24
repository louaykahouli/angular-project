const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

// Inscription
router.post('/register', async (req, res) => {
 
  const { fullname, CIN, email, number, password } = req.body;
 
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ fullname, CIN, email, number, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error during registration:", error); // Log the full error details
    res.status(500).json({ message: 'Server error during registration', error: error.message });  }
});

// Connexion
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;