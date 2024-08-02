// HomePage.js
import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Add a primary button */}
      <Button variant="primary">Shop Now</Button>
    </div>
  );
};

export default HomePage;
