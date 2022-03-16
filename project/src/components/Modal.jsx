import {
  Slide,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = ({ open, handleClose, id }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Delete row?"}</DialogTitle>
      <DialogContent>
        <DialogActions id={id}>
          <Button onClick={handleClose} id={`dialog${2}`}>
            No
          </Button>
          <Button onClick={handleClose} id={`dialog${1}`}>
            Yes
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
