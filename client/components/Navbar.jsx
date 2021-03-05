import React from 'react';

const Navbar = ({ updateView, view }) => {

  const currentView = (nav) => {
    if (nav === view) {
      return 'selectedNav';
    }
  };

  return (
    <div className='navbar'>
      <span className={currentView('home')} onClick={() => updateView('home')}>Home</span>
      <span className={currentView('projects')} onClick={() => updateView('projects')}>Projects</span>
      <span className={currentView('contact')} onClick={() => updateView('contact')}>Contact Me</span>
    </div>
  );
};

export default Navbar;