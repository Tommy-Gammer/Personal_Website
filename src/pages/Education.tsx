import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const fadeInStagger = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const educationList = [
  {
    school: <span className="highlight">New Jersey Institute of Technology</span>,
    location: 'Newark, New Jersey',
    degree: 'Bachelor of Science in Computer Science, May 2026',
    details: [
      { text: <><span className="highlight">GPA: 3.8/4.0</span></>},
      { text: <>Relevant Coursework: <span className="highlight">Artificial Intelligence</span>, <span className="highlight">Machine Learning</span>, Data Structures, Intensive Programming in Linux</>},
    ]
  },
  {
    school: <span className="highlight">Bergen Community College</span>,
    location: 'Paramus, New Jersey',
    degree: 'Associates of Science in Computer Science, May 2024',
    details: [
      { text: <><span className="highlight">GPA: 3.8/4.0</span></>},
      { text: <>Relevant Coursework: Linear Algebra, Discrete Math</>},
    ]
  }
];

const Education: React.FC = () => (
  <motion.div className="fancy-page" initial="hidden" animate="visible" variants={{}}>
    <h2 className="skills-title">Education</h2>
    <div className="edu-list-modern">
      {educationList.map((edu, i) => (
        <motion.div className="edu-card" key={i} initial="hidden" animate="visible" variants={fadeInStagger}>
          <h3>{edu.school}</h3>
          <span>{edu.location}</span><br/>
          <span>{edu.degree}</span>
          <ul>
            {edu.details.map((item, j) => (
              <motion.li key={j} className="edu-item-modern" initial="hidden" animate="visible" variants={fadeInStagger}>
                <span className="skill-label">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Education;
