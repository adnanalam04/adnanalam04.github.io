import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import { FaCode, FaLaptopCode, FaGithub, FaLinkedin, FaTwitter, FaCertificate, FaChevronRight, FaBlog } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/home.css"

// Manually updated stats
const stats = {
  linkedinFollowers: "23,307",
  blogsPublished: 1,
  certifications: 8,
  projectsCompleted: 5
};

const IndexPage = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100); // Increased speed

  const phrases = [
    'Hey, I am Adnan',
    'Cyber Guy',
    'Researcher',
    'Web Developer',
    'Programmer'
  ];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleType = () => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

    setTypingSpeed(isDeleting ? 20 : 100); // Faster typing and deleting

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 700); // Shorter pause at the end
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(300); // Shorter pause between phrases
    }
  };

  return (
    <Layout>
      <motion.div 
        className="home-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="hero">
          <div className="hero-content">
            <h1>
              {loopNum % phrases.length === 0 ? (
                <span className="typewriter">{text}</span>
              ) : (
                <>
                  I am a <span className="typewriter">{text}</span>
                </>
              )}
            </h1>
            <motion.div
              className="cta-buttons"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/projects" className="cta-button">View Projects</Link>
              <Link to="/contact" className="cta-button secondary">Get in Touch</Link>
            </motion.div>
          </div>
          <div className="hero-image">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <StaticImage
                src="../images/Profilepic.jpg"
                alt="Adnan Alam"
                placeholder="blurred"
                layout="fixed"
                width={300}
                height={300}
                className="profile-picture"
              />
            </motion.div>
          </div>
        </section>


        {/* Rest of the component remains unchanged */}
        <section className="stats">
          <div className="stats-container">
            <div className="stat-item">
              <FaLinkedin className="stat-icon" />
              <span className="stat-number">{stats.linkedinFollowers}</span>
              <p className="stat-label">LinkedIn Followers</p>
            </div>
            <div className="stat-item">
              <FaBlog className="stat-icon" />
              <span className="stat-number">{stats.blogsPublished}</span>
              <p className="stat-label">Blogs Published</p>
            </div>
            <div className="stat-item">
              <FaCertificate className="stat-icon" />
              <span className="stat-number">{stats.certifications}</span>
              <p className="stat-label">Certifications</p>
            </div>
            <div className="stat-item">
              <FaCode className="stat-icon" />
              <span className="stat-number">{stats.projectsCompleted}</span>
              <p className="stat-label">Projects Completed</p>
            </div>
          </div>
        </section>

        <section className="about-preview">
          <div className="about-content">
            <h2>About Me</h2>
            <p>I'm a passionate cybersecurity professional with expertise in ethical hacking, digital forensics, and secure software development. My mission is to protect digital assets and empower organizations against evolving cyber threats.</p>
            <Link to="/about" className="learn-more">Learn More About Me <FaChevronRight /></Link>
          </div>
          <div className="skills">
            <h3>Key Skills</h3>
            <ul>
              <li><FaCode /> Penetration Testing</li>
              <li><FaCode /> Secure Coding Practices</li>
              <li><FaLaptopCode /> Vulnerability Assessment</li>
              <li><FaCode /> Digital Forensics</li>
              <li><FaCode /> Network Security</li>
              <li><FaLaptopCode /> Incident Response</li>
            </ul>
          </div>
        </section>

        <section className="testimonials">
          <h2>What People Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>"Adnan's expertise in cybersecurity is unparalleled. He helped us secure our systems and prevent potential breaches."</p>
              <h4>John Doe, CEO of TechCorp</h4>
            </div>
            <div className="testimonial-card">
              <p>"Working with Adnan was a game-changer for our organization. His insights and solutions are invaluable."</p>
              <h4>Jane Smith, CTO of SecureNet</h4>
            </div>
            <div className="testimonial-card">
              <p>"Adnan's ethical hacking skills uncovered vulnerabilities we never knew existed. Highly recommended!"</p>
              <h4>Mike Johnson, CISO of DataGuard</h4>
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="cta-background"></div>
          <div className="cta-content">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Ready to Secure Your Digital Future?
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Let's build a robust security infrastructure together.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="cta-button">
                Get Started
                <FaChevronRight className="cta-icon" />
              </Link>
            </motion.div>
          </div>
          <div className="cta-overlay"></div>
        </section>

        <section className="social-proof">
          <h2>Connect With Me</h2>
          <div className="social-icons">
            <a href="https://github.com/adnanalam04" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/adnanalam04" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com/addyy04" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </section>
      </motion.div>
    </Layout>
  )
}

export default IndexPage
