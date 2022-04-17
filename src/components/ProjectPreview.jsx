import React from "react";
import "../styles/ProjectPreview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectPreview = (props) => {
  const handleClick = () => {};

  return (
    <div id="preview">
      <div id="preview-header">
        <img
          id="preview-image"
          src={props.project.image}
          alt={props.project.title}
        />
        <div id="preview-info">
          <h3 id="preview-title">{props.project.title}</h3>

          <p className="preview-text">Description:</p>
          <p className="preview-text" id="preview-description">{props.project.description}</p>

          <div id="preview-technologies">
          <p className="preview-text">Made with:</p>
        {props.project.technologies.map((tech, index) => {
          return (
            <div className="preview-technology" key={index}>
              <FontAwesomeIcon icon={["fab", tech]} />
            </div>
          );
        })}
      </div>
      <p className="preview-text">See in:</p>
          <a href={props.project.link} id="preview-link" className="btn">
            {"CodePen "}
            <FontAwesomeIcon icon={["fab", "codepen"]} />
          </a>
        </div>
      </div>

      
    </div>
  );
};

export default ProjectPreview;
