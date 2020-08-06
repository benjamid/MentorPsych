import React from "react"
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem, { ListItemProps } from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import ContactSupportIcon from "@material-ui/icons/ContactSupport"
import CommuteIcon from "@material-ui/icons/Commute"
import SchoolIcon from "@material-ui/icons/School"
import Collapse from "@material-ui/core/Collapse"
import BusinessIcon from "@material-ui/icons/Business"
import AirlineSeatFlatAngledIcon from "@material-ui/icons/AirlineSeatFlatAngled"
import "./resources.scss"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
)

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />
}

const ResourcesComponent = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <h1 className="resources-title">Resources</h1>
      <div className={classes.root}>
        <List component="nav" aria-label="main resources">
          <ListItem button>
            <ListItemIcon>
              <ContactSupportIcon />
            </ListItemIcon>
            <ListItemText primary="Student Resource Center" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Career Center" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav" aria-label="secondary resources">
          <ListItem button>
            <ListItemText primary="External Resource 1" />
          </ListItem>
          <ListItemLink href="#simple-list">
            <ListItemText primary="External Resource 2" />
          </ListItemLink>
        </List>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Campus Resources" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <CommuteIcon />
              </ListItemIcon>
              <ListItemText primary="Parking" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <AirlineSeatFlatAngledIcon />
              </ListItemIcon>
              <ListItemText primary="Health Center" />
            </ListItem>
          </List>
        </Collapse>
      </div>
    </>
  )
}

export default ResourcesComponent
