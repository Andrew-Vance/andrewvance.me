import React from 'react';

const Home = (props) => {

  return (
    <div>
    <div className='infoCard'>
      <img className='myImage' src='https://s3.us-east-2.amazonaws.com/andrewvance.me/me_square.png' />
      <div className='info'>
        <h1>Andrew Vance</h1>
        <h2>Software Engineer</h2><br></br><br></br>
        <h3>I am someone who has always loved building and creating new things. I am most versed with JavaScript, Node.js, Express and React. I am currently looking for new opportunities, if you would like to talk about new opportunities feel free to email me at andrewaddress2@gmail.com, or if you just want to say hi </h3>
      </div>
    </div>
    <div className='resume'>
      <img src='https://s3.us-east-2.amazonaws.com/andrewvance.me/resume+ss.png'></img>
      <a  href='/resume' download>
        <div className='download'>download my resume</div></a>
    </div>
    </div>
  );
};

export default Home;