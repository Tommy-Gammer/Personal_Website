import React from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaDumbbell, FaTrophy } from 'react-icons/fa';

const fadeInStagger = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.13, duration: 0.6 } })
};

const hobbies = [
  { text: 'Varsity crew competitor, state finals placement', icon: <FaTrophy className="hobby-icon" /> },
  { text: 'Play guitar, piano, and ukulele', icon: <FaMusic className="hobby-icon" /> },
  { text: 'Enjoy sports: pickleball, spikeball, tennis, rowing, bowling, hiking', icon: <FaDumbbell className="hobby-icon" /> },
];

const Hobbies: React.FC = () => (
  <motion.div className="fancy-page" initial="hidden" animate="visible" variants={{}}>
    <h2 className="skills-title">Hobbies & Interests</h2>
    <ul className="hobbies-list-modern">
      {hobbies.map((hobby, i) => (
        <motion.li
          key={i}
          className="hobby-item-modern"
          custom={i}
          initial="hidden"
          animate="visible"
          variants={fadeInStagger}
        >
          <span className="skill-label">{hobby.text}</span>
          <span className="hobby-icon">{hobby.icon}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default Hobbies;
