import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../src/api/user';
import './App.css';

const Signup = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    setErrorMessage('');
    try {
      const newUser = { username, password };
      await api.post('/users', newUser, {
        headers: { 'Content-Type': 'application/json' },
      });
      setIsLoggedIn(true);
      navigate('/'); 
    } catch (error) {
      console.error('Error signing up:', error);
      setErrorMessage('Sign up failed. Please try again.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundImage: "url('https://img.freepik.com/free-photo/top-view-yellow-flower-decorative-wrapped-present-with-copy-space_23-2148102839.jpg?t=st=1729702081~exp=1729705681~hmac=169bff2e860e287e038a5a69e8ec9069ce8b60ef2f1dc497962b647a538b42b8&w=1380')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>Sign Up</h2>
        
        <form onSubmit={handleSignup}>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #D1D5DB',
                borderRadius: '0.375rem',
                outline: 'none',
                transition: 'border-color 0.2s ease-in-out'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
              onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #D1D5DB',
                borderRadius: '0.375rem',
                outline: 'none',
                transition: 'border-color 0.2s ease-in-out'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
              onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #D1D5DB',
                borderRadius: '0.375rem',
                outline: 'none',
                transition: 'border-color 0.2s ease-in-out'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
              onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
            />
          </div>

          {errorMessage && <span style={{ color: '#EF4444', fontSize: '0.875rem', marginBottom: '1rem' }}>{errorMessage}</span>}

          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#3B82F6',
              color: '#FFFFFF',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease-in-out'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#2563EB'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#3B82F6'}
          >
            Sign Up
          </button>
        </form>
        
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Already have an account? <Link to="/" style={{ color:'#3B82F6', textDecoration:'none' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
