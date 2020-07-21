import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MentorPsychApp from "../components/mentorpsych"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MentorPsychApp />
  </Layout>
)

export default IndexPage
