import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import projImg6 from "../assets/img/project6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Boister-Craft Aggregator Site",
      description:
        "This site showcase a collection of handmade crafts from various artists and makers.",
      imgUrl: projImg1,
      techUse:
        "Node.js, ReactJS, Express.js, Redux, MongoDB, CSS, MaterialUI\n",
      link: "https://sonia-singh-boister-craftsite.onrender.com/",
    },
    {
      title: "UpTech-Tech News Site",
      description:
        "A real-time technology news platform that enables personalized browsing of tech news based on user interests.",
      imgUrl: projImg2,
      techUse: "ReactJS, API, JavaScript, HTML, CSS",
      link: "https://soniasinghtechsite.netlify.app/",
    },
    {
      title: "Ardor-Project Management Site",
      description:
        "Centralized hub for planning, executing, and monitoring complex projects.",
      imgUrl: projImg3,
      techUse: "Javascript, HTML, CSS, Firebase",
      link: "https://soniasingh98.github.io/SIH-2022/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    ></Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section"></Tab.Pane>
                      <Tab.Pane eventKey="third"></Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="bgimg"
      ></img>
    </section>
  );
};
