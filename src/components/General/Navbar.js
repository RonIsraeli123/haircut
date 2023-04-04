import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import {
  BRAND,
  HOME_NAV,
  ABOUT_NAV,
  WORK_NAV,
  APPOINTMENT_NAV,
  HOME_LOGO,
  ABOUT_LOGO,
  WORK_LOGO,
  APPOINTMENT_LOGO,
} from '../../config/general/navbar/navbar';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed='top'
      expand='md'
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand>
          <strong>{BRAND}</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto' defaultActiveKey='#home'>
            <Nav.Item>
              <Nav.Link as={Link} to='/' onClick={() => updateExpanded(false)}>
                {HOME_LOGO} {HOME_NAV}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/about'
                onClick={() => updateExpanded(false)}
              >
                {ABOUT_LOGO} {ABOUT_NAV}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/project'
                onClick={() => updateExpanded(false)}
              >
                {WORK_LOGO} {WORK_NAV}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/login'
                onClick={() => updateExpanded(false)}
              >
                {APPOINTMENT_LOGO} {APPOINTMENT_NAV}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
