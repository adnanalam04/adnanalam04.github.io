import React from "react"
import Layout from "../components/Layout"
import { motion } from "framer-motion"
import { FaGraduationCap, FaCertificate, FaTools } from "react-icons/fa"
import "../styles/about.css"

const AboutPage = () => (
  <Layout>
    <motion.div 
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>About Adnan Alam</h1>
      <p className="intro">
        I'm a passionate cybersecurity professional with expertise in ethical hacking, 
        digital forensics, and secure software development. My mission is to protect 
        digital assets and empower organizations to defend against cyber threats.
      </p>

      <motion.section 
        className="education"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2><FaGraduationCap /> Education</h2>
        <ul>
          <li>
            <strong>Bachelor of Technology in Computer Science and Cybersecurity</strong>
            <p>Sharda University (Aug 2021 - Present)</p>
          </li>
          <li>
            <strong>Diploma in Computer Science and Engineering</strong>
            <p>Arunachal University of Studies (Jul 2019 - Jul 2021), GPA: 9.1</p>
          </li>
          <li>
            <strong>Diploma in Cyber Security</strong>
            <p>CRAW Cyber Security Institute, Saket, Delhi (Nov 2019 - Nov 2020)</p>
          </li>
        </ul>
      </motion.section>

      <motion.section 
        className="competencies"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2><FaTools /> Core Competencies</h2>
        <ul>
          <li>Penetration Testing</li>
          <li>Vulnerability Assessment</li>
          <li>Cloud Security</li>
          <li>Network Security</li>
          <li>Web Application Security</li>
          <li>Security Auditing</li>
          <li>Digital Forensics</li>
          <li>Social Engineering</li>
          <li>Reverse Engineering</li>
          <li>Malware Analysis</li>
          <li>Exploit Development</li>
        </ul>
      </motion.section>

      <motion.section 
        className="certifications"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2><FaCertificate /> Certifications</h2>
        <ul>
          <li>Microsoft Certified: Security, Compliance, and Identity Fundamentals (May 2023)</li>
          <li>Vulnerability Assessment and Penetration Testing (VAPT) (Oct 2022)</li>
          <li>Computer Hacking Forensic Investigator (CHFI) (Jul 2021)</li>
          <li>Certified Ethical Hacker (CEH) (Oct 2020)</li>
          <li>Certified Web Penetration Tester (CWPT) (Jul 2020)</li>
        </ul>
      </motion.section>
    </motion.div>
  </Layout>
)

export default AboutPage
