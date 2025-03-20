import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FaLink }   from "react-icons/fa6";
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button className="mx-2" variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          GitHub
        </Button>
        <Button variant="primary" href={props.demoLink} target="_blank">
          <FaLink /> &nbsp;
          Link
        </Button>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
