import React from 'react';
import BookHubPic from '../assets/book-hub.png'
import JobBoardPic from '../assets/job-board.png'
import PetConnectPic from '../assets/pet-connect.png'
import '../App.css'

function Portfolio() {
  const projects = [
    {
      title: 'Book-Hub',
      image: BookHubPic,
      deployedLink: 'https://dannikaml.github.io/game-hub/',
      githubLink: 'https://github.com/dannikaml/game-hub',
      description: 'My first group project I assisted in getting the API setup and working on the CSS for the website.',
    },
    {
      title: 'Job Board',
      image: JobBoardPic,
      deployedLink: 'https://bored-of-my-job-board.herokuapp.com/',
      githubLink: 'https://github.com/dannikaml/interactive-2',
      description: 'My second group project I build the handlebars and assisted with the CSS again as well as adding in Moment to the app.',
    },
    {
      title: 'Pet-Connect',
      image : PetConnectPic,
      deployedLink: 'https://project3.com',
      githubLink: 'https://github.com/johnrklink/pet-connect?organization=johnrklink&organization=johnrklink',
    },
  
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map(project => (
        <div key={project.title}>
          <h3>{project.title}</h3>
          <img src={project.image} alt={project.title} />
          <p><a href={project.deployedLink}>View deployed app</a></p>
          <p><a href={project.githubLink}>View on GitHub</a></p>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;
