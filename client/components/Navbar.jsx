import React from 'react';

const Navbar = ({ updateView }) => {

  return (
    <div className='navbar'>
      <span onClick={() => updateView('home')}>Home</span>
      <span onClick={() => updateView('projects')}>Projects</span>
      <span onClick={() => updateView('contact')}>Contact Me</span>
    </div>
  );
};

export default Navbar;