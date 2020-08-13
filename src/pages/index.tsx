import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MentorPsychApp from "../components/mentorpsych"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <MentorPsychApp data={data} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    events: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/events_comp/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
    resources: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/resources_comp/" } }
      sort: { fields: [frontmatter___order] }
    ) {
      edges {
        node {
          frontmatter {
            title
            icon
            url
          }
        }
      }
    }
  }
`
