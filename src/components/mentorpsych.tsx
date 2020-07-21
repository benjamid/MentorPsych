/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./mentorpsych.scss"

const MentorPsychApp = () => {
  return (
    <main className="app-container">
      <div className="mentor-container">
        <iframe
          src="https://mentorpal.org/mentorpanel/?mentor=clint"
          title="MentorPal Test"
          className="mentorpal-frame"
        ></iframe>
      </div>
      <div className="resources-container">
        <h2>Resources</h2>
        <span>Resources will go here</span>
      </div>
      <div className="events-container">
        <h2>Events</h2>
        <span>Events will go here</span>
      </div>
    </main>
  )
}

export default MentorPsychApp
