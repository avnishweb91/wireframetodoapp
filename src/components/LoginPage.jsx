import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if the username and password are correct (dummy check for demonstration)
    if (username === 'user' && password === 'password') {
      // Redirect to the home page
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
