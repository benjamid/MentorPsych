import React from "react"
import PropTypes from "prop-types"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MaterialIcon from "../icons/material_icons"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import "./resources.scss"

const ListItemOutboundLink = props => {
  const { icon, href, text } = props
  return (
    <>
      <ListItem button component={OutboundLink} href={href}>
        {icon && (
          <ListItemIcon>
            <MaterialIcon icon={icon} />
          </ListItemIcon>
        )}
        <ListItemText primary={text} />
      </ListItem>
    </>
  )
}

const ResourcesComponent = ({ data }) => (
  <>
    <h1 className="resources-title">Resources</h1>
    <div className="resources-content">
      <List component="nav" aria-label="resources">
        {data &&
          data.map(({ node }, i) => {
            const { title, url, icon } = node.frontmatter
            return (
              <ListItemOutboundLink
                key={i}
                href={url}
                text={title}
                icon={icon}
              />
            )
          })}
      </List>
    </div>
  </>
)

ResourcesComponent.propTypes = {
  data: PropTypes.array.isRequired,
}

export default ResourcesComponent
