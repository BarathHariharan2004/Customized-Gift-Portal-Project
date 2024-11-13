// GiftPortal.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {FaSearch } from 'react-icons/fa';
import api from '../src/api/user';
import './App.css';

const GiftPortal = ({ isLoggedIn, setIsLoggedIn, currentUser }) => {
  const [gifts] = useState([
    { id: "1", name: 'Personalized Mug', category: 'Custom', price: 150, image: '/mug.jpg' },
    { id: "2", name: 'Birthday Cake', category: 'Birthday', price: 300, image: '/cake.jpg' },
    { id: "3", name: 'Luxury Pen', category: 'Corporate', price: 50, image: '/pen.jpg' },
    { id: "4", name: 'Custom T-Shirt', category: 'Apparel', price: 200, image: '/tshirt.jpg' },
    { id: "5", name: 'Personalized Frame', category: 'Custom', price: 250, image: '/photo-frame.jpg' },
    { id: "6", name: 'Scented Candle', category: 'Home', price: 100, image: '/candle.jpg' },
    { id: "7", name: 'Bluetooth Speaker', category: 'Electronics', price: 600, image: '/speaker.jpeg' },
    { id: "8", name: 'Travel Journal', category: 'Stationery', price: 150, image: '/jor.jpg' },
    { id: "9", name: 'Succulent Plant', category: 'Home Decor', price: 100, image: '/plant.jpg' },
    { id: "10", name: 'Artisan Chocolate', category: 'Food', price: 350, image: '/choco.jpg' },
    { id: "11", name: 'Birthstone Ring', category: 'Jewels', price: 950, image: '/ring.jpg' },
    { id: "12", name: 'Cutting Board', category: 'Cuttlary', price: 130, image: '/cb.jpg' },
    { id: "13", name: 'Passport Holder', category: 'Travel', price: 100, image: '/passporth.jpg' },
    { id: "14", name: 'Sunglasses', category: 'Fashion', price: 80, image: '/sunglass.jpg' },
    { id: "15", name: 'Power Bank', category: 'Gadgets', price: 550, image: '/powerbank.jpg' },
    { id: "16", name: 'Desk Nameplate', category: 'Stationary', price: 300, image: '/nameplate.jpeg' },
    { id: "17", name: 'Custom Golf Balls', category: 'Sports', price: 200, image: '/golfball.jpg' },
    { id: "18", name: 'Pet Collar', category: 'Pets', price: 750, image: '/petcollar.jpg' },
    { id: "19", name: 'Engraved Keychain', category: 'Items', price: 100, image: '/keychain.jpg' },
    { id: "20", name: 'Picnic Blanket', category: 'Outdoors', price: 200, image: '/blanket.jpg' },
    { id: "21", name: 'Custom Name Puzzle', category: 'Kids', price: 400, image: '/namepuzzle.jpg' },
    { id: "22", name: 'Movie Night Kit', category: 'Movie', price: 500, image: '/mnk.jpg' },
    { id: "23", name: 'Garden Tools', category: 'Garden', price: 200, image: '/garden.jpg' },
    { id: "24", name: 'Custom Phone Case', category: 'Tech', price: 230, image: '/case.jpg' }
  ]);

  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartVisible, setIsCartVisible] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); 
    localStorage.removeItem('currentUserId'); 
    navigate('/'); 
 };
  useEffect(() => {
  if (isLoggedIn) {
    const fetchCartItems = async () => {
      try {
        const currentUserId = localStorage.getItem('currentUserId'); 
        const response = await api.get(`/carts?userId=${currentUserId}`); 
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };
    fetchCartItems(); 
  }
}, [isLoggedIn]);
  const handleAddToCart = async (gift) => {
    console.log(`Attempting to add item: ${gift.name} (ID: ${gift.id}) to cart.`);
    
    const existingItem = cart.find(item => item.id === gift.id);
    let updatedCart;

    if (existingItem) {
        updatedCart = cart.map(item =>
            item.id === gift.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        console.log(`Updating item with ID: ${existingItem.id}`);
        try {
            const response = await api.put(`/carts/${existingItem.id}`, { ...existingItem, quantity: existingItem.quantity + 1 });
            console.log('Cart updated successfully:', response.data);
        } catch (error) {
            console.error('Error updating cart:', error.response ? error.response.data : error.message);
        }
    } else {
        updatedCart = [...cart, { ...gift, quantity: 1 }];
        try {
            const response = await api.post('/carts', { ...gift, quantity: 1 });
            console.log('New item added to cart successfully:', response.data);
        } catch (error) {
            console.error('Error adding new item to cart:', error.response ? error.response.data : error.message);
        }
    }
    setCart(updatedCart);
};
const handleSubFromCart = async (gift) => {
  console.log(`Attempting to subtract item: ${gift.name} (ID: ${gift.id}) from cart.`);
  
  const existingItem = cart.find(item => item.id === gift.id);
  let updatedCart;

  if (existingItem) {
      if (existingItem.quantity === 1) {
          updatedCart = cart.filter(item => item.id !== gift.id);
          try {
              const response = await api.delete(`/carts/${existingItem.id}`);
              console.log('Item removed from cart:', response.data);
          } catch (error) {
              console.error('Error removing item from cart:', error.response ? error.response.data : error.message);
          }
      } else {
          updatedCart = cart.map(item =>
              item.id === gift.id ? { ...item, quantity: item.quantity - 1 } : item
          );
          console.log(`Updating item with ID: ${existingItem.id}`); 
          try {
              const response = await api.put(`/carts/${existingItem.id}`, { ...existingItem, quantity: existingItem.quantity - 1 });
              console.log('Cart updated successfully:', response.data);
          } catch (error) {
              console.error('Error updating cart:', error.response ? error.response.data : error.message);
          }
      }
  } else {
      updatedCart = [...cart, { ...gift, quantity: 1 }];      
      try {
          const response = await api.post('/carts', { ...gift, quantity: 1 });
          console.log('Item added to cart successfully:', response.data);
      } catch (error) {
          console.error('Error adding new item to cart:', error.response ? error.response.data : error.message);
      }
  }
  setCart(updatedCart);
};

  const handleRemoveFromCart = async (itemId) => {
    try {
      await api.delete(`/carts/${itemId}`); 
      setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
      console.log(`Item with ID ${itemId} removed from cart.`);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };
const toggleCartVisibility = () => {
  setIsCartVisible(!isCartVisible);
};
  const filteredGifts = gifts.filter(gift => gift.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  const totalItemCount = cart.reduce((count, item) => count + item.quantity, 0);
  return (
<div style={{ backgroundImage: "url('https://img.freepik.com/free-photo/top-view-yellow-flower-decorative-wrapped-present-with-copy-space_23-2148102839.jpg?t=st=1729702081~exp=1729705681~hmac=169bff2e860e287e038a5a69e8ec9069ce8b60ef2f1dc497962b647a538b42b8&w=1380')",backgroundAttachment: 'fixed',backgroundSize: 'cover',backgroundPosition: 'center'}}>
      <nav style={{
            background: 'linear-gradient(to right, #2563eb, #6b21a8)',padding: '1rem',boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'}}>
        <ul style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <li style={{color: 'white', fontWeight: 'bold', fontSize: '1.125rem', textDecoration:'none' }}>CityGifts</li>
          <li style={{display: 'flex', gap: '1rem'}}>
          <Link to="/gift" style={{ color: 'white', display: 'flex', alignItems: 'center', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.color = '#E5E7EB'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Home</Link>
          <Link to="/contact" style={{ color: 'white', display: 'flex', alignItems: 'center', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.color = '#E5E7EB'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>Contact Us</Link>           
          <Link to="/about" style={{ color: 'white', display: 'flex', alignItems: 'center', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.color = '#E5E7EB'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>About Us</Link>
          <button onClick={toggleCartVisibility} style={{ color: 'white', display: 'flex', alignItems: 'center', background: 'none', fontSize: '1rem',border: 'none', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.color = '#E5E7EB'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>
              {isCartVisible ? 'Hide Cart' : 'Show Cart'}
          </button>
          <button onClick={handleLogout} style={{ backgroundColor: '#E53E3E',color: 'white',borderRadius: '0.375rem',padding: '0.5rem 1rem', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#C53030'}onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#E53E3E'} >Logout</button>
          </li>
        </ul>
      </nav>
      {isLoggedIn ? (
        <div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0'}} className="search-bar">
            <input
              type="text"
              placeholder="Search gifts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{border: '1px solid #D1D5DB',borderRadius: '0.375rem', padding: '0.5rem', width: '50%',outline: 'none',boxShadow: '0 0 0 2px rgba(37, 99, 235, 0.5)',transition: 'all 0.2s' }}/>
            <button style={{backgroundColor: '#2563EB',color: 'white', borderRadius: '0 0.375rem 0.375rem 0',padding: '0.5rem 1rem', transition: 'background-color 0.2s',cursor: 'pointer'}}onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1D4ED8')}onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2563EB')} onFocus={(e) => {e.currentTarget.style.boxShadow = '0 0 0 2px rgba(37, 99, 235, 0.5)'; }}onBlur={(e) => {e.currentTarget.style.boxShadow = 'none'; }}>
                <FaSearch />
            </button>
          </div>
          {/* Cart display */}
          <div style={{position: 'fixed',top: '90px', right: '20px',padding: '1rem',backgroundColor: 'white',boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',borderRadius: '0.5rem',transition: 'transform 0.3s ease, opacity 0.3s ease', transform: isCartVisible ? 'translateY(10px)' : 'translateY(-10px)', opacity: isCartVisible ? 1 : 0,maxHeight: '400px', overflowY: 'auto',width: '300px',maxWidth: '90%',zIndex: 1000,visibility: isCartVisible ? 'visible' : 'hidden'}}>
             <div className="cart">
                <h2 style={{ fontWeight: '600', marginBottom: '16px' }}>Your Cart</h2>
              {cart.length > 0 ? (
                cart.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #D1D5DB', padding: '8px 0' }}>
                    <div>
                    <h3 style={{ fontWeight: '500' }}>{item.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Quantity: {item.quantity}</p>
                    <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Price per item: ₹{item.price}</p>
                    <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Total Price for this item: ₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => handleAddToCart(item)} style={{ backgroundColor: '#48BB78', color: 'white', borderRadius: '0.375rem', padding: '0.5rem ', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#38A169'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#48BB78'}>+</button>
                    <button onClick={() => handleSubFromCart(item)} style={{ backgroundColor: '#2563EB', color: 'white', borderRadius: '0.375rem', padding: '0.5rem 0.7rem', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1D4ED8'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}>-</button>
                    <button onClick={() => handleRemoveFromCart(item.id)} style={{ backgroundColor: '#C72A2A', color: 'white', borderRadius: '0.375rem', padding: '0.5rem', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B91C1C'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C72A2A'}>Remove</button>
                      </div>
                  </div>
                ))
              ) : (
                <p style={{ color: '#4B5563' }}>Your cart is empty.</p>
              )}
              {cart.length > 0 && (
                <div style={{ textAlign:"center",marginTop: '1rem' }}>
                  <h3 style={{ fontWeight: '600' }}>Total Items in Cart: {totalItemCount}</h3>
                  <h3 style={{ fontWeight: '600' }}>Total Amount to Pay: ₹{cartTotal}</h3>
                  <button 
                    onClick={() => navigate('/payment', { state: { totalAmount: cartTotal, cartItems: cart } })} 
                    style={{ backgroundColor: '#48BB78', color: 'white', borderRadius: '0.375rem', padding: '0.5rem', cursor: 'pointer', transition: 'background-color 0.2s' }}
                    >
                    Pay Now
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* Gift list display */}
          <div style={{ textAlign:"center",marginTop: '1.5rem', marginBottom: '1.5rem',marginRight:'1.5rem',marginLeft:'1.5rem', display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', gap: '1.5rem' }}>
          {filteredGifts.length > 0 ? (
              filteredGifts.map(gift => (
                <div key={gift.id} style={{ padding:"15px",backgroundColor:"white",border: '1px solid #e5e7eb', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
                  <img src={gift.image} alt={gift.name} style={{ width: '100%', height: '10rem', objectFit: 'cover' }} />
                  <div className="p-4">
                  <h3 style={{ textAlign:"center",fontWeight: '600', fontSize: '0.875rem' }}>{gift.name}</h3>
                  <p style={{ color: '#4B5563' }}>Price per item: ₹{gift.price}</p>
                  <div style={{ marginTop: '0.5rem' }}>
                  <button onClick={() => handleAddToCart(gift)} style={{ backgroundColor: '#DC2626', color: 'white', borderRadius: '0.375rem', padding: '0.5rem 1rem', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B91C1C'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DC2626'}>Add to Cart</button> 
                   </div>
                  </div>
                </div>
              ))
            ) : (
              <h2 style={{ textAlign: 'center', fontSize: '1.125rem', display: 'flex', justifyContent: 'center' }}>No Items Found. Try searching for something else!</h2>
            )}
          </div>
        </div>
      ) : (
        <h2 style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', fontSize: '1.125rem' }}>Please log in to view gifts.</h2>
      )}
    </div>
  );
};
export default GiftPortal;
