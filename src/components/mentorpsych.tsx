import React from "react"
import "./mentorpsych.scss"
import EventsComponent from "./events"
import MentorPal from "./mentorpal"

const MentorPsychApp = () => {
  return (
    <main className="app-container">
      <div className="mentor-container">
        <MentorPal />
      </div>
      <div className="resources-container">
        <h2>Resources</h2>
        <span>Resources will go here</span>
      </div>
      <div className="events-container">
        <EventsComponent />
      </div>
    </main>
  )
}

export default MentorPsychApp
