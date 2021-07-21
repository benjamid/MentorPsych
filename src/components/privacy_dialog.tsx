import React, { Suspense } from "react"
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
  padding: 1%;
  margin: 1%;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ChoiceContainer = styled.div`
  display: flex;
  justify-content: center;
`;


  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node

  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue);
  }

  const handleChoice = choice => {
    let content = '';
    if(choice) {
      content = 'Thanks for agreeing. You can close this now.';
    } else {
      content = 'You cannot participate in the study if you disagree. You can close this now.';
    }
    setConfirmContent(content);
     setCurrentView('confirm');
  };

  const handlePrint = () => {
    window.print();
  }

  const handleItemClick = (value: string) => {
    onClose(value)
  }

  const [currentView, setCurrentView] = React.useState('choice');
  const [confirmContent, setConfirmContent] = React.useState('');

  return (
    <Dialog
            open={open}
            onClose={(event, reason) => {
           if (reason !== 'backdropClick') {
             handleClose();
          }
          }}
     aria-labelledby="alert-dialog-title"
     aria-describedby="alert-dialog-description"
    >
    
    <Container>
    {currentView=='choice'?<Button onClick={handlePrint}>
        Print
    </Button>:''}
    
   {currentView!='choice'?<Button onClick={handleClose}>
      Close
    </Button>:''}
    </Container>

      <DialogTitle id="alert-dialog-title">{frontmatter.title}</DialogTitle>
      <DialogContent>
      {currentView=='choice'
      ?<DialogContentText
          id="alert-dialog-description"
          dangerouslySetInnerHTML={{ __html: html }}
        ></DialogContentText>:
      confirmContent}
        
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
      {currentView=='choice'?<ChoiceContainer>
    <Button onClick={()=>handleChoice(true)}>
        Agree
    </Button>
    <Button onClick={()=>handleChoice(false)}>
        Disagree
    </Button>
    </ChoiceContainer>:''}
    </Dialog>
  )
}

PrivacyDialog.propTypes = {
  props: PropTypes.any,
}

export default PrivacyDialog
