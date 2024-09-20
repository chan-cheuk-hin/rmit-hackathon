import { Link } from 'react-router-dom';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/NavBar.css';

const NavBar = () => {
	return (
		<Navbar bg='dark' data-bs-theme='dark'>
			<Container>
				<Navbar.Brand href='home'>Expo Connect</Navbar.Brand>
				<Nav className='me-auto'>
					<Link className='nav-link' href='home'>
						Home
					</Link>
					<Link className='nav-link' href='profile'>
						Profile
					</Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;
