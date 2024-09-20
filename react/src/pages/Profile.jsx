import '../css/Profile.css';
import { Container, Card, Button } from 'react-bootstrap';

const Profile = () => {
	return (
		<Container>
			<h1>Profile</h1>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' src='https://via.placeholder.com/150' />
				<Card.Body>
					<Card.Title>John Doe</Card.Title>
					<Card.Text>
						Web Developer with a passion for creating responsive and modern web
						applications.
					</Card.Text>
					<Button variant='primary'>Follow</Button>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Profile;
