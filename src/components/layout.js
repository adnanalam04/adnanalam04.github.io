import React, { useEffect } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import "../styles/global.css"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://platform.linkedin.com/badges/js/profile.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Helmet>
        <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
      </Helmet>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <footer>
        <div 
          className="badge-base LI-profile-badge" 
          data-locale="en_US" 
          data-size="medium" 
          data-theme="dark" 
          data-type="HORIZONTAL" 
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
        <p>© {new Date().getFullYear()} Adnan Alam | Cybersecurity Expert</p>
      </footer>
    </>
  )
}

export default Layout
