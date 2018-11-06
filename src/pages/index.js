import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout, {CategoryBlock, ArticleRow, Link} from '../components/Layout'

const colors = {
    white: "#ffffff",
    green: "#1FB714",
    yellow: "#FBF305",
    darkgreen: "#006412",
    orange: "#FF6403",
    brown: "#562C05",
    red: "#DD0907",
    tan: "#90713A",
    magenta: "#F20884",
    lightgrey: "#C0C0C0",
    purple: "#4700A5",
    mediumgrey: "#808080",
    blue: "#0000D3",
    darkgrey: "#404040",
    cyan: "#02ABEA",
    lightmint: "#95DCC8",
    mint: "#83B59E",
    textmint: "#5DA080",
    darkmint: "#1B7963",
    lightbrown: "#856D57",
    black: "#000000",
}

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const postsByCategory = gatherByCategory(posts)

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 style={{ color: colors.darkmint }}>Articles</h1>
            </div>
            {postsByCategory
              .map(({ category, posts }) => (
                <CategoryBlock key={category}>
                    <h2 style={{ fontSize: '1.2rem', margin: 0}}>{category}</h2>
                {posts.map(({node: post}) => (
                    <ArticleRow
                      className="content"
                      style={{ margin: '0.25rem 0rem'}}
                      key={post.id}
                    >
                        <Link to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link>
                        <span> &bull; </span>
                        <small >{post.frontmatter.description}</small>
                    </ArticleRow>
                ))}
                </CategoryBlock>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

const HatchRule = ({width, height}) => {
    return <svg width={width} height={height} viewBox={"0 0 " + width + " " + height}>
    </svg>
}

const gatherByCategory = (posts) => {
    let categories = posts.reduce((current, {node: post}) => (current.length && current[current.length-1] === post.frontmatter.category) ? current : [...current, post.frontmatter.category], [])
    console.log(categories)
    return categories.map((category) => ({
        category,
        posts: posts.filter(({node: post}) => post.frontmatter.category === category)
    }))
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___category] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            category
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
