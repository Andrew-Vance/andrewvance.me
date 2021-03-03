import React from 'react';

const Sidebar = (props) => {

  return (
    <div className='sidebar'>
      <div className='line'></div>
      <img src='https://s3.us-east-2.amazonaws.com/andrewvance.me/linkedin-logo-png.png' />
      <img src='https://s3.us-east-2.amazonaws.com/andrewvance.me/github_icon_png.png' />
      <img src='https://s3.us-east-2.amazonaws.com/andrewvance.me/email_icon.png' />
    </div>
  );
};

export default Sidebar;