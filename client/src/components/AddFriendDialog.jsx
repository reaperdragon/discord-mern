import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { validateEmail } from "../utils/validators";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";

import CustomPrimaryButton from "./CustomPrimaryButton";
import InputField from "./InputField";

import { connect } from "react-redux";
import { getActions } from "../app/actions/friendsActions.js";

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState("");

  const handleSendInvitation = () => {
    sendFriendInvitation(
      {
        targetEmailAddress: email,
      },
      handleCloseDialog
    );
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setEmail("");
  };

  useEffect(() => {
    setIsFormValid(validateEmail(email));
  }, [email, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter e-mail address of friend which you would like to invite
            </Typography>
          </DialogContentText>
          <InputField
            label="Mail"
            type="text"
            value={email}
            setValue={setEmail}
            placeholder="Enter mail address"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);
