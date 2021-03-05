import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Home from './Home.jsx'
import ContactMe from './ContactMe.jsx';

const App = (props) => {

  const [view, updateView] = useState('home');

  const renderView = () => {
    if (view === 'home') {
      return < Home />;
    } else if (view === 'projects') {

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