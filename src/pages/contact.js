import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { motion, useAnimation } from "framer-motion"
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa"
import { useInView } from "react-intersection-observer"
import "../styles/contact.css"

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        damping: 10, 
        stiffness: 100 
      }
    }
  };

  return (
    <Layout>
      <motion.div 
        className="contact-container"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        ref={ref}
      >
        <h1 className="glitch" data-text="Get in Touch">Get in Touch</h1>
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            variants={containerVariants}
          >
            <h2>Contact Information</h2>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <a href="mailto:adnanalam0004@gmail.com" className="info-text">adnanalam0004@gmail.com</a>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <a href="tel:+918178756228" className="info-text">+91 8178756228</a>
            </div>
            <div className="info-item">
              <FaLinkedin className="icon" />
              <a href="https://linkedin.com/in/adnanalam04" target="_blank" rel="noopener noreferrer" className="info-text">linkedin.com/in/adnanalam04</a>
            </div>
            <div className="info-item">
              <FaGithub className="icon" />
              <a href="https://github.com/adnanalam04" target="_blank" rel="noopener noreferrer" className="info-text">github.com/adnanalam04</a>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span className="info-text">New Delhi, India</span>
            </div>
            
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
            onSubmit={handleSubmit}
            variants={containerVariants}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" disabled={formStatus === 'submitting'} className="submit-btn">
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              <FaPaperPlane className="send-icon" />
            </button>
            {formStatus === 'success' && (
              <motion.p 
                className="form-status success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Message sent successfully!
              </motion.p>
            )}
            {formStatus === 'error' && (
              <motion.p 
                className="form-status error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                There was an error sending your message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </Layout>
  )
}

export default ContactPage
