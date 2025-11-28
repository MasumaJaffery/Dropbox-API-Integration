import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DropboxLogin from './components/DropboxLogin';
import OAuthCallback from './components/OAuthCallback';
import ProjectFolder from './components/ProjectFolder';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/oauth/callback" element={<OAuthCallback />} />
        <Route path="/project" element={<ProjectFolder />} />
        <Route path="/" element={<DropboxLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
