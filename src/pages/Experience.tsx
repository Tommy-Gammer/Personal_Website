import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaRobot, FaBolt } from 'react-icons/fa';

const fadeInStagger = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.13, duration: 0.6 } })
};

const experienceList = [
  {
    company: 'Project Elevate',
    location: 'Newark, New Jersey',
    title: 'Senior AI Developer, Jan 2025 – Present',
    details: [
      { text: <>Collected and labeled thousands of images to train a custom <span className="highlight">YOLOv8</span> object detection model, deployed via <span className="highlight">NVIDIA DeepStream</span> on Jetson devices for real-time illegal dumping detection and automated alerts.</>, icon: <FaRobot className="exp-icon" /> },
      { text: <>Co-developed a virtual archive system for Newark City Hall, integrating <span className="highlight">LLaMA-based chatbots</span> for natural language queries.</>, icon: <FaRobot className="exp-icon" /> },
      { text: <>Designed AI education curricula and led interactive workshops for students.</>, icon: <FaBolt className="exp-icon" /> },
      { text: <>Contributed to high-level strategic planning in a fast-paced startup environment.</>, icon: <FaBriefcase className="exp-icon" /> },
    ]
  },
  {
    company: 'Bausch + Lomb',
    location: 'Bridgewater, New Jersey',
    title: 'Senior AI Innovation Developer Intern, Jun 2025 – Aug 2025',
    details: [
      { text: <>Automated conflict of interest form process using <span className="highlight">Microsoft Forms</span> and Teams approvals.</>, icon: <FaBolt className="exp-icon" /> },
      { text: <>Led a team to develop an internal eCommerce chatbot based on internal documents.</>, icon: <FaBolt className="exp-icon" /> },
      { text: <>Enhanced ServiceNow chatbot for IT ticket submissions and support info.</>, icon: <FaBolt className="exp-icon" /> },
    ]
  },
  {
    company: 'Bausch + Lomb',
    location: 'Bridgewater, New Jersey',
    title: 'AI Innovation Developer Intern, Jun 2024 – Aug 2024',
    details: [
      { text: <>Developed a company-wide <span className="highlight">Microsoft Teams chatbot</span> for scheduling, reminders, image generation, and email summaries.</>, icon: <FaBolt className="exp-icon" /> },
      { text: <>Created an HR chatbot for the Ireland office for resume help and interview prep.</>, icon: <FaBolt className="exp-icon" /> },
      { text: <>Built a Power Automate flow for Pharmacovigilance to distribute AI approvals to 50+ countries and store responses in SharePoint.</>, icon: <FaBolt className="exp-icon" /> },
    ]
  }
];

const Experience: React.FC = () => (
  <motion.div className="fancy-page" initial="hidden" animate="visible" variants={{}}>
    <h2 className="skills-title">Professional Experience</h2>
    <div className="exp-list-modern">
      {experienceList.map((exp, i) => (
        <motion.div className="exp-card" key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }} variants={fadeInStagger}>
          <h3>{exp.company}</h3>
          <span>{exp.location}</span><br/>
          <span>{exp.title}</span>
          <ul>
            {exp.details.map((item, j) => (
              <motion.li key={j} className="exp-item-modern" custom={j} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }} variants={fadeInStagger}>
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

export default Experience;
