// import React from "react";
// import "./About.css";

// const About = () => {
//   return (
//     <div className="about-page">
//       <div className="about-content">
//         <h1>ABOUT ME</h1>
//         <p>
//           I am a <b>MERN</b> stack developer with a passion for building
//           scalable and efficient web applications. I have experience working
//           with MongoDB, Express.js, React.js, and Node.js, and I enjoy
//           leveraging these technologies to create innovative solutions.
//         </p>
//         <p>
//           I have a strong understanding of web development principles and best
//           practices. I am proficient in front-end development and I have
//           expertise in building <b>responsive</b> and <b>user-friendly</b>{" "}
//           interfaces.
//         </p>
//         <p>
//           In addition to my technical skills, I am a strong collaborator and
//           problem solver. I enjoy working in agile environments and delivering
//           high-quality results. I am constantly learning and exploring new
//           technologies to stay up-to-date with the latest industry trends.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <h1 className="page-title">ABOUT ME</h1>
      <div className="about-container">
        <div className="about-card">
          <p>
            I am a <b>MERN</b> stack developer with a passion for building
            scalable and efficient web applications. I have experience working
            with MongoDB, Express.js, React.js, and Node.js, and I enjoy
            leveraging these technologies to create innovative solutions.
          </p>
        </div>
        <div className="about-card">
          <p>
            I have a strong understanding of web development principles and best
            practices. I am proficient in front-end development and I have
            expertise in building <b>responsive</b> and <b>user-friendly</b>{" "}
            interfaces.
          </p>
        </div>
        <div className="about-card">
          <p>
            In addition to my technical skills, I am a strong{" "}
            <b>collaborator</b> and <b>problem solver</b>. I enjoy working in
            agile environments and delivering high-quality results. I am
            constantly learning and exploring new technologies to stay
            up-to-date with the latest industry trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
