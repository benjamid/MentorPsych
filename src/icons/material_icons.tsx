import React from "react"
import PropTypes from "prop-types"

const MaterialIcon = ({ icon }) => {
  let iconName = icon.replace(/Icon$/, "")
  let resolved = require(`@material-ui/icons/${iconName}`).default

  if (!resolved) {
    throw Error(`Could not find @material-ui/icons/${iconName}`)
  }

  return React.createElement(resolved)
}

MaterialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
}

export default MaterialIcon
