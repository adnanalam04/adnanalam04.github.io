import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "@reach/router"
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes, FaHome, FaUser, FaProjectDiagram, FaCogs, FaBlog, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa"
import "./layout.css"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hideNav, setHideNav] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const location = useLocation()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setHideNav(true)
      } else {
        setHideNav(false)
      }

      if (currentScrollY > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const menuItems = [
    { path: "/", label: "Home", icon: FaHome },
    { path: "/about", label: "About", icon: FaUser },
    { path: "/projects", label: "Projects", icon: FaProjectDiagram },
    { path: "/services", label: "Services", icon: FaCogs },
    { path: "/blog", label: "Blog", icon: FaBlog },
    { path: "/contact", label: "Contact", icon: FaEnvelope },
  ]

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/adnanalam04" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/adnanalam04" },
    { icon: FaTwitter, url: "https://twitter.com/addyy04" },
  ]

  const Footer = () => (
    <footer className={`footer ${location.pathname === "/" ? "footer-home" : "footer-minimal"}`}>
      <div className="container">
        {location.pathname === "/" && (
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">Contact</h3>
              <p><FaEnvelope className="footer-icon" /> adnanalam0004@gmail.com</p>
              <p><FaPhone className="footer-icon" /> +91 8178756228</p>
              <p><FaMapMarkerAlt className="footer-icon" /> New Delhi, India</p>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Connect</h3>
              <div className="footer-social">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                    <link.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="footer-credit">
          <p>Designed and developed with <span className="heart">❤️</span> by Adnan Alam</p>
        </div>
      </div>
    </footer>
  )

  return (
    <>
      <header className={`header ${hideNav ? 'hide' : ''}`}>
        <div className="container">
          <Link to="/" className="logo">
            Adnan's Portfolio
          </Link>
          <nav className={`nav ${isOpen ? "open" : ""}`}>
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={item.path} activeClassName="active">
                  <item.icon className="nav-icon" />
                  <span className="nav-text">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.button 
            className="menu-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={item.path} activeClassName="active" onClick={() => setIsOpen(false)}>
                  <item.icon className="nav-icon" />
                  <span className="nav-text">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <main>
        <div className="page-content">
          {children}
        </div>
      </main>
      <Footer />
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
