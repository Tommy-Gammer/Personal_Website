import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaProjectDiagram, FaUserAstronaut } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const Home: React.FC = () => (
  <motion.div className="fancy-page home-hero" initial="hidden" animate="visible" variants={fadeIn}>
    <div className="home-hero-content">
      <h1 className="home-title">Welcome to <span className="highlight">Thomas Gammer</span>'s Portfolio</h1>
      <p className="home-lead">Full Stack Developer | AI Enthusiast | Problem Solver</p>
      <div className="home-icons">
        <span className="home-icon"><FaGraduationCap /></span>
        <span className="home-icon"><FaCode /></span>
        <span className="home-icon"><FaProjectDiagram /></span>
        <span className="home-icon"><FaUserAstronaut /></span>
      </div>
      <p className="home-desc">Explore my background, skills, experience, and projects using the navigation above.<br/>Scroll down or use the menu to learn more about my journey in tech and beyond.</p>
    </div>
    <div className="home-bg-blur"></div>
  </motion.div>
);

export default Home;
