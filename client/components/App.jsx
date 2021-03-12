import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Home from './Home.jsx'
import ContactMe from './ContactMe.jsx';
import Projects from './Projects.jsx';

const App = (props) => {

  const [view, updateView] = useState('home');

  const renderView = () => {
    if (view === 'home') {
      return < Home />;
    } else if (view === 'projects') {
      return < Projects />;
    } else if (view === 'contact') {
      return < ContactMe />;
    }
  };

  return (
    <div>
      < Navbar updateView={updateView} view={view} />
      < Sidebar updateView={updateView} />
      {renderView()}
    </div>

  );
};

export default App;