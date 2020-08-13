import React from "react"
import PropTypes from "prop-types"

const EventsComponent = ({ data }) => {
  const { html } = data[0].node
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>
}

EventsComponent.propTypes = {
  data: PropTypes.array.isRequired,
}

export default EventsComponent
