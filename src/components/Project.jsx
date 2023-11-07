import React from 'react';
import { Link } from 'react-router-dom';


function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Description of the project goes here.</p>
       <Link to={`/projects/${title}`}>Details</Link> {/*Link to project details */}
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
    </div>
  );
}

export default Project;