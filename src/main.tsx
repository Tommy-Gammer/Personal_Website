import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Personal_Website/">
      <Routes>
        <Route path="/" element={<App />}> {/* Layout wrapper */}
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="hobbies" element={<Hobbies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
