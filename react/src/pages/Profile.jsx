import { Container, Card, Button, Badge, Row, Col } from "react-bootstrap";
import "./../App.css";
import { useState, useEffect } from "react";
import FormsUpdateProject from '../components/forms_update_project';
import FetchHelper from "../util/requestHelper";
import ProjectCard from "../components/projectCard";

const Profile = () => {
	const [popup, setPopup] = useState(false);
	const [projectArray, setProjectArray] = useState([])
	useEffect(() =>  {
		async function fetchData() {
			await new Promise(r => setTimeout(r, 100));
			let eventJson = await FetchHelper("getProjects");
			console.log(eventJson);
			setProjectArray(eventJson.map((item,i) => <ProjectCard key={i} id={item["id"]} title={item["title"]} description={item["description"]} link={item["link"]} completion_status={item["completion_status"]} est_completion_date={item["est_completion_date"]}/>));
		}
		fetchData();
	}, [popup])

	return (
		<div class="container-bg">
			<Container style={{padding: "20px" }}>
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
						<hr class="hr mb-3" />
						<Col md={12} className="text-center">
							<Button onClick={() => setPopup(!popup)} variant="primary">ADD NEW PROJECT</Button>
							<div className={`form ${popup ? "visible" : "hidden"}`} >
								<FormsUpdateProject setPopup={setPopup}/>
							</div>
						</Col>
						
						<hr class="hr mt-3 mb-5" />
						{projectArray}
					</Row>

					<Row
						className="d-flex justify-content-center align-items-center"
						style={{ height: "200px" }}
					// style={{ paddingBottom: "20px" }}
					>
					</Row>
				</Container>
			</Container>
		</div>
	);
};

export default Profile;
