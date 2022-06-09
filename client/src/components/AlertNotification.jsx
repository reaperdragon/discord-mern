import React from "react";
import { Snackbar, Alert } from "@mui/material";

const AlertNotification = ({payload}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open
      onClose={() => {}}
      autoHideDuration={6000}
    >
      <Alert severity="info">{payload}</Alert>
    </Snackbar>
  );
};

export default AlertNotification;
