import '../App.css';
import { Container, Card, Button, Badge, Row, Col } from 'react-bootstrap';
import TestDatabase from './TestDatabase';

const Profile = () => {
	return (
		<Container>
			<Card className='profile-card'>
				<Card.Body>
					<Card.Title>John Doe</Card.Title>
					<div>
						<Card.Text>Follows:</Card.Text>
						<Badge pill variant='primary'>
							Science
						</Badge>
						<Badge pill variant='secondary'>
							Technology
						</Badge>
						<Badge pill variant='success'>
							Art
						</Badge>
					</div>
				</Card.Body>
			</Card>
			<Container>
				<Row
					className='d-flex justify-content-center align-items-center'
					style={{ height: '200px' }}
				>
					<Col md={6} className='text-center'>
						<div className='p-4 border'>Project 1</div>
						<Button variant='primary'>Link to Project</Button>
					</Col>
					<Col md={6} className='text-center'>
						<div className='p-4 border'>Project 2</div>
						<Button variant='primary'>Link to Project</Button>
					</Col>
				</Row>

				<Row
					className='d-flex justify-content-center align-items-center'
					style={{ height: '200px' }}
				>
					<Col md={6} className='text-center'>
						<div className='p-4 border'>Project 3</div>
						<Button variant='primary'>Link to Project</Button>
					</Col>
					<Col md={6} className='text-center'>
						<div className='p-4 border'>Project 4</div>
						<Button variant='primary'>Link to Project</Button>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Profile;
