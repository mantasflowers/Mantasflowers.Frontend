import React from "react";

import clsx from "clsx";
import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core";
import ProfileDetails from "./ProfileDetails";
import GeneralSettings from "./GeneralSettings";

const useStyles = makeStyles(() => ({
  root: {},
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
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <ProfileDetails />
      </Grid>
      <Grid item lg={8} md={6} xl={9} xs={12}>
        <GeneralSettings />
      </Grid>
    </Grid>
  );
}

General.propTypes = {
  className: PropTypes.string,
};

export default General;
