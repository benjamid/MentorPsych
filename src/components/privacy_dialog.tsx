import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import styled from 'styled-components';
// import Button from "@material-ui/core/Button"
// import DialogActions from "@material-ui/core/DialogActions"

export interface SimpleDialogProps {
  open: boolean
  selectedValue: string
  onClose: (value: string) => void
}

const PrivacyDialog = (props: SimpleDialogProps) => {
  const data = useStaticQuery(graphql`
    query PrivacyDialogQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/privacy_dialog/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `)

  const Button = styled.button`
  background-color: #00008b;
  color: white;
  font-size: 15px;
  height: 200px;
  width: 70px;
`;


  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node

  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleItemClick = (value: string) => {
    onClose(value)
  }

  return (

    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
    <Button onClick={handleClose}>
        Close
    </Button>

      <DialogTitle id="alert-dialog-title">{frontmatter.title}</DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          dangerouslySetInnerHTML={{ __html: html }}
        ></DialogContentText>
      </DialogContent>
      {/* <DialogActions>
        <Button onClick={() => handleItemClick("Disagree")} color="primary">
          Disagree
        </Button>
        <Button
          onClick={() => handleItemClick("Agree")}
          color="primary"
          autoFocus
        >
          Agree
        </Button>
      </DialogActions> */}
    </Dialog>
  )
}

PrivacyDialog.propTypes = {
  props: PropTypes.any,
}

export default PrivacyDialog
