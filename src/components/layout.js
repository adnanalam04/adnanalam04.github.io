import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { ParallaxProvider } from 'react-scroll-parallax'
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaMoon, FaSun } from "react-icons/fa"
import "../styles/layout.css"

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    window.addEventListener('scroll', handleScroll)
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(savedDarkMode)
    if (savedDarkMode) {
      document.body.classList.add('dark-mode')
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle('dark-mode')
    localStorage.setItem('darkMode', !isDarkMode)
  }

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ]

  return (
    <ParallaxProvider>
      <div className={`layout ${isDarkMode ? 'dark-mode' : ''}`}>
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={scrollPosition > 50 ? "scrolled" : ""}
        >
          <div className="container">
            <motion.div
              className="logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/">Adnan Portfolio</Link>
            </motion.div>
            <nav className={isMenuOpen ? "open" : ""}>
              <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
              <AnimatePresence>
                {(isMenuOpen || (isMounted && typeof window !== 'undefined' && window.innerWidth > 768)) && (
                  <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={item.path}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link to={item.path} activeClassName="active" onClick={() => setIsMenuOpen(false)}>
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                    <motion.li
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button onClick={toggleDarkMode} className="dark-mode-toggle" aria-label="Toggle dark mode">
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                      </button>
                    </motion.li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </nav>
          </div>
        </motion.header>
        <main>{children}</main>
        <footer>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Adnan Alam | Cybersecurity Expert</p>
            <div className="social-links">
              <motion.a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><FaGithub /></motion.a>
              <motion.a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><FaLinkedin /></motion.a>
              <motion.a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><FaTwitter /></motion.a>
            </div>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  )
}

export default Layout
