import React, { useState } from "react";
import { data } from "./data";
import ai from "./images/ai.png";

const Projects = () => {
  const [toggleView, setToggleView] = useState(true);
  const [storedData, setStoredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [complexity, setComplexity] = useState("show-all")

  function filterProjects(value) {
      setComplexity("show-all")
    setSearchTerm(value);
    if (value.trim() === "") {
      setStoredData(data);
      return;
    }
    const lowercasedValue = value.toLowerCase();
    const filteredProjects = data.filter(
      (project) =>
        project.title.toLowerCase().includes(lowercasedValue) 
    );
    setStoredData(filteredProjects);
  }

  function handleChange(e){
    setSearchTerm("")
    setComplexity(e.target.value)
    if(e.target.value === "show-all"){
      setStoredData(data);
      return
    }
    const filteredProjects = data.filter(project => project.type === e.target.value);
    setStoredData(filteredProjects)
  }


  return (
    <div className={toggleView ? "all-projects-container" : "darkBody"}>
      <h1 className={!toggleView && "lightH1"}>
        My name is Suad Pllana, a passionate front-end developer
      </h1>
      <h2 className={!toggleView && "lightH1"}>
        Check all of my {storedData.length} projects below
      </h2>
      <h3>
        Filter projects:
        <input
          type="text"
          placeholder="Type to filter..."
          value={searchTerm}
          onChange={(e) => filterProjects(e.target.value)}
          style={{ marginLeft: "10px", padding: "5px" }}
        />
      </h3>
       <h3>
        Filter by complexity: {" "}
        <select value={complexity} onChange={(e) => handleChange(e)}>
          <option value="show-all">Show all projects</option>
          <option value="easy">Easy</option>
          <option value="intermediate">Intermediate</option>
          <option value="complex">Complex</option>
        </select>
      </h3>

      <div className="container" id={!toggleView ? "darkContainer" : ""}>
        {storedData.length > 0 ?
          storedData.map((project, index) => (
            <div key={index} className="project">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
              </a>
              <div className="content">
                <h3>{project.title}</h3>
                <p>{project.tools}</p>
                <a target="_blank" rel="noopener noreferrer" href={project.link}>
                  Link to project
                </a>
              </div>
            </div>
          )) : <p>No projects found</p>}
      </div>
    </div>
  );
};

export default Projects;
