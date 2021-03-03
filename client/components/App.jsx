import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';

const App = (props) => {
  return (
    <div>
      <Navbar />
      <div className='infoCard'>
        {/* info card */}
        some div with white background and black text
        <img className='myImage' src='https://s3.us-east-2.amazonaws.com/andrewvance.me/me_square.png' />
      </div>
    </div>

  );
};

export default App;