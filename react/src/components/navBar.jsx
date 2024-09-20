import { Link } from "react-router-dom";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="home">Expo Connect</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="profile">Profile</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
  );
};

export default NavBar;