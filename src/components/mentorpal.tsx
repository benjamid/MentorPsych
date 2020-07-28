import React, { useRef } from "react"
import withLocation from "./withLocation"

const MentorPal = ({ search }) => {
  const { email } = search

  const mentorPalRef = useRef(null)

  const mentorLoadEvent = () => {
    if (email) {
      setTimeout(iFrameDom, 2000)
    }
  }

  const iFrameDom = () => {
    // SecurityError: Blocked a frame with origin "http://localhost:8000" from accessing a cross-origin frame.
    // https://stackoverflow.com/questions/25098021/securityerror-blocked-a-frame-with-origin-from-accessing-a-cross-origin-frame
    const inputField = mentorPalRef.current.contentWindow.document.getElementById(
      "guest-prompt-input"
    )
    const sendButton = mentorPalRef.current.contentWindow.document.getElementById(
      "guest-prompt-input-send"
    )
    if (inputField && sendButton) {
      inputField.value = email
      sendButton.click()
    }
  }

  return (
    <iframe
      src="https://mentorpal.org/mentorpanel/?mentor=clint"
      title="MentorPal Test"
      className="mentorpal-frame"
      onLoad={mentorLoadEvent}
      ref={mentorPalRef}
    ></iframe>
  )
}

export default withLocation(MentorPal)
