import React from 'react';
import Project from './components/Project';

function App() {
  // Define project data
  const projects = [
    {
      title: 'Password Generator',
      image: 'public/images/passwordGenerator.jpg',
      deployedLink: 'https://raelnw.github.io/PasswordGenerator/',
      githubLink: 'https://github.com/raelnw/PasswordGenerator',
      description: 'This is a Password generator project',
    },
    {
      title: 'PWA Text Editor',
      image: 'public/images/PWA-TextEditor.png',
      deployedLink: 'https://textitnow-6619f5741e70.herokuapp.com/',
      githubLink: 'https://github.com/RaelNW/Web-Text-Editor',
      description: 'This application provides a seamless and convenient way to create, modify, and manage text content without the need for external software, enhancing the overall text editing experience',
    },
    {
      title: 'NoteTaker',
      image: 'public/images/noteTaker.png',
      deployedLink: 'https://andikanotes-8cb45581cc34.herokuapp.com/notes',
      githubLink: 'https://github.com/RaelNW/NoteTaker',
      description: 'This is an application that can be used to create notes',
    },
    {
      title: 'Weather Dashboard',
      image: 'public/images/weatherDashboard.jpg',
      deployedLink: 'https://raelnw.github.io/weather_radar/',
      githubLink: 'https://github.com/raelnw/weather_radar',
      description: 'This application allows users to search for a city and view a 5-day forecast for that city',
    },
    {
      title: 'No Fox Given',
      image: 'public/images/No-Fox-Given.jpg',
      deployedLink: 'https://no-fox-given-website-link',
      githubLink: 'https://github.com/Sky6565/No-Fox-Given',
      description: 'No Fox Given is an online journal application that allows users to write daily journal entries and keep track of their moods throughout the day.',
    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          deployedLink={project.deployedLink}
          githubLink={project.githubLink}
          description={project.description}
        />
      ))}
    </div>
    );
}


export default App;

