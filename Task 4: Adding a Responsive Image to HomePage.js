// HomePage.js
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import welcomeImage from './assets/welcome-image.jpg'; // Make sure the path to your image is correct

const HomePage = () => {
  // ... (other styles and components)

  return (
    <div style={homePageStyle}>
      {/* ... (other components) */}
      <Image src={welcomeImage} fluid /> {/* Responsive image */}
    </div>
  );
};

export default HomePage;
