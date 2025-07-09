import { Outlet, Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './App.css';

function App() {
  const location = useLocation();
  return (
    <div className="container fancy-bg">
      <header className="header">
        <h1>Thomas Gammer</h1>
        <p className="subtitle">391 Prospect St. Ridgewood, NJ 07450 | (201) 625-5451 | <a href="mailto:tjg@njit.edu">tjg@njit.edu</a></p>
        <div className="header-links">
          <a href="https://www.linkedin.com/in/thomas-gammer/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/Tommy-Gammer/T_Gammer" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub /> GitHub
          </a>
        </div>
      </header>
      <nav className="nav nav-fancy">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/education" className={location.pathname === '/education' ? 'active' : ''}>Education</Link>
        <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link>
        <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Link>
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
        <Link to="/hobbies" className={location.pathname === '/hobbies' ? 'active' : ''}>Hobbies</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Thomas Gammer</p>
      </footer>
    </div>
  );
}

export default App;
