// HomePage.js
import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const homePageStyle = {
    backgroundColor: '#f0f0f0', // Custom background color
    color: '#333', // Complementary text color
    padding: '20px',
    textAlign: 'center'
  };

  return (
    <div style={homePageStyle}>
      <h1>Welcome to Our Store</h1>
      <Button variant="primary">Shop Now</Button>
    </div>
  );
};

export default HomePage;
