import React from "react"
import withLocation from "./withLocation"

const MentorPal = ({ search }) => {
  const { uuid } = search
  const src =
    "https://mentorpal.org/mentorpanel/" + (uuid ? `?guest=${uuid}` : "")
  return (
    <iframe
      src={src}
      title="MentorPal Test"
      className="mentorpal-frame"
    ></iframe>
  )
}

export default withLocation(MentorPal)
