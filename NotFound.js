// NotFound.js
import React from 'react';
import { Container, Row, Col, Image, Button, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFound = () => {
  const notFoundStyle = {
    backgroundColor: '#f8f9fa', // Light background color
    color: '#343a40', // Dark text color
    padding: '50px',
    textAlign: 'center'
  };

  return (
    <Container style={notFoundStyle}>
      <Row>
        <Col>
          <h1>404 - Page Not Found</h1>
          <p>Oops! The page you are looking for does not exist.</p>
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Button_stamping_machine,_Henri_Jamorski_Button_Factory,_Paris,_France,_1919_(28206559760).jpg/500px-Button_stamping_machine,_Henri_Jamorski_Button_Factory,_Paris,_France,_1919_(28206559760).jpg" 
            fluid 
            alt="Not Found"
          />
          <div style={{ marginTop: '20px' }}>
            <NavLink href="/" className="btn btn-primary">
              Go to Homepage
            </NavLink>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound
