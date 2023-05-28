import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
  const slides = [
    {
      title: "Craft Aggregator Site",
      embedLink: "https://www.youtube.com/embed/UxsOoqoBWY4",
      skills: "Node.js, ReactJS, Express.js, Redux, MongoDB, CSS",
    },
    {
      title: "Tech News Hub",
      embedLink: "https://www.youtube.com/embed/B3UmeoFsufs",
      skills: "ReactJS, API, JavaScript, HTML, CSS",
    },
    {
      title: "Job Portal for Women",
      embedLink: "https://www.youtube.com/embed/HZs1SL1ENxU",
      skills: "Node.js, EJS, Javascript, HTML, CSS, MongoDB, Express.js",
    },
    {
      title: "Project Management Site",
      embedLink: "https://www.youtube.com/embed/4rUz9YMz1dI",
      skills: "Javascript, HTML, CSS, Firebase",
    },
  ];

  return (
    <Carousel showArrows={true} showThumbs={false}>
      {slides.map((slide, index) => (
        <div key={index}>
          <h1 className="page-title">PROJECTS</h1>
          <iframe
            title={slide.title}
            width="500"
            height="360"
            src={slide.embedLink}
            frameBorder="0"
            allowFullScreen
          />
          <p className="title">{slide.title}</p>
          <p className="skills">
            <b>Technology Used: </b>
            {slide.skills}
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default Projects;
