import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/navbar';
import Omen from './pages/Omen';
import Cypher from './pages/Cypher';
import Iso from './pages/Iso';
import Sova from './pages/Sova';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/omen" />} />
            <Route path="/omen" element={<Omen />} />
            <Route path="/cypher" element={<Cypher />} />
            <Route path="/iso" element={<Iso />} />
            <Route path="/sova" element={<Sova />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
