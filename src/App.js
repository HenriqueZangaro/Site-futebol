import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TeamList from './components/TeamList';
import TeamDetail from './components/TeamDetail';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Site de Futebol</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<TeamList />} />
          <Route path="/team/:id" element={<TeamDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;