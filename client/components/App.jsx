import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Home from './Home.jsx'

const App = (props) => {

  const [view, updateView] = useState('home');

  const renderView = () => {
    if (view === 'home') {
      return < Home />;
    } else if (view === 'projects') {

    } else if (view === 'contact') {

    }
  }

  return (
    <div>
      < Navbar />
      < Sidebar />
      {renderView()}
    </div>

  );
};

export default App;