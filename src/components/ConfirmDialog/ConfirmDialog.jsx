import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { Button, Typography } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ButtonControl from "../Button/ButtonControl";
import { useStyles } from "../ConfirmDialog/ConfimDialog.style";

function ConfirmDialog(props) {
  const classes = useStyles();
  const { confirmDialog, setConfirmDialog } = props;
  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle></DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2">{confirmDialog.subtitle}</Typography>
      </DialogContent>
      <DialogActions>
        <div className={classes.dialogActions}>
          <ButtonControl
            btnColor="default"
            variant="contained"
            openHandler={() =>
              setConfirmDialog({
                ...confirmDialog,
                isOpen: false,
              })
            }
          >
            No
          </ButtonControl>{" "}
          &nbsp;
          <ButtonControl
            btnColor="secondary"
            variant="contained"
            openHandler={confirmDialog.onConfirm}
          >
            Yes
          </ButtonControl>
        </div>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
