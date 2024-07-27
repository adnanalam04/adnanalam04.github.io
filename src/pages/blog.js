import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import "../styles/blog.css"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark ? data.allMarkdownRemark.edges : []

  return (
    <Layout>
      <motion.div 
        className="blog-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>My Cybersecurity Blog</h1>
        <p className="intro">
          Welcome to my blog! Here, I share insights, tutorials, and thoughts on cybersecurity, 
          ethical hacking, and the latest trends in technology.
        </p>
        
        {posts.length > 0 ? (
          <div className="blog-posts">
            {posts.map(({ node }) => (
              <motion.article 
                key={node.id}
                className="blog-post"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Link to={node.fields.slug}>
                  <h2>{node.frontmatter.title}</h2>
                  <p className="post-date">{node.frontmatter.date}</p>
                  <p>{node.excerpt}</p>
                  <span className="read-more">Read more →</span>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <p>No blog posts found. Check back soon for updates!</p>
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
        }
      }
    }
  }
`

export default BlogPage
