import React from 'react';

const Projects = (props) => {

  return (
    <div className='projectsPage'>
      <div className='projects project1'>
        <div className='projectInfo'>
        <h1>Similar Items Carousel</h1>
        <p>A modular photo carousel built as a microservice.  It is built using React and Styled Components and its backend is an Express.js server.  Favorites are saved in a MySQL database to retain its favorite status in case of downtime</p>
        </div>
      </div>
      <div className='projects project2'>
        <div className='projectInfo'>
          <h1>Backend Web Scaling</h1>
          <p>Receiving legacy code for a review module i was given the task of scaling the back end of the application.  I indexed the Mongo database and deployed 3 instances of the server to AWS EC2 micro instances, then deployed an instance and configured NGINX to route traffic to the server with the least current connections.  stress testing 3000 coccurrent requests a second resulted in an average 15ms response time with a 0% error rate.</p>
        </div>
      </div>
      <div className='projects project3'>
        <div className='projectInfo'>
          <h1>Portfolio Website</h1>
          <p>The website you are currently viewing.  Built with React using a view system for changing the page, all animations are pure css</p>
        </div>
      </div>

    </div>
  );
};

export default Projects;