import React from "react"
import EventsComponent from "./events"
import MentorPal from "./mentorpal"
import ResourcesComponent from "./resources-2"
import "./mentorpsych.scss"

const MentorPsychApp = () => {
  return (
    <main className="app-container">
      <div className="mentor-container">
        <MentorPal />
      </div>
      <div className="resources-container">
        <ResourcesComponent />
      </div>
      <div className="events-container">
        <EventsComponent />
      </div>
    </main>
  )
}

export default MentorPsychApp
