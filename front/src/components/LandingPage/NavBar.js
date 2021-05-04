import React from "react";
import { makeStyles, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    padding: "5px",
    width: "83%",
    background: theme.palette.background.default,
  },
  button: {
    marginRight: 10,
    color: "#d8a56d",
  },
  thirdButton: {
    color: "#d8a56d",
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Link style={{ textDecoration: "none", zIndex: 1 }} to={`/flowers/1`}>
        <Button color="primary" variant="contained" className={classes.button}>
          Gėlės
        </Button>
      </Link>

      <Link style={{ textDecoration: "none", zIndex: 1 }} to={`/bouquets/1`}>
        <Button color="primary" variant="contained" className={classes.button}>
          Puokštės
        </Button>
      </Link>

      <Link style={{ textDecoration: "none", zIndex: 1 }} to={`/landing/1`}>
        <Button
          color="primary"
          variant="contained"
          className={classes.thirdButton}
        >
          Visi
        </Button>
      </Link>
    </Box>
  );
}

export default NavBar;
