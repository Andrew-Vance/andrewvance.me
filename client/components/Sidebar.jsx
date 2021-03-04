import React from 'react';

const Sidebar = ({ updateView }) => {

  return (
    <div className='sidebar'>
      <div className='line'> <div className='animatedLine'></div></div>

      <a href='https://www.linkedin.com/in/andrew-clay-vance/' target='_blank' rel='noopener noreferrer'>
        <img src='https://s3.us-east-2.amazonaws.com/andrewvance.me/linkedin-logo-png.png'/>
      </a>

      <a href='https://github.com/Andrew-Vance' target='_blank' rel='noopener noreferrer'>
        <img src='https://s3.us-east-2.amazonaws.com/andrewvance.me/github_icon_png.png'/>
      </a>

      {/*this needs an onclick to change view to an email me form */}
      <img onClick={() => updateView('contact')} src='https://s3.us-east-2.amazonaws.com/andrewvance.me/email_icon.png' />
    </div>
  );
};

export default Sidebar;