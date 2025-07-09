import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaCheckCircle } from 'react-icons/fa';

const skills = [
  { label: <><span className="highlight">Python</span>, <span className="highlight">TensorFlow</span>, <span className="highlight">PyTorch</span>, Scikit-learn, YOLOv5/v8, Pandas, NumPy, Matplotlib</>, icon: <FaBolt className="skill-icon" /> },
  { label: <><span className="highlight">C</span>, <span className="highlight">C++</span></>, icon: <FaBolt className="skill-icon" /> },
  { label: <>GitHub, <span className="highlight">SQL</span></>, icon: <FaCheckCircle className="skill-icon" /> },
  { label: <>Microsoft Power Automate, Microsoft Copilot Studio</>, icon: <FaCheckCircle className="skill-icon" /> },
];

const fadeInStagger = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.13, duration: 0.6 } })
};

const Skills: React.FC = () => (
  <motion.div className="fancy-page" initial="hidden" animate="visible" variants={{}}>
    <h2 className="skills-title">Skills</h2>
    <ul className="skills-list-modern">
      {skills.map((skill, i) => (
        <motion.li
          key={i}
          className="skill-item"
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeInStagger}
        >
          {skill.icon}
          <span className="skill-label">{skill.label}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default Skills;
