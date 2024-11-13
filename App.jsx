import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GiftPortal from './GiftPortal';
import ContactUs from './ContactUs';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import PaymentPage from './Payment';
import './App.css';
import './index.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cun, setCurrentusername] = useState();
  const [cup, setCurrentuserpassword] = useState();
  useEffect(() => {
    const loggedInUser = localStorage.getItem('isLoggedIn');
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('iosLoggedIn', true); 
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login sup={setCurrentuserpassword} sun={setCurrentusername} setIsLoggedIn={handleLogin} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/gift" element={<GiftPortal currentusername={cun} currentuserpassword={cup} isLoggedIn={isLoggedIn} setIsLoggedIn={handleLogout} />} />
        <Route path="/contact" element={<ContactUs isLoggedIn={isLoggedIn} setIsLoggedIn={handleLogout}/>} />
        <Route path="/about" element={<About isLoggedIn={isLoggedIn} setIsLoggedIn={handleLogout}/>} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
};
export default App;
