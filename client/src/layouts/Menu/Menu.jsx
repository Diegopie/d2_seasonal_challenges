import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';

const Menu = (props) => {

    return (
        <Navbar className='Menu-Container' bg="dark" variant='dark' expand="lg">
          <Container>
            <Navbar.Brand href="/">D2 Seasonal Challenges</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href='/weekly'>Weekly</Nav.Link>
                <Nav.Link href='/activities'>Activities</Nav.Link>
                <Nav.Link href='/xp'>XP</Nav.Link>
                <Nav.Link href='/seasonal-reward'>War Table Upgrade</Nav.Link>
                <Nav.Link href='/time-sensitive'>Time Sensitive</Nav.Link>
                <Nav.Link >Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};

export default Menu;