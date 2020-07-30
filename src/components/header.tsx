import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import InfoIcon from "../icons/info"
import PrivacyTipIcon from "../icons/privacy_tip"
import "./header.scss"
import PrivacyDialog from "./privacy_dialog"
import InfoDialog from "./info_dialog"

const Header = ({ siteTitle }) => {
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

  const [openPrivacy, setOpenPrivacy] = useState(false)
  const [selectedPrivacyValue, setSelectedPrivacyValue] = useState(null)

  const [openInfo, setOpenInfo] = useState(false)
  const [selectedInfoValue, setSelectedInfoValue] = useState(0)

  const handleClickOpenPrivacy = () => {
    setOpenPrivacy(true)
  }

  const handleClosePrivacy = (value: string) => {
    setOpenPrivacy(false)
    setSelectedPrivacyValue(value)
  }

  const handleClickOpenInfo = () => {
    setOpenInfo(true)
  }

  const handleCloseInfo = (value: number) => {
    setOpenInfo(false)
    setSelectedInfoValue(value)
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
            <button className="nav-button" onClick={handleClickOpenPrivacy}>
              <PrivacyTipIcon />
              <span>Privacy {selectedPrivacyValue}</span>
            </button>
            <button className="nav-button" onClick={handleClickOpenInfo}>
              <InfoIcon />
              <span>Info</span>
            </button>
          </div>
        </div>
      </header>
      <PrivacyDialog
        selectedValue={selectedPrivacyValue}
        open={openPrivacy}
        onClose={handleClosePrivacy}
      />
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

export default Header
