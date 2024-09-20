import '../App.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
	return (
		<Navbar bg='dark' data-bs-theme='dark'>
			<Container>
				<Navbar.Brand href='home'>Expo Connect</Navbar.Brand>
				<Nav className='me-auto'>
					<Link className='nav-link' to='home'>
						Home
					</Link>
					<Link className='nav-link' to='profile'>
						Profile
					</Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;
