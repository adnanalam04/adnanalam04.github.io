import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { motion, AnimatePresence } from "framer-motion"
import { FaCode, FaLaptopCode, FaGithub, FaLinkedin, FaTwitter, FaCertificate, FaChevronRight, FaBlog, FaShieldAlt, FaBug, FaLock } from "react-icons/fa"
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

    setTypingSpeed(isDeleting ? 20 : 100);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 700);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(300);
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
                <motion.span
                  key={loopNum}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {loopNum % phrases.length === 0 ? (
                    <span className="typewriter">{text}</span>
                  ) : (
                    <>
                      I am a <span className="typewriter">{text}</span>
                    </>
                  )}
                </motion.span>
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
              transition={{ delay: 0.4 }}
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
            <p>I'm a passionate cybersecurity professional with expertise in ethical hacking, digital forensics, and secure software development. My mission is to protect digital assets and empower organizations against evolving cyber threats.</p>
            <Link to="/about" className="learn-more">
              <motion.span whileHover={{ x: 5 }}>
                Learn More About Me <FaChevronRight />
              </motion.span>
            </Link>
          </div>
          <div className="skills">
            <h3>Key Skills</h3>
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
          className="testimonials"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2>What People Say</h2>
          <div className="testimonial-grid">
            <TestimonialCard
              text="Adnan's expertise in cybersecurity is unparalleled. He helped us secure our systems and prevent potential breaches."
              author="John Doe, CEO of TechCorp"
            />
            <TestimonialCard
              text="Working with Adnan was a game-changer for our organization. His insights and solutions are invaluable."
              author="Jane Smith, CTO of SecureNet"
            />
            <TestimonialCard
              text="Adnan's ethical hacking skills uncovered vulnerabilities we never knew existed. Highly recommended!"
              author="Mike Johnson, CISO of DataGuard"
            />
          </div>
        </motion.section>

        <motion.section
          className="cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
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
            >
              <Link to="/contact" className="cta-button">
                <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Get Started
                  <FaChevronRight className="cta-icon" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
          <div className="cta-overlay"></div>
        </motion.section>

        <motion.section
          className="social-proof"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2>Connect With Me</h2>
          <div className="social-icons">
            <SocialIcon href="https://github.com/adnanalam04" icon={FaGithub} />
            <SocialIcon href="https://linkedin.com/in/adnanalam04" icon={FaLinkedin} />
            <SocialIcon href="https://twitter.com/addyy04" icon={FaTwitter} />
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

const TestimonialCard = ({ text, author }) => (
  <motion.div
    className="testimonial-card"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <p>"{text}"</p>
    <h4>{author}</h4>
  </motion.div>
)

const SocialIcon = ({ href, icon: Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon />
  </motion.a>
)

export default IndexPage
