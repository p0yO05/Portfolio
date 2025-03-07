import React from 'react';
import './index.css'; // Importa los estilos globales
import './app.css'; // Importa los estilos específicos de la aplicación
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Hobbies } from './components/Hobbies';
import { Contact } from './components/Contact';
import { Hopes } from './components/Hopes';
import { ErrorComponent } from './Menu/ErrorComponent';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="menu">
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Hobbies n Likes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/experience">Hopes</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Hopes />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
