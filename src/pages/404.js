import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FaHome, FaSearch, FaArrowLeft } from "react-icons/fa"
import "../styles/404.css"

const NotFoundPage = () => (
  <Layout>
    <div className="not-found-container">
      <h1 className="not-found-title">Oops! Page Not Found</h1>
      <div className="not-found-image">
        <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/page_not_found_su7k.svg" alt="404 Illustration" />
      </div>
      <p className="not-found-description">
        It seems you've ventured into uncharted digital territory. Don't worry, even the best hackers make mistakes sometimes!
      </p>
      <div className="not-found-actions">
        <Link to="/" className="not-found-button primary">
          <FaHome /> Return to Homepage
        </Link>
        <button onClick={() => window.history.back()} className="not-found-button secondary">
          <FaArrowLeft /> Go Back
        </button>
      </div>
      <div className="not-found-search">
        <h2>Looking for something specific?</h2>
        <form className="search-form" onSubmit={(e) => { e.preventDefault(); /* Add your search logic here */ }}>
          <input type="text" placeholder="Search our site..." />
          <button type="submit"><FaSearch /></button>
        </form>
      </div>
      <div className="not-found-suggestions">
        <h3>You might find these helpful:</h3>
        <ul>
          <li><Link to="/blog">Latest Blog Posts</Link></li>
          <li><Link to="/projects">Featured Projects</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/contact">Get in Touch</Link></li>
        </ul>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Page Not Found" />

export default NotFoundPage
