import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../src/api/user';

const Login = ({ setIsLoggedIn, sup, sun }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get('/users');
      const users = response.data;
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        sup(password);
        sun(user);
        setIsLoggedIn(true);
        navigate(`/gift`);  
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error fetching users', error);
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundImage: `url('https://img.freepik.com/free-photo/top-view-yellow-flower-decorative-wrapped-present-with-copy-space_23-2148102839.jpg?t=st=1729702081~exp=1729705681~hmac=169bff2e860e287e038a5a69e8ec9069ce8b60ef2f1dc497962b647a538b42b8&w=1380')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        maxHeight:'1000px',
        height:'100%'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>Login</h2>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ marginBottom: '0.5rem', fontWeight: '500' }}>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                padding: '0.5rem',
                border: '1px solid #D1D5DB',
                borderRadius: '0.375rem',
                outline: 'none',
                transition: 'border-color 0.2s ease-in-out',
              }}
              onFocus={(e) => e.target.style.borderColor = '#6366F1'}
              onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ marginBottom: '0.5rem', fontWeight: '500' }}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                padding: '0.5rem',
                border: '1px solid #D1D5DB',
                borderRadius: '0.375rem',
                outline: 'none',
                transition: 'border-color 0.2s ease-in-out',
              }}
              onFocus={(e) => e.target.style.borderColor = '#6366F1'}
              onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
            />
          </div>

          {errorMessage && <p style={{ color: '#EF4444', fontSize: '0.875rem', textAlign: 'center' }}>{errorMessage}</p>}

          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#3B82F6',
              color: '#FFFFFF',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease-in-out'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#2563EB'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#3B82F6'}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', textAlign: 'center', color: '#4B5563' }}>
          Don't have an account? <Link to="/signup" style={{ color:'#3B82F6', textDecoration:'none' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
