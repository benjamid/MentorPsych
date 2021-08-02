import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import InfoIcon from "../icons/info"
import PrivacyTipIcon from "../icons/privacy_tip"
import PrivacyDialog from "./privacy_dialog"
import TimerDialog from "./timer_dialog"
import InfoDialog from "./info_dialog"
import BorderColorIcon from '@material-ui/icons/BorderColor';
import "./header.scss";

import withLocation from "./withLocation"
const Header = ({ siteTitle, search }) => {
  //const { postsurveytime } = search;
  const emblem = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "csuf-emblem-rgb.png" }) {
        childImageSharp {
          fluid(maxWidth: 202) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { postsurveytime,uuid } = search;
    console.log("search:",search);
  const [windowWidth, setWindowWidth] = useState(null)
  const [seconds, setSeconds] = React.useState(1200);
  const [postSurveyLink,setPostSurveyLink] = React.useState('');

  const updateWindowSize = () => {
    setWindowWidth(window.innerWidth)
  }

  

  const open = (url) => {
  const win = window.open(url);
  if (win != null) {
    win.focus();
  }
}

  useEffect(() => {
    if (seconds > 5) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      if(seconds!=0) {
        setSeconds(0);
        setOpenTimer(true);
      }   
    }
  });

  useEffect(() => {
    setPostSurveyLink(`https://usc.qualtrics.com/jfe/form/SV_cGZGsY9AowOqi22?uuid=${uuid}&postsurveytime=${postsurveytime}`);
    window.addEventListener("resize", updateWindowSize)
    updateWindowSize()
  }, [])

  const [openPrivacy, setOpenPrivacy] = useState(false)
  const [openTimer, setOpenTimer] = useState(false)
  const [selectedPrivacyValue, setSelectedPrivacyValue] = useState(null)

  const [openInfo, setOpenInfo] = useState(false)
  const [selectedInfoValue, setSelectedInfoValue] = useState(0)

  const [openPostSurvey, setOpenPostSurvey] = useState(false)
  const [selectedSurveyValue, setSurveyValue] = useState(0) 

  const handleClickOpenPrivacy = () => {
    setOpenPrivacy(true)
  }

  const handleClosePrivacy = (value: string) => {
    setOpenPrivacy(false)
    setSelectedPrivacyValue(value)
  }

  const handleCloseTimer = () => {
    setOpenTimer(false);
    open(postSurveyLink);
  }

  const handleClickOpenInfo = () => {
    setOpenInfo(true)
  }

  const handleCloseInfo = (value: number) => {
    setOpenInfo(false)
    setSelectedInfoValue(value)
  }

   const handleOpenPostSurvey = () => {
    setOpenPostSurvey(true)
  }
  const handleClosePostSurvey = () => {
      setOpenPostSurvey(false)
      setSurveyValue(value)
  }
 
  return (
    <>
      <header className="header">
        <div className="nav">
          <div className="emblem">
            <Img
              fluid={emblem.placeholderImage.childImageSharp.fluid}
              draggable={false}
              alt="CSUF Emblem"
            />
          </div>
          <h1 className="site-title">
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <div className="nav-right">

           {postSurveyLink
           ?<a rel="noopener noreferrer" href={postSurveyLink}>
             <button className="nav-button" onClick={handleOpenPostSurvey}>
               <BorderColorIcon />
              {windowWidth >= 768 && <span>Post-Survey</span>}
            </button>
            </a>:''}
            <button className="nav-button" onClick={handleClickOpenPrivacy}>
              <PrivacyTipIcon />
              {windowWidth >= 768 && <span>Privacy</span>}
            </button>
            <button className="nav-button" onClick={handleClickOpenInfo}>
              <InfoIcon />
              {windowWidth >= 768 && <span>Info</span>}
            </button>
          </div>
        </div>
      </header>
       <PrivacyDialog
        selectedValue={selectedPrivacyValue}
        open={openPrivacy}
        onClose={handleClosePrivacy}
      /> 
      <TimerDialog
      time={postsurveytime}
      open={openTimer}
      onClose={handleCloseTimer}
      ></TimerDialog>
      <InfoDialog
        selectedValue={selectedInfoValue}
        open={openInfo}
        onClose={handleCloseInfo}
      />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withLocation(Header);