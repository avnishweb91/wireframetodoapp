// RegistrationPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [username, setNewUsername] = useState('');
  const [password, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Perform registration logic (dummy check for demonstration)
    if (username && password) {
      alert('Registration successful!');
      // Redirect to the login page after successful registration
      navigate('/');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <form>
        <label>
          New Username:
          <input type="text" value={username} onChange={(e) => setNewUsername(e.target.value)} />
        </label>
        <br />
        <label>
          New Password:
          <input type="password" value={password} onChange={(e) => setNewPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
