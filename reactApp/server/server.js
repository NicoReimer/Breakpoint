const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { login } = require('./authController');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// CORS-Optionen
const corsOptions = {
  origin: 'http://87.106.38.117', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Login-Route
app.post('/api/login', login);

app.listen(port, () => {
  console.log(`Server is running on http://87.106.38.117:${port}`);
});