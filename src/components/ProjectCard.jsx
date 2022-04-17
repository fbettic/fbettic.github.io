import React from "react";


const ProjectCard = (props) => {

  const handleClick = () => {
    props.onClick(props.project.id);
  }

  return (
    <div className="project-card" key={props.project.id} onClick={handleClick}>
        
        <img className="project-image" src={props.project.image} alt={props.project.title}/>
        <h3 className="project-header">{props.project.title}</h3>
    </div>
  );
};

export default ProjectCard;