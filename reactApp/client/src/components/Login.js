import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://87.106.38.117:5000/api/login', {
        username,
        password,
      });

      if (response.data.message === 'Login successful') {
        // Speichern des Tokens im Local Storage
        localStorage.setItem('token', response.data.token);
        setIsLoggedIn(true);
        window.location.href = '/dashboard'; // Weiterleitung nach erfolgreichem Login
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Error during login');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;