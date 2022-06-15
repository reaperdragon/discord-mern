import React, { useEffect, useState } from "react";
import AddFriendDialog from "./AddFriendDialog";
import CustomPrimaryButton from "./CustomPrimaryButton";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
};

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {}, []);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenAddFriendDialog}
      />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </>
  );
};

export default AddFriendButton;
