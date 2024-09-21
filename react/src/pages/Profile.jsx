import { Container, Card, Button, Badge, Row, Col } from "react-bootstrap";
import "./styles.css";

const Profile = () => {
	return (
		<Container>
			<Card className="profile-card">
				<Card.Body>
					<Row className="align-items-center">
						{/* Profile Picture */}
						<Col md={4} className="text-center">
							<img
								src="path-to-image.jpg"
								alt="Profile"
								className="img-fluid"
								style={{
									borderRadius: "15px",
									border: "2px solid black",
									width: "100%",
									height: "auto",
								}}
							/>
						</Col>

						<Col md={8}>
							<Card.Title>John Doe</Card.Title>
							<Card.Text>
								<strong>Student email:</strong> john.doe@example.com
							</Card.Text>
							<Card.Text>
								<strong>About me:</strong> A brief bio about the student.
							</Card.Text>
							<Card.Text>
								<strong>Major:</strong> Computer Science
							</Card.Text>
						</Col>
					</Row>
				</Card.Body>
			</Card>

			<Container>
				<Row
					className="d-flex justify-content-center align-items-center"
					style={{ height: "200px" }}
				>
					<Col md={6} className="text-center">
						<Button variant="primary">ADD NEW PROJECT</Button>
					</Col>
				</Row>

				<Row
					className="d-flex justify-content-center align-items-center"
					style={{ height: "200px" }}
				// style={{ paddingBottom: "20px" }}
				>
					<Col md={6} className="text-center">
						<div className="p-4 border">Project name</div>
						<Button variant="primary">Link to Project</Button>
						<Button variant="primary">Update Project Progress</Button>
						<p>{false ? "Project is complete!" : "Project is not complete"}</p>
					</Col>

					<Col md={6} className="text-center">
						<div className="p-4 border">Project name</div>
						<Button variant="primary">Link to Project</Button>
						<p>Project 2 complete!</p>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Profile;
