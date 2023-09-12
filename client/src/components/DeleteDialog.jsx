import {
  Box,
  Button,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { bool, func, string } from "prop-types";

const DeleteDialog = ({ isDialogopen, onDelete, onChangeDialog, object }) => {
  return (
    <>
      <Dialog
        open={isDialogopen}
        onClose={onChangeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
      >
        <Box sx={{ paddingX: "15px" }}>
          <DialogTitle id="alert-dialog-description">
            {`Are you sure you want to delete this ${object}?`}
          </DialogTitle>
          <DialogContentText id="alert-dialog-description">
            This operation will completely delete the {object} and all its data
            from the database and it will not be possible to retrieve the card
            afterwards
          </DialogContentText>
          <DialogActions>
            <Button onClick={onChangeDialog} autoFocus color="info">
              cancel
            </Button>
            <Button onClick={onDelete} color="error">
              Delete {object}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

DeleteDialog.prototype = {
  isDialogopen: bool.isRequired,
  onDelete: func.isRequired,
  onChangeDialog: func.isRequired,
  object: string.isRequired,
};

export default DeleteDialog;
