import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/information">정보</Nav.Link>
    </Nav>
  );
};

export default Navigation; 