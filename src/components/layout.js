import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { ParallaxProvider } from 'react-scroll-parallax'
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"
import "../styles/layout.css"

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <ParallaxProvider>
      <div className="layout">
        <header>
          <div className="container">
            <div className="logo">
              <Link to="/">Adnan Portfolio</Link>
            </div>
            <nav className={isMenuOpen ? "open" : ""}>
              <button className="menu-toggle" onClick={toggleMenu}>
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
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                    <li><Link to="/about" activeClassName="active">About</Link></li>
                    <li><Link to="/services" activeClassName="active">Services</Link></li>
                    <li><Link to="/projects" activeClassName="active">Projects</Link></li>
                    <li><Link to="/blog" activeClassName="active">Blog</Link></li>
                    <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Adnan Alam | Cybersecurity Expert</p>
            <div className="social-links">
              {/* Add your social media links here */}
            </div>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  )
}

export default Layout
