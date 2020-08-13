import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Fab from "@material-ui/core/Fab"
import Card from "@material-ui/core/Card"
import Dialog from "@material-ui/core/Dialog"
import Typography from "@material-ui/core/Typography"
import LinearProgress from "@material-ui/core/LinearProgress"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import "./info_dialog.scss"

export interface SimpleDialogProps {
  open: boolean
  selectedValue: number
  onClose: (value: number) => void
}

const StyledDialog = withStyles({
  paper: {
    overflowY: "unset",
  },
})(Dialog)

const InfoDialog = (props: SimpleDialogProps) => {
  const data = useStaticQuery(graphql`
    query InfoDialogQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/info_dialog/" } }
        sort: { fields: [frontmatter___order] }
      ) {
        edges {
          node {
            frontmatter {
              title
              order
              img {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `)

  const [windowWidth, setWindowWidth] = useState(null)

  const updateWindowSize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize)
    updateWindowSize()
  }, [])

  const { onClose, selectedValue, open } = props

  const [selectedIndex, setSelectedIndex] = useState(selectedValue)

  const handleClose = () => {
    onClose(selectedIndex)
  }

  const handleItemClick = (value: number) => {
    onClose(value)
  }

  const prevPage = () => {
    setSelectedIndex(selectedIndex - 1)
  }

  const nextPage = () => {
    if (selectedIndex === data.allMarkdownRemark.edges.length - 1) {
      return onClose(selectedIndex)
    }
    setSelectedIndex(selectedIndex + 1)
  }

  const progressValue = () => {
    const total = data.allMarkdownRemark.edges.length - 1
    return (selectedIndex / total) * 100
  }

  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="lg"
    >
      <Card className="info-dialog-container">
        <div>
          <div className="info-dialog-content-container">
            {data.allMarkdownRemark.edges &&
              data.allMarkdownRemark.edges.map(({ node }, i) => {
                const { frontmatter, html } = node
                return (
                  <div key={i} hidden={selectedIndex !== i}>
                    <h2>{frontmatter.title}</h2>
                    <Typography
                      dangerouslySetInnerHTML={{ __html: html }}
                    ></Typography>
                  </div>
                )
              })}
            <div>
              <Button
                style={{ marginRight: "12px" }}
                onClick={() => prevPage()}
                variant="contained"
                disabled={selectedIndex === 0}
              >
                Prev
              </Button>
              {selectedIndex !== data.allMarkdownRemark.edges.length - 1 && (
                <Button
                  onClick={() => nextPage()}
                  variant="contained"
                  color="primary"
                  autoFocus
                >
                  Next
                </Button>
              )}
              {selectedIndex === data.allMarkdownRemark.edges.length - 1 && (
                <Button
                  onClick={() => handleItemClick(selectedIndex)}
                  variant="contained"
                  color="primary"
                  autoFocus
                >
                  Close
                </Button>
              )}
              <div className="info-dialog-progressbar">
                <LinearProgress variant="determinate" value={progressValue()} />
              </div>
            </div>
          </div>
        </div>
        {windowWidth > 965 &&
          data.allMarkdownRemark.edges &&
          data.allMarkdownRemark.edges.map(({ node }, i) => {
            const { frontmatter } = node
            const { title, img } = frontmatter
            return (
              <div
                className="info-dialog-image-container"
                key={i}
                hidden={selectedIndex !== i}
              >
                <Img
                  className="info-dialog-image"
                  fluid={img.childImageSharp.fluid}
                  alt={title}
                />
              </div>
            )
          })}
        <div className="info-dialog-fab">
          <Fab color="primary" aria-label="next" onClick={() => nextPage()}>
            <NavigateNextIcon />
          </Fab>
        </div>
      </Card>
    </StyledDialog>
  )
}

InfoDialog.propTypes = {
  props: PropTypes.any,
}

export default InfoDialog
