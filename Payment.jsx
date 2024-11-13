import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const { totalAmount } = location.state || {}; 

  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');

  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment processed successfully!');
    navigate('/gift'); 
  };

  return (
    <div style={{ display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',minHeight: '100vh',backgroundColor: '#F7FAFC', backgroundImage: "url('https://img.freepik.com/free-photo/top-view-yellow-flower-decorative-wrapped-present-with-copy-space_23-2148102839.jpg?t=st=1729702081~exp=1729705681~hmac=169bff2e860e287e038a5a69e8ec9069ce8b60ef2f1dc497962b647a538b42b8&w=1380')",backgroundSize: 'cover',backgroundPosition: 'center'}}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Payment Information</h1>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Total Amount: ₹{totalAmount}</h2>
      <div style={{backgroundColor: '#FFFFFF',padding: '1.5rem',borderRadius: '0.5rem',boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',width: '100%',maxWidth: '28rem'}}>
        <form onSubmit={handlePayment}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#4A5568' }}>Payment Method</label>
            <select 
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={{marginTop: '0.25rem',display: 'block',width: '100%',borderColor: '#D1D5DB',borderRadius: '0.375rem',padding: '0.5rem'}}required>
              <option value="">Select Payment Method</option>
              <option value="Card">Credit/Debit Card</option>
              <option value="UPI">UPI</option>
            </select>
          </div>
          {paymentMethod === 'Card' && (
            <>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#4A5568' }}>Card Number</label>
                <input 
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  maxLength={16} 
                  style={{marginTop: '0.25rem',display: 'block',width: '100%',borderColor: '#D1D5DB', borderRadius: '0.375rem',padding: '0.5rem'}}placeholder="1234 5678 9012 3456"required
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#4A5568' }}>Cardholder Name</label>
                <input 
                  type="text"
                  value={cardHolderName}
                  onChange={(e) => setCardHolderName(e.target.value)}
                  style={{
                    marginTop: '0.25rem',
                    display: 'block',
                    width: '100%',
                    borderColor: '#D1D5DB', 
                    borderRadius: '0.375rem',
                    padding: '0.5rem'
                  }}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#4A5568' }}>CVV</label>
                <input 
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  maxLength={3}
                  style={{
                    marginTop: '0.25rem',
                    display: 'block',
                    width: '100%',
                    borderColor: '#D1D5DB',
                    borderRadius: '0.375rem',
                    padding: '0.5rem'
                  }}
                  placeholder="123"
                  required
                />
              </div>
            </>
          )}

          {paymentMethod === 'UPI' && (
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#4A5568' }}>UPI ID</label>
              <input 
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                style={{
                  marginTop: '0.25rem',
                  display: 'block',
                  width: '100%',
                  borderColor: '#D1D5DB',
                  borderRadius: '0.375rem',
                  padding: '0.5rem'
                }}
                placeholder="example@upi"
                required
              />
            </div>
          )}

          

          <button 
            type="submit" 
            style={{
              width:'100%',
              backgroundColor:'#48BB78',
              color:'#FFFFFF',
              borderRadius:'0.375rem',
              padding:'0.5rem 1rem',
              cursor:'pointer',
              transition:'background-color 0.2s ease-in-out'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#38A169'} 
            onMouseLeave={(e) => e.target.style.backgroundColor = '#48BB78'}
          >
            Pay Now
          </button>
        </form>
        
        <p style={{ textAlign:'center', color:'#4A5568', marginTop:'1.5rem' }}>
          <Link to="/gift" style={{ color:'#3B82F6', textDecoration:'none' }}>Back To Home</Link>
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;
