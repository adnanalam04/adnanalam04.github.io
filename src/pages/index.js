import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { motion, AnimatePresence } from "framer-motion"
import { FaCode, FaLaptopCode, FaLinkedin, FaCertificate, FaChevronRight, FaBlog, FaShieldAlt, FaBug, FaLock } from "react-icons/fa"
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
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isRestarting, setIsRestarting] = useState(false);

  const phrases = [
    'Hey, I am Adnan',
    'Cyber Security Specialist',
    'Ethical Hacker',
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

    setTypingSpeed(isDeleting ? 20 : 50);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(200);
      setIsRestarting(true);
      setTimeout(() => setIsRestarting(false), 100);
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
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={loopNum}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="typewriter-container"
                >
                  {loopNum % phrases.length === 0 ? (
                    <span className={`typewriter ${isRestarting ? 'restart' : ''}`}>{text}</span>
                  ) : (
                    <>
                      I am a <span className={`typewriter ${isRestarting ? 'restart' : ''}`}>{text}</span>
                    </>
                  )}
                  <span className="typewriter-cursor"></span>
                </motion.div>
              </AnimatePresence>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Protecting digital assets and empowering organizations against cyber threats
            </motion.p>
            <motion.div
              className="cta-buttons"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link to="/projects" className="cta-button">
                <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  View Projects
                </motion.span>
              </Link>
              <Link to="/contact" className="cta-button secondary">
                <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Get in Touch
                </motion.span>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
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
        </section>

        <motion.section
          className="stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="stats-container">
            <StatItem icon={FaLinkedin} number={stats.linkedinFollowers} label="LinkedIn Followers" />
            <StatItem icon={FaBlog} number={stats.blogsPublished} label="Blogs Published" />
            <StatItem icon={FaCertificate} number={stats.certifications} label="Certifications" />
            <StatItem icon={FaCode} number={stats.projectsCompleted} label="Projects Completed" />
          </div>
        </motion.section>

        <motion.section
          className="about-preview"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="about-content">
            <h2>About Me</h2>
            <p>Hi, my name is Adnan and I am a B-tech student in computer science and engineering.</p>
            <p>I am passionate about technology and constantly seeking to learn and grow in this field. My expertise lies in cyber security, and I am dedicated to staying up-to-date on the latest developments and trends in this rapidly evolving field.</p>
            <p>I believe that cyber security is crucial in today's digital age and am committed to helping others understand the importance of staying secure online.</p>
            <p>I am always open to new learning opportunities and am excited to see where my passion for technology takes me in the future. </p>
            <Link to="/about" className="learn-more">
              <motion.span whileHover={{ x: 5 }}>
                Learn More About Me <FaChevronRight />
              </motion.span>
            </Link>
          </div>
          <div className="skills">
            <h3><center>Key Skills</center></h3>
            <ul>
              <SkillItem icon={FaShieldAlt} skill="Penetration Testing" />
              <SkillItem icon={FaLock} skill="Secure Coding Practices" />
              <SkillItem icon={FaBug} skill="Vulnerability Assessment" />
              <SkillItem icon={FaLaptopCode} skill="Digital Forensics" />
              <SkillItem icon={FaCode} skill="Network Security" />
              <SkillItem icon={FaShieldAlt} skill="Incident Response" />
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="cta-content">
            <h2>Ready to Secure Your Digital Future?</h2>
            <p>Let's build a robust security infrastructure together.</p>
            <Link to="/contact" className="cta-button">
              <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Get Started
                <FaChevronRight className="cta-icon" />
              </motion.span>
            </Link>
          </div>
        </motion.section>
      </motion.div>
    </Layout>
  )
}

const StatItem = ({ icon: Icon, number, label }) => (
  <motion.div
    className="stat-item"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="stat-icon" />
    <span className="stat-number">{number}</span>
    <p className="stat-label">{label}</p>
  </motion.div>
)

const SkillItem = ({ icon: Icon, skill }) => (
  <motion.li whileHover={{ x: 5 }}>
    <Icon /> {skill}
  </motion.li>
)

export default IndexPage
