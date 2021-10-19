import React, { useContext } from 'react';
import { Form, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../../App';
import './Header.css';

const Header = () => {

  const {loggedInUser, setLoggedInUser} = useContext(UserContext)
  let history = useHistory();

  const handleLoginBtn = () => {
      if (loggedInUser.email) {
          setLoggedInUser({})
          history.push('/')
      } else {
          history.push('/login')
      }
  }

    return (

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">VISCAREO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link   onClick={handleLoginBtn}>
               {loggedInUser.email ? `${loggedInUser.name.split(' ')[0]} / Logout` : 'Login'}                       
              </Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
};

export default Header;