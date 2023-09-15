import { Col } from "react-bootstrap";
import linkImage from "../assets/img/linkImage.png";
export const ProjectCard = ({ title, description, imgUrl,techUse,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" >
        <img src={imgUrl} alt="someimg" />
        <h6 style={{padding:"15px"}}><h5 style={{color:"yellow"}}>Tech Used: </h5>{techUse}</h6>
        
        <div className="proj-txtx">
          <h6 style={{color:"yellow"}}>{title}</h6>
          <span>{description}</span>
          <p><a href={link} target="__blank"><img style={{height:"25px",width:"25px"}} src={linkImage} alt="linkimage"/></a></p>
        </div>
      </div>
    </Col>
  );
};
