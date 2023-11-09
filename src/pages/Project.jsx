import React from 'react';
import foxGiven from '/images/No-Fox-Given.jpg';
import passwordGenerator from '/images/PasswordGenerator.png';
import pwaTextEditor from '/images/PWA-TextEditor.png';
import noteTaker from '/images/noteTaker.png';
import weatherDashboard from '/images/weatherDashboard.jpg';


  // Define project data
  const projects = [
    {
      title: 'Password Generator',
      image: passwordGenerator,
      deployedLink: 'https://raelnw.github.io/PasswordGenerator/',
      githubLink: 'https://github.com/raelnw/PasswordGenerator',
      description: 'This is a Password generator project',
    },
    {
      title: 'PWA Text Editor',
      image: pwaTextEditor,
      deployedLink: 'https://textitnow-6619f5741e70.herokuapp.com/',
      githubLink: 'https://github.com/RaelNW/Web-Text-Editor',
      description: 'This application provides a seamless and convenient way to create, modify, and manage text content without the need for external software, enhancing the overall text editing experience',
    },
    {
      title: 'NoteTaker',
      image: noteTaker,
      deployedLink: 'https://andikanotes-8cb45581cc34.herokuapp.com/notes',
      githubLink: 'https://github.com/RaelNW/NoteTaker',
      description: 'This is an application that can be used to create notes',
    },
    {
      title: 'Weather Dashboard',
      image: weatherDashboard,
      deployedLink: 'https://raelnw.github.io/weather_radar/',
      githubLink: 'https://github.com/raelnw/weather_radar',
      description: 'This application allows users to search for a city and view a 5-day forecast for that city',
    },
    {
      title: 'No Fox Given',
      image: foxGiven,
      deployedLink: 'https://no-fox-given-website-link',
      githubLink: 'https://github.com/Sky6565/No-Fox-Given',
      description: 'No Fox Given is an online journal application that allows users to write daily journal entries and keep track of their moods throughout the day.',
    },
  ];

function Project({ project }) {
    if (!project) {
    return null; // Return null or handle the case where project is undefined
  }
  return (
    <div className="project">
      <h3 className='project-title'>{project.title}</h3>
      <img src={project.image} alt={project.title} className='project-image'/>
      <p>{project.description}</p>
      <div>
        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed Link
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Link
        </a>
      </div>
    </div>
  );
}

function ProjectContent() {
  return (
    <div className="project-content">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
}
 export default ProjectContent;

