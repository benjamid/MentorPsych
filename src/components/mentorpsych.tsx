import React from "react"
import PropTypes from "prop-types"
import EventsComponent from "./events"
import MentorPal from "./mentorpal"
import ResourcesComponent from "./resources"
import "./mentorpsych.scss"

const MentorPsychApp = ({ data }) => {
  return (
    <main className="app-container">
      <div className="mentor-container">
        <MentorPal />
      </div>
      <div className="resources-container">
        <ResourcesComponent data={data.resources.edges} />
      </div>
      <div className="events-container">
        <EventsComponent data={data.events.edges} />
      </div>
    </main>
  )
}

MentorPsychApp.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MentorPsychApp
