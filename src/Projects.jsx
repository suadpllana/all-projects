import React from "react";
import { useState } from "react";
import { data } from "./data";
import ai from "./images/ai.png";
const Projects = () => {
  const [toggleView, setToggleView] = useState(true);
  const [storedData, setStoredData] = useState(data)
  const [complexity, setComplexity] = useState()

  

     function filterProjects(complexity){
          if(complexity === ""){
               setStoredData(data);
               return
          }
          const filteredProjects = data.filter(project => project.type === complexity);
          setStoredData(filteredProjects)
     }

  return (
    <div className={toggleView ? "all-projects-container " : " darkBody"}>
      <h1 className={!toggleView && "lightH1"}>
        My name is Suad Pllana , a passionate front-end developer
      </h1>
      <h2 className={!toggleView && "lightH1"}>Check all of my projects below </h2>
      <h3>Filter by <select onChange={(e) => filterProjects(e.target.value)}>
               <option value="">Get all projects</option>
               <option value="">Alphabetic order</option>
               <option value="complex">Complex Projects</option>
               <option value="intermediate">Intermediate Projects</option>
               <option value="easy">Easy Projects</option>
          </select></h3>

      <div className="container" id={!toggleView ? "darkContainer" : ""}>
        {storedData &&
          storedData.map((project, index) => (
            <div className="project">
              <img src={project.image} alt="" />
              <div className="content">
                <h3>{project.title}</h3>
                <p>{project.tools}</p>
                <a 
                  target="_blank"
                  href={project.link}
                >
                  Link to project
                </a>
              </div>
            </div>
          ))}

    
      </div>
    </div>
  );
};

export default Projects;
