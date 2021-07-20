import React from "react";
import Dialog from "@material-ui/core/Dialog";
import {Button} from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ButtonControl from "../Button/ButtonControl";

function DialogPopup(props) {
    const {title, children, openPopup, onclose, classname} = props;
  return (
    <div>
      <Dialog
        open={openPopup}
        onClose={onclose}
        className={classname}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <ButtonControl openHandler={onclose} color="primary">
            Cancel
          </ButtonControl>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogPopup;
