// import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import { Link, useNavigate } from 'react-router-dom';
import { updateServerData } from '../../api/server-data';
import { useGlobalContext } from '../../context/GlobalContext';

const Menu = (props) => {

  const [, dispatchGlobal] = useGlobalContext();

  const navigate = useNavigate();

  // const [previousPage, setPreviousPage] = useState(null);

  // console.log(activePage);

  if (window.location.pathname === '/') {
    return null;
  }


  const handleClick = (e) => {
    updateServerData().then(data => {
      dispatchGlobal({ type: 'setParsedData', payload: data })

      console.log(e.target.dataset.href);
      navigate(e.target.dataset.href);

    })


    // if (previousPage) {
    //   console.log(previousPage);
    //   previousPage.classList.remove('Menu-Active');
    // }

    // // Style Active Page
    // e.target.classList.add('Menu-Active')
    // console.log(e.target);

    // setPreviousPage(e.target);
 
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
            <Link data-href='/weekly' onClick={(e) => handleClick(e)}>Weekly</Link>
            <Link data-href='/activities' onClick={(e) => handleClick(e)}>Activities</Link>
            <Link data-href='/xp' onClick={(e) => handleClick(e)}>XP</Link>
            <Link data-href='/dust' onClick={(e) => handleClick(e)}>Bright Dust</Link>
            <Link data-href='/seasonal-reward' onClick={(e) => handleClick(e)}>Wish Upgrade</Link>
            <Link data-href='/time-sensitive' onClick={(e) => handleClick(e)}>Time Sensitive</Link>
            <Link onClick={handleLogoff}>{logoutString}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;