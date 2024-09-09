import skill1 from "../assets/img/skill1.jpg";
import skill4 from "../assets/img/skill4.png";
import skill2 from "../assets/img/skill2.png";
import skill3 from "../assets/img/skill3.png";
import skill5 from "../assets/img/skill5.png";
import skill6 from "../assets/img/skill6.png";
import skill7 from "../assets/img/skill7.png";
import skill8 from "../assets/img/skill8.png";
import skill9 from "../assets/img/skill9.png";
import skill10 from "../assets/img/skill10.png";
import skill11 from "../assets/img/skill11.png";
import skill12 from "../assets/img/skill12.png";
import skill13 from "../assets/img/skill13.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 style={{ marginBottom: "80px" }}>Skills</h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    style={{ height: "130px", width: "130px" }}
                    src={skill1}
                    alt="skills"
                  />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img
                    style={{ height: "130px", width: "130px" }}
                    src={skill2}
                    alt="skills"
                  />
                  <h5>Node.js</h5>
                </div>

                <div className="item">
                  <img
                    style={{ height: "130px", width: "130px" }}
                    src={skill4}
                    alt="skills"
                  />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img
                    style={{ height: "130px", width: "130px" }}
                    src={skill5}
                    alt="skills"
                  />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img
                    style={{ height: "130px", width: "130px" }}
                    src={skill6}
                    alt="skills"
                  />
                  <h5>Postman</h5>
                </div>
                <div className="item">
                  <img
                    style={{ height: "130px", width: "130px" }}
                    src={skill7}
                    alt="skills"
                  />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img
                    style={{ height: "130px", widht: "130px" }}
                    src={skill8}
                    alt="skills"
                  />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img
                    style={{ height: "130px", widht: "130px" }}
                    src={skill9}
                    alt="skills"
                  />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img
                    style={{ height: "130px", width: "130px" }}
                    src={skill10}
                    alt="skills"
                  />
                  <h5>MaterialUI</h5>
                </div>
                <div className="item">
                  <img
                    style={{ height: "130px", width: "130px" }}
                    src={skill11}
                    alt="skills"
                  />
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                  <img
                    style={{ height: "130px", widht: "130px" }}
                    src={skill12}
                    alt="skills"
                  />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img
                    style={{ height: "130px", widht: "130px" }}
                    src={skill13}
                    alt="skills"
                  />
                  <h5>JavaScript</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="skills" />
    </section>
  );
};
export default Skills;
