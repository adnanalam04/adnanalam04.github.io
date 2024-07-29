import React, { useState } from "react"
import Layout from "../components/layout"
import { motion, AnimatePresence } from "framer-motion"
import { FaShieldAlt, FaSearch, FaCloud, FaNetworkWired, FaLaptopCode, FaClipboardCheck, FaFileAlt, FaBug, FaExclamationTriangle, FaChalkboardTeacher, FaLock, FaUserShield, FaCode, FaMobileAlt } from "react-icons/fa"
import "../styles/services.css"

const ServiceCard = ({ icon, title, description, category }) => (
  <motion.div 
    className={`service-card ${category}`}
    whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,255,255,0.2)" }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="service-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
)

const ServicesPage = () => {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const services = [
    {
      icon: <FaShieldAlt />,
      title: "Penetration Testing",
      description: "Identify vulnerabilities in your systems and networks through simulated cyber attacks.",
      category: "assessment"
    },
    {
      icon: <FaSearch />,
      title: "Vulnerability Assessment",
      description: "Systematically review your security posture to uncover potential weaknesses.",
      category: "assessment"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Security",
      description: "Secure your cloud infrastructure and ensure data protection in the cloud environment.",
      category: "protection"
    },
    {
      icon: <FaNetworkWired />,
      title: "Network Security",
      description: "Protect your network infrastructure from unauthorized access and cyber threats.",
      category: "protection"
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Incident Response",
      description: "Rapidly respond to and mitigate cybersecurity incidents to minimize damage.",
      category: "response"
    },
    {
      icon: <FaLock />,
      title: "Data Encryption",
      description: "Implement robust encryption solutions to protect sensitive data at rest and in transit.",
      category: "protection"
    },
    {
      icon: <FaUserShield />,
      title: "Security Awareness Training",
      description: "Educate your employees on cybersecurity best practices and threat recognition.",
      category: "protection"
    },
    {
      icon: <FaCode />,
      title: "Secure Code Review",
      description: "Analyze your application code to identify and fix security vulnerabilities.",
      category: "assessment"
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Security",
      description: "Ensure the security of your mobile applications against various threats and vulnerabilities.",
      category: "assessment"
    },
    {
      icon: <FaClipboardCheck />,
      title: "Compliance Assessment",
      description: "Evaluate and ensure compliance with industry standards and regulations (GDPR, HIPAA, PCI DSS).",
      category: "assessment"
    }
  ]

  const filteredServices = services
    .filter(service => filter === "all" || service.category === filter)
    .filter(service => 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <Layout>
      <motion.div 
        className="services-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="glitch" data-text="Cybersecurity Services">Cybersecurity Services</h1>
        <p className="intro">
          Protect your digital assets with our comprehensive range of cybersecurity services. 
          We offer cutting-edge solutions to safeguard your organization against evolving cyber threats.
        </p>
        
        <div className="filter-search-container">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search services..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-buttons">
            <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
            <button className={filter === "assessment" ? "active" : ""} onClick={() => setFilter("assessment")}>Assessment</button>
            <button className={filter === "protection" ? "active" : ""} onClick={() => setFilter("protection")}>Protection</button>
            <button className={filter === "response" ? "active" : ""} onClick={() => setFilter("response")}>Response</button>
          </div>
        </div>
        
        <motion.div 
          className="services-grid"
          layout
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredServices.length === 0 && (
          <p className="no-results">No services found. Try adjusting your search or filter.</p>
        )}
      </motion.div>
    </Layout>
  )
}

export default ServicesPage
