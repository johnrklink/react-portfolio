import React, { useState } from 'react';
import ProfilePicture from '../assets/profile.png';
import '../Card.css';

function AboutMe() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <h1>Click The Image</h1>
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-front">
          <img
            className="profile-img"
            src={ProfilePicture}
            alt="Profile Picture"
            style={{ maxWidth: '450px', maxHeight: '450px' }}
          />
        </div>
        <div className="card-back">
          <h2>About Me</h2>
          <p className='about-me-p'>
          Hello, I'm John Klink, a recent graduate of the Vanderbilt Coding Bootcamp program. As an aspiring technologist, I am excited to transition into the dynamic and ever-evolving world of technology. I am driven by the opportunity to face new challenges on a daily basis and find purpose in creating innovative solutions.

<p>During my time at Vanderbilt, I honed my skills in various programming languages and gained hands-on experience with cutting-edge technologies. I have developed a strong foundation in software development, web development, and problem-solving, which I am eager to apply in real-world scenarios.
</p>
<p>What truly motivates me is the constant learning and growth that comes with working in the tech field. I thrive in environments that encourage collaboration, creativity, and continuous improvement. I enjoy pushing the boundaries of my knowledge, exploring new technologies, and staying up to date with the latest industry trends.
</p>
<p>In addition to my technical skills, I bring a strong work ethic, attention to detail, and a passion for delivering high-quality results. I believe in the power of teamwork and effective communication, as they are essential in driving successful projects and fostering a positive work culture.
</p>
<p>As I embark on this new chapter, I am actively seeking opportunities that will allow me to contribute to meaningful projects, where I can make a tangible impact. I am excited to work alongside talented professionals and be part of a supportive community that encourages professional development.
</p>
<p>Thank you for taking the time to learn more about me. I am thrilled to connect with like-minded individuals, collaborate on exciting projects, and continue my journey in the tech industry. 
</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
