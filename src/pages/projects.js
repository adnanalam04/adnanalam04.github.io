import React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import "../styles/projects.css"

const ProjectCard = ({ title, description, tags, githubLink, liveLink, image }) => (
  <motion.div 
    className="project-card"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <img src={image} alt={title} className="project-image" />
    <div className="project-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
)

const ProjectsPage = () => (
  <Layout>
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>My Projects</h1>
      <p className="intro">
        Here are some of the key projects I've worked on in the fields of cybersecurity, 
        ethical hacking, and software development. Each project demonstrates my skills 
        and expertise in creating secure and efficient solutions.
      </p>
      
      <div className="projects-grid">
        <ProjectCard 
          title="Secure File Encryption System"
          description="Developed a robust file encryption system using AES-256 encryption algorithm, ensuring data confidentiality and integrity."
          tags={["Python", "Cryptography", "Data Security"]}
          githubLink="https://github.com/yourusername/secure-file-encryption"
          image="/images/project1.jpg"
        />
        <ProjectCard 
          title="Network Intrusion Detection System"
          description="Created an AI-powered network intrusion detection system capable of identifying and alerting on potential security threats in real-time."
          tags={["Machine Learning", "Network Security", "Python"]}
          githubLink="https://github.com/yourusername/network-ids"
          image="/images/project2.jpg"
        />
        <ProjectCard 
          title="Web Application Vulnerability Scanner"
          description="Built an automated web application vulnerability scanner to identify common security flaws such as XSS, SQL injection, and CSRF."
          tags={["Python", "Web Security", "Automation"]}
          githubLink="https://github.com/yourusername/web-vuln-scanner"
          liveLink="https://web-vuln-scanner-demo.netlify.app"
          image="/images/project3.jpg"
        />
        <ProjectCard 
          title="Secure Password Manager"
          description="Developed a secure password manager with end-to-end encryption, two-factor authentication, and cross-platform synchronization."
          tags={["React", "Node.js", "Encryption"]}
          githubLink="https://github.com/yourusername/secure-password-manager"
          liveLink="https://secure-pass-manager.netlify.app"
          image="/images/project4.jpg"
        />
        {/* Add more ProjectCard components for your other projects */}
      </div>
    </motion.div>
  </Layout>
)

export default ProjectsPage
