const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`)
  const tagTemplate = path.resolve(`src/templates/tag.js`)

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              date
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.postsRemark.edges

  // Create blog post pages
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  })

  // Create tag pages
  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String!
      date: Date! @dateformat
      tags: [String!]!
      description: String
      featuredImage: File @fileByRelativePath
    }
    type Fields {
      slug: String!
    }
  `
  createTypes(typeDefs)
}
