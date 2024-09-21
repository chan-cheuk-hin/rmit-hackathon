import '../App.css';
import { Container, Card, Button, Badge, Row, Col } from "react-bootstrap";


const ProjectCard = ({id, title, description, link, completion_status}) => {
	return (
		<Col md={6} className="text-center">
            <div className="p-4 border"><b>Project Name:</b> {title} <br></br><b>Project Description:</b> {description}</div>
            <Button className="m-2" variant="primary" href={link} target="_blank">Link to Project</Button>
            <Button className="m-2" variant="primary">Update Project Progress</Button>
            <p>{completion_status == "true" ? "Project is complete!" : "Project is not complete"}</p>
        </Col>
	);
};

export default ProjectCard;





