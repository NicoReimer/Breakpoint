const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');

const login = (req, res) => {
  const { username, password } = req.body;

  console.log('Login versucht mit Benutzer:', username); // Debugging

  const query = 'SELECT id, username, password FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error('Datenbankfehler:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (results.length === 0) {
      console.log('Benutzer nicht gefunden!');
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];

    // Passwortvergleich
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error('Fehler beim Passwortvergleich:', err);
        return res.status(500).json({ message: 'Error comparing passwords' });
      }

      if (isMatch) {
        // Erfolgreicher Login: Generiere ein JWT-Token
        const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret_key', { expiresIn: '1h' });

        return res.status(200).json({
          message: 'Login successful',
          token, // Das Token wird zurückgegeben
        });
      } else {
        console.log('Falsches Passwort');
        return res.status(401).json({ message: 'Incorrect password' });
      }
    });
  });
};

module.exports = { login };