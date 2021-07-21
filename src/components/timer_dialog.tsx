import React, { Suspense } from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export interface SimpleDialogProps {
  open: boolean
  onClose: () => void
}


const TimerDialog = (props: SimpleDialogProps) => {
  const { onClose, open } = props;
  return (
    <Dialog
    open={open}
    onClose={(event, reason) => {
           if (reason !== 'backdropClick') {
             onClose();
          }
          }}
     aria-labelledby="alert-dialog-title"
     aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Going to pre survey link</DialogTitle>
      <DialogContent>
      <p style={{textAlign:'center'}}>Redirecting in</p>
      <CountdownCircleTimer
    isPlaying
    onComplete={() => {
      onClose();
    }}
    duration={5}
    ariaLabel="Redirecting in..."
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
      </DialogContent>
    </Dialog>
  );
}
export default TimerDialog
