import React from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaBrain } from 'react-icons/fa';

const fadeInStagger = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.13, duration: 0.6 } })
};

const projectList = [
  {
    title: 'Retrieval-Augmented Generation (RAG) System for Robotics Information',
    date: 'December 2024',
    details: [
      { text: <>Built a <span className="highlight">RAG system</span> that scraped robotics-related GitHub repositories, stored embeddings in a vector database, and generated context-aware answers using a locally hosted <span className="highlight">LLaMA 3</span> model.</>, icon: <FaBrain className="proj-icon" /> },
      { text: <>Developed using <span className="highlight">Python</span>, Qdrant, MongoDB, and Ollama.</>, icon: <FaProjectDiagram className="proj-icon" /> },
    ]
  },
  {
    title: 'Deep Learning Image Classifier on CIFAR-10 Dataset',
    date: 'September 2024',
    details: [
      { text: <>Constructed an image recognition model using <span className="highlight">CNNs</span> and regularization techniques, achieving <span className="highlight">82.34% accuracy</span>.</>, icon: <FaBrain className="proj-icon" /> },
      { text: <>Developed in PyCharm using <span className="highlight">TensorFlow</span> and <span className="highlight">Keras</span>.</>, icon: <FaProjectDiagram className="proj-icon" /> },
    ]
  }
];

const Projects: React.FC = () => (
  <motion.div className="fancy-page" initial="hidden" animate="visible" variants={{}}>
    <h2 className="skills-title">Projects</h2>
    <div className="proj-list-modern">
      {projectList.map((proj, i) => (
        <motion.div className="project-card" key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }} variants={fadeInStagger}>
          <h3>{proj.title}</h3>
          <span>{proj.date}</span>
          <ul>
            {proj.details.map((item, j) => (
              <motion.li key={j} className="proj-item-modern" custom={j} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }} variants={fadeInStagger}>
                {item.icon}
                <span className="skill-label">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Projects;
