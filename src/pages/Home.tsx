import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaLaptopCode, FaUserTie, FaHiking, FaRocket } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const Home: React.FC = () => (
  <motion.div className="fancy-page home-hero" initial="hidden" animate="visible" variants={fadeIn}>
    <div className="home-hero-content">
      <h1 className="home-title">Welcome to <span className="highlight">Thomas Gammer's</span> Portfolio</h1>
      <p className="home-lead">Full Stack Developer | AI Developer | Problem Solver</p>
      <div className="home-icons">
        <Link to="/education" className="home-icon" title="Education"><FaGraduationCap /></Link>
        <Link to="/skills" className="home-icon" title="Skills"><FaLaptopCode /></Link>
        <Link to="/experience" className="home-icon" title="Experience"><FaUserTie /></Link>
        <Link to="/projects" className="home-icon" title="Projects"><FaRocket /></Link>
        <Link to="/hobbies" className="home-icon" title="Hobbies"><FaHiking /></Link>
      </div>
      <p className="home-desc">I'm a junior studying <span className="highlight">Computer Science</span> at the <span className="highlight">New Jersey Institute of Technology</span> with a focus on building practical tools and systems.<br/><br/>I enjoy working on projects that involve <span className="highlight">automation</span>, <span className="highlight">AI/ML</span>, and <span className="highlight">real-world problem solving</span>. Outside of class, I’ve developed chatbots, built custom workflows, and worked on edge computing applications. I’m motivated by learning and improving through hands-on experience.</p>
    </div>
    <div className="home-bg-blur"></div>
  </motion.div>
);

export default Home;
