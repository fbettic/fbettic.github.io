import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import projects from "../assets/projects.js";
import ProjectPreview from "./ProjectPreview.jsx";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  };

  const projectHandler = (id) => {
    setProject(projects.find((project) => project.id === id));
    console.log(projects.id);
  };


  return (
    <div id="projects">
      <section id="projects-section">
        <h2 id="projects-header">Some projects</h2>

        {project!=='none'?<ProjectPreview project={project}/>:null}
        
        <div id="project-list">
          <Slider {...sliderSettings}>
            {projects.map((project) => {
              return (
                <ProjectCard
                  project={project}
                  key={project.id}
                  onClick={projectHandler}
                />
              );
            })}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Projects;
