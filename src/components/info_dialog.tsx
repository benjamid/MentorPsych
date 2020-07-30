import React, { useState } from "react"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import Dialog from "@material-ui/core/Dialog"
import "./info_dialog.scss"
import { Typography } from "@material-ui/core"
import LinearProgress from "@material-ui/core/LinearProgress"

export interface SimpleDialogProps {
  open: boolean
  selectedValue: number
  onClose: (value: number) => void
}

const InfoDialog = (props: SimpleDialogProps) => {
  const { onClose, selectedValue, open } = props
  const [selectedIndex, setSelectedIndex] = useState(selectedValue)

  const handleClose = () => {
    onClose(selectedIndex)
  }

  const handleItemClick = (value: number) => {
    onClose(value)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="lg"
    >
      <Card className="info-dialog-container">
        <div>
          <div className="info-dialog-content-container">
            <div>
              <h2>What is MentorPsych?</h2>
              <Typography>
                MentorPsych is a collaboration project between California State
                University, Fullerton and University of Southern California that
                provides an interactive learning resource for students aspiring
                a career in Psychology.
              </Typography>
            </div>
            <div className="info-dialog-nav-container">
              <Button
                style={{ marginRight: "12px" }}
                onClick={() => setSelectedIndex(0)}
                variant="contained"
              >
                Prev
              </Button>
              <Button
                onClick={() => setSelectedIndex(1)}
                variant="contained"
                color="primary"
                autoFocus
              >
                Next
              </Button>
              <div className="info-dialog-progressbar">
                <LinearProgress variant="determinate" value={75} />
              </div>
            </div>
          </div>
        </div>
        <div className="info-dialog-image-container"></div>
      </Card>
    </Dialog>
  )
}

InfoDialog.propTypes = {
  props: PropTypes.any,
}

export default InfoDialog
