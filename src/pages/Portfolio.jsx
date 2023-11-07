import React from 'react';
import Project from '../components/Project'; // Import the Project component
import {Header} from '../components/Header';


function Portfolio() {
  // roject data
  const projects = [
    {
      title: 'Password Generator',
      image: '/Users/raelwanjala/Desktop/classwork/RaelW-Portfolio/src/assets/passwordGenerator.jpg', // Provide the image path
      deployedLink: 'https://raelnw.github.io/PasswordGenerator/',
      githubLink: 'https://github.com/raelnw/PasswordGenerator',
    },
    // more projects...
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
