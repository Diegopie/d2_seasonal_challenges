import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = (props) => {

  if (window.location.pathname === '/') {
    return null;
  }

  const handleLogoff = () => {
    console.log('logoff');
    localStorage.clear();
    localStorage.setItem('unauth', true)
    document.location.href = '/';
  }

  const logoutString = `Logout - ${localStorage.getItem('username')}`

    return (
        <Navbar id='NavBar' className='Menu-Container' bg="dark" variant='dark' expand="lg">
          <Container>
            <Navbar.Brand href="/weekly"><img src='/icons/favicon.png' className='Menu-Icon' alt='traveler icon'></img>D2 Seasonal Challenges</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to='/weekly'>Weekly</Link>
                <Link to='/activities'>Activities</Link>
                <Nav.Link href='/xp'>XP</Nav.Link>
                <Nav.Link href='/dust'>Bright Dust</Nav.Link>
                {/* <Nav.Link href='/seasonal-reward'>War Table Upgrade</Nav.Link> */}
                <Nav.Link href='/time-sensitive'>Time Sensitive</Nav.Link>
                <Nav.Link onClick={handleLogoff}>{logoutString}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};

export default Menu;