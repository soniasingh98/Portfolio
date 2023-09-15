import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import sonia_prof from "../assets/sonia_prof.jpeg";
import linkedin from "../assets/img/linkedin.png";
import email from "../assets/img/email.png";
import github from "../assets/img/github.png";
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "MERN Stack Developer",
    "Problem Solver",
    "Front End Developer",
  ];
  const [text, setText] = useState(``);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section style={{ marginTop: "45px" }} className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <span className="tagline">Welcome to my Portfolio</span> */}
            <h1 style={{ fontSize: "40px" }}>
              {`Hi,`}
              <br></br>
              {`My name is Sonia Singh`}
              <br></br>
              {`& I am a`}
              <span className="wrap" style={{ color: "yellow" }}>
                {" "}
                {text}
              </span>
            </h1>
            <p>
              IT undergraduate passionate for crafting efficient, scalable, and
              user-centric applications.
            </p>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/sonia-singh-b0a886240/" target="__blank">
                  <img
                    style={{
                      width: "100%",
                      borderRadius: "45px",
                    }}
                    src={linkedin}
                    alt=""
                  />
                </a>
                <a href="https://github.com/soniasingh98" target="__blank">
                  <img
                    style={{
                      width: "100%",
                      borderRadius: "45px",
                    }}
                    src={github}
                    alt=""
                  />
                </a>
                <a href="mailto:soniasingh4344@gmail.com" target="__blank">
                  <img
                    style={{
                      width: "100%",
                      borderRadius: "45px",
                    }}
                    src={email}
                    alt=""
                  />
                </a>
              </div>
            </span>
            <button
              style={{ marginTop: "20px" }}
              onClick={() => console.log("connect")}
            >
              <a
                style={{ textDecoration: "none", color: "yellow" }}
                href="https://drive.google.com/file/d/1tXFlDLvcjIVLw4av5rnIZplHXJ2TzO7C/view?usp=sharing"
                target="__blank"
              >
                Check Resume <ArrowRightCircle size={25} />
              </a>
            </button>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img
              style={{ height: "300px", width: "300px", borderRadius: "150px",marginTop:"20px" }}
              src={sonia_prof}
              alt="header img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
