import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';
import './App.css';

const About = () => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: "url('https://img.freepik.com/free-photo/top-view-yellow-flower-decorative-wrapped-present-with-copy-space_23-2148102839.jpg?t=st=1729702081~exp=1729705681~hmac=169bff2e860e287e038a5a69e8ec9069ce8b60ef2f1dc497962b647a538b42b8&w=1380')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        maxWidth: '64rem',
        width: '100%',
        margin: '0 1rem'
      }}>
        <h2 style={{
          fontSize: '2.5rem', 
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#4B5563',
          marginBottom: '1.5rem'
        }}>About Our Gift Portal</h2>
        
        <p style={{
          fontSize: '1.125rem', 
          color: '#4B5563', 
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Welcome to our Gift Portal, where we strive to make gift-giving a memorable and personalized experience. Our mission is to provide a wide range of unique and thoughtful gifts that cater to every occasion and preference.
        </p>

        <h3 style={{
          fontSize: '1.5rem', 
          fontWeight: 'semibold',
          color: '#4B5563',
          marginTop: '1.5rem',
          marginBottom: '1rem'
        }}>Our Story</h3>
        
        <p style={{
          color: '#4B5563', 
          lineHeight: 1.6,
          marginBottom: '1.5rem'
        }}>
          Founded in 2023, our gift portal was born out of a passion for creating special moments and bringing joy to people's lives. We believe that a well-chosen gift can strengthen relationships, celebrate milestones, and express heartfelt sentiments.
        </p>

        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'semibold',
          color: '#4B5563', 
          marginTop: '1.5rem',
          marginBottom: '1rem'
        }}>Our Products</h3>
        
        <p style={{
          color: '#4B5563',
          lineHeight: 1.6,
          marginBottom: '1rem'
        }}>
          Our gift selection spans various categories, including:
        </p>
        
        <ul style={{
          listStyleType: 'disc',
          paddingLeft: '1.25rem', 
          marginBottom: '1.5rem'
        }}>
          <li><strong>Custom Gifts:</strong> Personalize mugs, photo frames, and apparel to make them truly one-of-a-kind.</li>
          <li><strong>Occasion-Specific Gifts:</strong> Find the perfect gift for birthdays, anniversaries, weddings, and more.</li>
          <li><strong>Themed Gift Sets:</strong> Explore our curated gift sets tailored to different interests and preferences.</li>
        </ul>

        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'semibold',
          color: '#4B5563', 
          marginTop: '1.5rem',
          marginBottom: '1rem'
        }}>Our Commitment to Quality</h3>
        
        <p style={{
          color: '#4B5563', 
          lineHeight: 1.6,
          marginBottom: '1.5rem'
        }}>
          At our Gift Portal, we are committed to providing high-quality products that meet the highest standards of craftsmanship and durability. We carefully select our suppliers and partners to ensure that every item we offer is made with care and attention to detail.
        </p>

        <h3 style={{
          fontSize: '1.5rem', 
          fontWeight: 'semibold',
          color: '#4B5563',
          marginTop: '1.5rem',
          marginBottom: '1rem'
        }}>Our Customer Service</h3>
        
        <p style={{
          color: '#4B5563', 
          lineHeight: 1.6,
          marginBottom: '1.5rem'
        }}>
          We believe that exceptional customer service is the foundation of a great shopping experience. Our dedicated team is always ready to assist you with any questions or concerns you may have, ensuring that your gift-giving journey is smooth and hassle-free.
        </p>

        <h3 style={{
          fontSize: '1.5rem', 
          fontWeight: 'semibold',
          color: '#4B5563',
          marginTop: '1.5rem',
          marginBottom: '1rem'
        }}>Join Our Community</h3>
        
        <p style={{
          color: '#4B5563', 
          lineHeight: 1.6,
          marginBottom: '1.5rem'
        }}>
          By shopping with us, you become a part of our growing community of gift-givers who share a passion for making others feel special. Follow us on social media to stay updated on our latest products, promotions, and gift-giving inspiration.
        </p>

        <div style={{
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center',
            marginTop:'2rem'
         }}>
          
           <Link to="/gift" style={{ color:'#3B82F6', textDecoration:'none' }}>
             <div style={{ display:'flex', alignItems:'center' }}>
               <FaHome />
               <span style={{marginLeft:'0.5rem'}}>Home</span>
             </div>
           </Link>

           <Link to="/contact" style={{ color:'#3B82F6', textDecoration:'none' }}>
             <div style={{ display:'flex', alignItems:'center' }}>
               <FaPhone />
               <span style={{marginLeft:'0.5rem'}}>Contact Us</span>
             </div>
           </Link>

           <a href="mailto:support@giftportal.com" style={{ color:'#3B82F6', textDecoration:'none' }}>
             <div style={{ display:'flex', alignItems:'center' }}>
               <FaEnvelope />
               <span style={{marginLeft:'0.5rem'}}>Email</span>
             </div>
           </a>
         </div>
      </div>
    </div>
  );
};

export default About;
