import React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import { FaShieldAlt, FaSearch, FaCloud, FaNetworkWired, FaLaptopCode, FaClipboardCheck, FaFileAlt, FaBug, FaExclamationTriangle, FaChalkboardTeacher } from "react-icons/fa"
import "../styles/services.css"

const ServiceCard = ({ icon, title, description }) => (
  <motion.div 
    className="service-card"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
)

const ServicesPage = () => (
  <Layout>
    <motion.div 
      className="services-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Cybersecurity Services</h1>
      <p className="intro">
        Protect your digital assets with our comprehensive range of cybersecurity services. 
        We offer cutting-edge solutions to safeguard your organization against evolving cyber threats.
      </p>
      
      <div className="services-grid">
        <ServiceCard 
          icon={<FaShieldAlt />}
          title="Penetration Testing"
          description="Identify vulnerabilities in your systems and networks through simulated cyber attacks."
        />
        <ServiceCard 
          icon={<FaSearch />}
          title="Vulnerability Assessment"
          description="Systematically review your security posture to uncover potential weaknesses."
        />
        <ServiceCard 
          icon={<FaCloud />}
          title="Cloud Security"
          description="Secure your cloud infrastructure and ensure data protection in the cloud environment."
        />
        <ServiceCard 
          icon={<FaNetworkWired />}
          title="Network Security"
          description="Implement robust security measures to protect your network from unauthorized access and attacks."
        />
        <ServiceCard 
          icon={<FaLaptopCode />}
          title="Web Application Security"
          description="Secure your web applications against common vulnerabilities and sophisticated attacks."
        />
        <ServiceCard 
          icon={<FaClipboardCheck />}
          title="Security Auditing"
          description="Comprehensive review of your security policies, procedures, and controls."
        />
        <ServiceCard 
          icon={<FaFileAlt />}
          title="Digital Forensics"
          description="Investigate cyber incidents and collect digital evidence for legal proceedings."
        />
        <ServiceCard 
          icon={<FaBug />}
          title="Malware Analysis"
          description="Analyze and mitigate threats from malicious software to prevent infections."
        />
        <ServiceCard 
          icon={<FaExclamationTriangle />}
          title="Incident Response"
          description="Rapidly respond to and mitigate the impact of security breaches and cyber attacks."
        />
        <ServiceCard 
          icon={<FaChalkboardTeacher />}
          title="Security Training"
          description="Educate your team on best practices in cybersecurity to create a security-aware culture."
        />
      </div>
    </motion.div>
  </Layout>
)

export default ServicesPage
