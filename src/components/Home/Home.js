import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import myImg from "../../Assets/avatar.svg";
import Techstack from "../About/Techstack";
import ProjectCard from "../Projects/ProjectCards";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Footer from '../Footer'
function Home() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  const navigate = useNavigate();
  window.addEventListener("scroll", scrollHandler);

  const handleNavigation = (sectionId) => {
      navigate(`#${sectionId}`);
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
      updateExpanded(false);
  };
  return (
    <section>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"} 
      >
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                {/* <Nav.Link as={Link} to="/home" onClick={() => updateExpanded(false)}>
                  Home
                </Nav.Link> */}
                <Nav.Link
                  as={Link}
                  to="#home"
                  onClick={(e) => handleNavigation(e, 'home')}>
                  Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                {/* <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                  About
                </Nav.Link> */}
                <Nav.Link
                  as={Link}
                  to="#about"
                  onClick={(e) => handleNavigation(e, 'about')}>
                  About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                {/* <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => updateExpanded(false)}
                >
                  Projects
                </Nav.Link> */}
                <Nav.Link
                  as={Link}
                  to="#projects"
                  onClick={() => handleNavigation('projects')}>
                  Projects
                </Nav.Link>
              </Nav.Item>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Abel </strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
                <br />
                <br />I am fluent in classics like
                <i>
                  <b className="purple"> C++, Javascript and Go. </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products </b> and
                  also in areas related to{" "}
                  <b className="purple">
                    Blockchain.
                  </b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with <b className="purple">Node.js</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js and Next.js</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <div>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />
        </Container>
      </Container>
      <Container fluid className="project-section" id="projects">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                title="Chatify"
                description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                ghLink="https://github.com/soumyajit4419/Chatify"
                demoLink="https://chatify-49.web.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bitsOfCode}
                title="Bits-0f-C0de"
                description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
                ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                demoLink="https://blogs.soumya-jit.tech/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={editor}
                title="Editor.io"
                description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
                ghLink="https://github.com/soumyajit4419/Editor.io"
                demoLink="https://editor.soumya-jit.tech/"              
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Footer /> */}
    </section>
  );
}

export default Home;