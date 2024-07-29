import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import { FaCalendarAlt, FaClock, FaTags } from "react-icons/fa"
import "../styles/blogPost.css"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <motion.article 
        className="blog-post-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <header>
          <h1>{post.frontmatter.title}</h1>
          <div className="post-meta">
            <span><FaCalendarAlt /> {post.frontmatter.date}</span>
            <span><FaClock /> {post.timeToRead} min read</span>
          </div>
          {post.frontmatter.tags && (
            <div className="post-tags">
              <FaTags />
              {post.frontmatter.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </header>
        <div 
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <footer>
          <Link to="/blog" className="back-link">&larr; Back to all posts</Link>
        </footer>
      </motion.article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
      timeToRead
    }
  }
`
