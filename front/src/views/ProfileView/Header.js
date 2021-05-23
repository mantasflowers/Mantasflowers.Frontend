import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
}));

function Header({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Typography variant="h3" color="textPrimary">
        Profile Edit
      </Typography>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
