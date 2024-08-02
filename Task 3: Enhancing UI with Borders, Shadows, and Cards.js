// HomePage.js
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const homePageStyle = {
    backgroundColor: '#f0f0f0',
    color: '#333',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ddd', // Border added
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' // Shadow added
  };

  return (
    <div style={homePageStyle}>
      <h1>Welcome to Our Store</h1>
      <Button variant="primary" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}>Shop Now</Button>
      {/* Card component */}
      <Card style={{ width: '18rem', margin: '20px auto' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Featured Product</Card.Title>
          <Card.Text>
            Check out our latest collection of awesome products!
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePage;
