import React from "react"
import PropTypes from "prop-types"
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import FlagIcon from '@material-ui/icons/Flag';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import BusinessIcon from '@material-ui/icons/Business';
import ListIcon from '@material-ui/icons/List';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import GroupIcon from '@material-ui/icons/Group';
import GradeIcon from '@material-ui/icons/Grade';

const MaterialIcon = ({ icon }) => {
  console.log(icon)
  let iconUsed = '';
  switch(icon) {
    case 'BusinessIcon':
      iconUsed = BusinessIcon;
      break;
    case 'ContactSupportIcon':
      iconUsed = ContactSupportIcon;
      break;
    case 'MeetingRoom':
      iconUsed = MeetingRoomIcon;
      break;
    case 'Group':
      iconUsed = GroupIcon;
      break;
    case 'Flag':
      iconUsed = FlagIcon;
      break;
    case 'FindInPage':
      iconUsed = FindInPageIcon;
      break;
    case 'LaptopChromebookIcon':
      iconUsed = LaptopChromebookIcon;
      break;
    case 'GradeIcon':
      iconUsed = GradeIcon;
      break;
    case 'QuestionAnswerIcon':
      iconUsed = QuestionAnswerIcon;
      break;
    case 'ListIcon':
      iconUsed = ListIcon;
      break;
    default:
      iconUsed = QuestionAnswerIcon;
  }
  return React.createElement(iconUsed)
}

MaterialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
}

export default MaterialIcon
