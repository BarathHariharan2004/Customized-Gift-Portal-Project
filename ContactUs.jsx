import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMessage("All fields are required.");
      return;
    }
    alert("Message sent!");
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div style={{
      backgroundImage: "url('https://img.freepik.com/free-photo/top-view-yellow-flower-decorative-wrapped-present-with-copy-space_23-2148102839.jpg?t=st=1729702081~exp=1729705681~hmac=169bff2e860e287e038a5a69e8ec9069ce8b60ef2f1dc497962b647a538b42b8&w=1380')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        maxWidth: '32rem',
        width: '100%'
      }}>
        <h2 style={{
          fontSize: '1.875rem',
          fontWeight: '600',
          textAlign: 'center',
          color: '#4B5563',
          marginBottom: '1.5rem'
        }}>Contact Us</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #D1D5DB',
                borderRadius: '0.5rem',
                outline: 'none',
                transition: 'border-color 0.2s ease-in-out'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3B82F6'} 
              onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #D1D5DB', 
                borderRadius: '0.5rem',
                outline: 'none',
                transition: 'border-color 0.2s ease-in-out'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3B82F6'} 
              onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #D1D5DB', 
                borderRadius: '0.5rem',
                outline: 'none',
                transition: 'border-color 0.2s ease-in-out',
                height: '8rem',
                resize: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
              onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
            />
          </div>
          {errorMessage && <span style={{ display: 'block', color: '#EF4444', fontSize: '0.875rem' }}>{errorMessage}</span>}
          
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#2563EB', 
              color: '#FFFFFF',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease-in-out'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1E40AF'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#2563EB'}
          >
            Send Message
          </button>
        </form>
        
        <p style={{ textAlign: 'center', color:'#4B5563', marginTop:'1.5rem' }}>
          <Link to="/gift" style={{ color:'#3B82F6', textDecoration:'none' }}>Back To Home</Link>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
