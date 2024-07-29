import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaStar, FaShieldAlt, FaBug, FaLock, FaSearch, FaFilter, FaCode, FaRobot, FaChartBar } from "react-icons/fa"
import "../styles/projects.css"

const ProjectCard = ({ title, description, tags, githubLink, liveLink, image, isFeatured, icon }) => (
  <motion.div 
    className={`project-card ${isFeatured ? 'featured' : ''}`}
    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 255, 255, 0.2)" }}
    transition={{ duration: 0.2 }}
  >
    <div className="project-image-container">
      <img src={image} alt={title} className="project-image" />
      <div className="project-overlay">
        <h3>{icon} {title} {isFeatured && <FaStar className="featured-icon" />}</h3>
      </div>
    </div>
    <div className="project-content">
      <h3>{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
)

const ProjectsPage = () => {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // Initialize projects (you can replace this with an API call if needed)
    setProjects([
      {
        id: 1,
        title: "Adnan Portfolio",
        description: "My personal portfolio website built with React and Gatsby, showcasing my projects and skills.",
        tags: ["React", "Gatsby", "Web Development"],
        githubLink: "https://github.com/adnanalam04/adnanportfolio",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        isFeatured: true,
        icon: <FaCode />
      },
      {
        id: 2,
        title: "Chatbot",
        description: "An intelligent chatbot implementation using Python and natural language processing techniques.",
        tags: ["Python", "NLP", "AI"],
        githubLink: "https://github.com/adnanalam04/chatbot",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        isFeatured: false,
        icon: <FaRobot />
      },
      {
        id: 3,
        title: "Secure File Encryption System",
        description: "A robust file encryption system using AES-256 algorithm to ensure data confidentiality and integrity.",
        tags: ["Python", "Cryptography", "Data Security"],
        githubLink: "https://github.com/adnanalam04/secure-file-encryption",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        isFeatured: false,
        icon: <FaLock />
      },
      {
        id: 4,
        title: "Network Intrusion Detection System",
        description: "An AI-powered network intrusion detection system for real-time threat identification and analysis.",
        tags: ["Python", "Machine Learning", "Network Security"],
        githubLink: "https://github.com/adnanalam04/network-ids",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        isFeatured: false,
        icon: <FaShieldAlt />
      },
      {
        id: 5,
        title: "Web Vulnerability Scanner",
        description: "An automated web application vulnerability scanner to identify and report common security flaws.",
        tags: ["Python", "Web Security", "Automation"],
        githubLink: "https://github.com/adnanalam04/web-vuln-scanner",
        liveLink: "https://web-vuln-scanner-demo.netlify.app",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        isFeatured: false,
        icon: <FaBug />
      },
      {
        id: 6,
        title: "Data Analysis Projects",
        description: "A collection of data analysis projects showcasing various techniques, tools, and insights derived from complex datasets.",
        tags: ["Python", "Data Analysis", "Visualization"],
        githubLink: "https://github.com/adnanalam04/Data-Analysis-Projects",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        isFeatured: false,
        icon: <FaChartBar />
      }
    ])
  }, [])

  const filteredProjects = projects
    .filter(project => filter === "all" || project.tags.includes(filter))
    .filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))

  return (
    <Layout>
      <motion.div 
        className="projects-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="glitch" data-text="My Projects">My Projects</h1>
        <p className="intro">
          Explore my portfolio of cybersecurity, software development, and data analysis projects. 
          Each project showcases my commitment to creating secure, innovative, and data-driven solutions.
        </p>
        
        <div className="filter-search-container">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="filter-toggle" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <FaFilter /> Filter
          </button>
        </div>

        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              className="filter-container"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
              <button className={filter === "Python" ? "active" : ""} onClick={() => setFilter("Python")}>Python</button>
              <button className={filter === "Web Security" ? "active" : ""} onClick={() => setFilter("Web Security")}>Web Security</button>
              <button className={filter === "Cryptography" ? "active" : ""} onClick={() => setFilter("Cryptography")}>Cryptography</button>
              <button className={filter === "Data Analysis" ? "active" : ""} onClick={() => setFilter("Data Analysis")}>Data Analysis</button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          <motion.div className="projects-grid" layout>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <p className="no-results">No projects found. Try adjusting your search or filter.</p>
        )}
      </motion.div>
    </Layout>
  )
}

export default ProjectsPage
