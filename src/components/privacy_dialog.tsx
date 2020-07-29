import React from "react"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

export interface SimpleDialogProps {
  open: boolean
  selectedValue: string
  onClose: (value: string) => void
}

const PrivacyDialog = (props: SimpleDialogProps) => {
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
      <DialogTitle id="alert-dialog-title">
        {"MentorPsych Privacy Policies"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let MentorPsych help track usage. This means sending anonymous usage
          data to MentorPsych.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
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
      </DialogActions>
    </Dialog>
  )
}

PrivacyDialog.propTypes = {
  props: PropTypes.any,
}

export default PrivacyDialog
