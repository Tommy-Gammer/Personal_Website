import React from 'react';
import { motion } from 'framer-motion';

const fadeInStagger = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.13, duration: 0.6 } })
};

const experienceList = [
  {
    company: <span className="highlight">Project Elevate</span>,
    location: 'Newark, New Jersey',
    title: 'Senior AI Developer, Jan 2025 – Present',
    details: [
      { text: <>Collected and labeled thousands of images to train a custom <span className="highlight">YOLOv8</span> object detection model, deployed via <span className="highlight">NVIDIA DeepStream</span> on Jetson devices for real-time illegal dumping detection and automated alerts.</>},
      { text: <>Co-developed a virtual archive system for Newark City Hall, integrating <span className="highlight">LLaMA-based chatbots</span> for natural language queries.</>},
      { text: <>Designed AI education curricula and led interactive workshops for students.</>},
      { text: <>Contributed to high-level strategic planning in a fast-paced startup environment.</>},
    ]
  },
  {
    company: <span className="highlight">Bausch + Lomb</span>,
    location: 'Bridgewater, New Jersey',
    title: 'Senior AI Innovation Developer Intern, Jun 2025 – Aug 2025',
    details: [
      { text: <>Automated conflict of interest form process using <span className="highlight">Microsoft Forms</span> and Teams approvals.</>},
      { text: <>Led a team to develop an internal eCommerce chatbot based on internal documents.</>},
      { text: <>Enhanced ServiceNow chatbot for IT ticket submissions and support info.</>},
    ]
  },
  {
    company: <span className="highlight">Bausch + Lomb</span>,
    location: 'Bridgewater, New Jersey',
    title: 'AI Innovation Developer Intern, Jun 2024 – Aug 2024',
    details: [
      { text: <>Developed a company-wide <span className="highlight">Microsoft Teams chatbot</span> for scheduling, reminders, image generation, and email summaries.</>},
      { text: <>Created an HR chatbot for the Ireland office for resume help and interview prep.</>},
      { text: <>Built a Power Automate flow for Pharmacovigilance to distribute AI approvals to 50+ countries and store responses in SharePoint.</>},
    ]
  }
];

const Experience: React.FC = () => (
  <motion.div className="fancy-page" initial="hidden" animate="visible" variants={{}}>
    <h2 className="skills-title">Professional Experience</h2>
    <div className="exp-list-modern">
      {experienceList.map((exp, i) => (
        <motion.div className="exp-card" key={i} custom={i} initial="hidden" animate="visible" variants={fadeInStagger}>
          <h3 className="exp-company">{exp.company}</h3>
          <span>{exp.location}</span><br/>
          <span>{exp.title}</span>
          <ul>
            {exp.details.map((item, j) => (
              <motion.li key={j} className="exp-item-modern" custom={j} initial="hidden" animate="visible" variants={fadeInStagger}>
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
