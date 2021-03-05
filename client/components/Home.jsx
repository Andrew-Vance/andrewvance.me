import React from 'react';

const Home = (props) => {

  return (
    <div className='infoCard'>
      <img className='myImage' src='https://s3.us-east-2.amazonaws.com/andrewvance.me/me_square.png' />
      <div className='info'>
        <h1>Andrew Vance</h1>
        <h2>Software Engineer</h2>
      </div>
    </div>
  );
};

export default Home;