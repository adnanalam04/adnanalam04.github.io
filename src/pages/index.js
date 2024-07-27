import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import { FaShieldAlt, FaCode, FaLaptopCode } from "react-icons/fa"
import "../styles/home.css"
import profilePic from '../images/pic.jpg';

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <div className="hero-content">
        <motion.div
          className="profile-picture"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={profilePic} alt="Adnan Alam" />
        </motion.div>
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Adnan Alam
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Cybersecurity Expert | Ethical Hacker | Developer
          </motion.h2>
          <motion.div
            className="cta-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/contact">Get in Touch</Link>
          </motion.div>
        </div>
      </div>
    </div>

    <motion.div
      className="expertise-areas"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="expertise-item">
        <FaShieldAlt />
        <h3>Cybersecurity</h3>
        <p>Protecting digital assets with cutting-edge security solutions</p>
      </div>
      <div className="expertise-item">
        <FaCode />
        <h3>Ethical Hacking</h3>
        <p>Identifying vulnerabilities to strengthen system defenses</p>
      </div>
      <div className="expertise-item">
        <FaLaptopCode />
        <h3>Development</h3>
        <p>Creating secure, efficient, and scalable applications</p>
      </div>
    </motion.div>

    <motion.div
      className="brief-intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <p>
        With expertise in penetration testing, vulnerability assessment, and
        digital forensics, I help organizations safeguard their digital
        infrastructure against evolving cyber threats.
      </p>
    </motion.div>
  </Layout>
)

export default IndexPage
