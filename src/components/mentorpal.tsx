import { Location } from "@reach/router"
import React from "react"
import withLocation from "./withLocation"

const MentorPal = ({search, view }) => {
  
  const { uuid } = search
  console.log("uuid",uuid, view)
  const src = view == 'v2' ?
     "https://mentorpal.org/mentorpanel/?mentor=trevitt-jennifer-prof-psych" + (uuid ? `&guest=${uuid}`:"")
    : "https://v2.mentorpal.org/chat/";
    console.log(src);
  return (
    <iframe
      src={src}
      title="MentorPal Test"
      className="mentorpal-frame"
    ></iframe>
  )
}

export default withLocation(MentorPal)
