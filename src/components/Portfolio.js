import React, { useState } from 'react';
import BookHubPic from '../assets/book-hub.png'
import JobBoardPic from '../assets/job-board.png'
import PetConnectPic from '../assets/pet-connect.png'
import '../App.css'
import '../Card.css'

function Card({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-front">
        <img src={project.image} alt={project.title} className="portfolio-img" />
        <h3>{project.title}</h3>
      </div>
      <div className="card-back">
        <p>{project.description}</p>
        <p><a href={project.deployedLink}>View deployed app</a></p>
        <p><a href={project.githubLink}>View on GitHub</a></p>
      </div>
    </div>
  );
}

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
      description: 'My second group project I build the handlebars and added Moment to the app.',
    },
    {
      title: 'Pet-Connect',
      image: PetConnectPic,
      deployedLink: 'https://project3.com',
      githubLink: 'https://github.com/johnrklink/pet-connect?organization=johnrklink&organization=johnrklink',
      description: 'The third group project I worked on building the React app and debugging as well as helping with CSS.'
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <p>Click Us</p>
      {projects.map(project => (
        <Card key={project.title} project={project} />
      ))}
    </section>
  );
}

export default Portfolio;
