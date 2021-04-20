import React from "react";
import { Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router";

function GoBackButton() {
  const history = useHistory();
  return (
    <Button
      color="primary"
      onClick={() => history.goBack()}
      style={{ textTransform: "initial" }}
    >
      <ArrowBackIcon /> &nbsp; Grįžti
    </Button>
  );
}

export default GoBackButton;
