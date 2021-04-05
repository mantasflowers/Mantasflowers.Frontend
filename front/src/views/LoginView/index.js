import React from "react";
import { makeStyles } from "@material-ui/core";

import Login from "./LoginForm";
import Page from "../../components/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(3),
    paddingTop: 80,
    paddingBottom: 80,
    backgroundColor: theme.palette.background.default,
  },
}));

function Index(props) {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Login:)">
      <Login />
    </Page>
  );
}

export default Index;
