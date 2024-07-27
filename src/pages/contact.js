import React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"
import "../styles/contact.css"

const ContactPage = () => (
  <Layout>
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Get in Touch</h1>
      <div className="contact-content">
        <motion.div 
          className="contact-info"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Contact Information</h2>
          <p><FaEnvelope /> Email: adnanalam0004@gmail.com</p>
          <p><FaPhone /> Phone: +91 8178756228</p>
          <p><FaLinkedin /> LinkedIn: <a href="https://linkedin.com/in/adnanalam04" target="_blank" rel="noopener noreferrer">linkedin.com/in/adnanalam04</a></p>
          <p><FaGithub /> GitHub: <a href="https://github.com/adnanalam04" target="_blank" rel="noopener noreferrer">github.com/adnanalam04</a></p>
          
          <div className="linkedin-badge">
            <div 
              className="badge-base LI-profile-badge" 
              data-locale="en_US" 
              data-size="medium" 
              data-theme="dark" 
              data-type="VERTICAL" 
              data-vanity="adnanalam04" 
              data-version="v1"
            >
              <a 
                className="badge-base__link LI-simple-link" 
                href="https://in.linkedin.com/in/adnanalam04?trk=profile-badge"
              >
                Adnan Alam
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.form 
          className="contact-form"
          name="contact" 
          method="POST" 
          data-netlify="true"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </motion.div>
  </Layout>
)

export default ContactPage
