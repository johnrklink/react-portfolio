import React from 'react';
import ResumePDF from '../assets/Resume.pdf'
import '../App.css'

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <p>Veiw resume here: <a href={ResumePDF} target="_blank" rel="noopener noreferrer">Click for Resume</a></p>
      <h3>Proficiencies</h3>
      <ul>
        <li>Programming Languages: JavaScript, HTML, CSS</li>
        <li>Frameworks/Libraries: React, Vue.js, Bootstrap, MERN, Handlebars.</li>
        <li>Tools/Platforms: Git, Node.js, SQL, Mongo DB.</li>
      </ul>
    </section>
  );
}

export default Resume;
