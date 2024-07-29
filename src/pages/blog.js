import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { motion, AnimatePresence } from "framer-motion"
import { FaSearch, FaCalendarAlt, FaClock } from "react-icons/fa"
import "../styles/blog.css"

const BlogPage = ({ data }) => {
  const allPosts = data.allMarkdownRemark ? data.allMarkdownRemark.edges : []
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPosts, setFilteredPosts] = useState(allPosts)

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = allPosts.filter(({ node }) => 
      node.frontmatter.title.toLowerCase().includes(term) ||
      node.excerpt.toLowerCase().includes(term)
    )
    setFilteredPosts(filtered)
  }

  return (
    <Layout>
      <motion.div 
        className="blog-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="glitch" data-text="My Cybersecurity Blog">My Cybersecurity Blog</h1>
        <p className="intro">
          Welcome to my blog! Here, I share insights, tutorials, and thoughts on cybersecurity, 
          ethical hacking, and the latest trends in technology.
        </p>
        
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        {filteredPosts.length > 0 ? (
          <AnimatePresence>
            <motion.div className="blog-posts" layout>
              {filteredPosts.map(({ node }) => (
                <motion.article 
                  key={node.id}
                  className="blog-post"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Link to={node.fields.slug}>
                    <h2>{node.frontmatter.title}</h2>
                    <div className="post-meta">
                      <span className="post-date"><FaCalendarAlt /> {node.frontmatter.date}</span>
                      <span className="post-read-time"><FaClock /> {node.timeToRead} min read</span>
                    </div>
                    <p>{node.excerpt}</p>
                    <span className="read-more">Read more →</span>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="no-posts"
          >
            No blog posts found. Check back soon for updates!
          </motion.p>
        )}
      </motion.div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`

export default BlogPage
