import React from "react"
import PropTypes from "prop-types"
import EventsComponent from "./events"
import MentorPal from "./mentorpal"
import ResourcesComponent from "./resources"
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import "./mentorpsych.scss";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ml: {
    marginLeft: '5%',
  },
  p: {
    padding:'1%',
  }
}));

const MentorPsychApp = ({ data }) => {
  const classes = useStyles();
  const [view,setView] = React.useState('v2')
  const handleChange = (event) => {
    setView(event.target.value);
  };

  return (
    <>
    <div className={classes.p}>
    Select View to see 
    <Select className={classes.ml}
          value={view}
          onChange={handleChange}
        >
          <MenuItem value={'v2'}>v2</MenuItem>
          <MenuItem value={'chat'}>Chat</MenuItem>
        </Select>
    </div>
    
    <main className="app-container">
        <div className="mentor-container">
        <MentorPal view={view}/>
      </div>
      <div className="resources-container">
        <ResourcesComponent data={data.resources.edges} />
      </div>
      <div className="events-container">
        <EventsComponent data={data.events.edges} />
      </div>
    </main>
    </>
  )
}

MentorPsychApp.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MentorPsychApp
