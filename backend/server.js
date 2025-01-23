const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importez le package cors
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/cochini', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Configuration CORS


app.use(cors()); // Appliquer la configuration CORS

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Routes d'authentification
app.use('/api/auth', authRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});