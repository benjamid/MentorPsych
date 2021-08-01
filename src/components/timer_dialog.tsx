import React, { Suspense, useState } from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import withLocation from "./withLocation"
import { Location } from "@reach/router"
import queryString from "query-string"

export interface SimpleDialogProps {
  open: boolean
  time: Number
  onClose: () => void
}

const TimerDialog = (props) => {
  console.log(props);
  const { onClose, search, time, open } = props;
const [state, setState] = useState(false)
  setTimeout(function() {
    setState(true);
  }, 10000)
console.log(search);
console.log("time:",time,typeof time)

  return (
    <div>
      
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
      console.log("close");
      onClose();
    }}
    duration={parseInt(time)}
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
    </div>
  );
}
export default TimerDialog;

