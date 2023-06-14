import React, { useState } from 'react';
import ProfilePicture from '../assets/profile.png';
import '../Card.css';

function AboutMe() {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`section card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-front">
        <img
          className="profile-img"
          src={ProfilePicture}
          alt="Profile Picture"
          style={{ maxWidth: '300px', maxHeight: '300px' }}
        />
      </div>
      <div className="card-back">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque consequat feugiat. Etiam at purus
          augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In volutpat
          dignissim risus, id interdum nunc sagittis a. Nulla eget diam quis quam semper facilisis. Fusce a ante dolor.
          Donec et massa lacus. Vestibulum ultricies enim justo, eu facilisis mi accumsan et. Proin nec velit elit.
          Etiam gravida leo sed elit varius, vel tincidunt leo consequat.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
