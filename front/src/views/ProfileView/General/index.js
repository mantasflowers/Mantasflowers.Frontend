import React from "react";

import clsx from "clsx";
import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core";
import ProfileDetails from "./ProfileDetails";
import GeneralSettings from "./GeneralSettings";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    minHeight: 800,
  },
}));

function General({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
      {...rest}
    >
      <Grid item lg={12} md={12} xl={12} xs={12}>
        <GeneralSettings />
      </Grid>
    </Grid>
  );
}

General.propTypes = {
  className: PropTypes.string,
};

export default General;
