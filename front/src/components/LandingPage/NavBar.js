import React from "react";
import { makeStyles, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    border: "2px red solid",
    justifyContent: "center",
    margin: "0 auto",
    padding: "5px",
    width: "22%",
    background:
      "linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 49%, rgba(252, 176, 69, 1) 100%)",
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Link style={{ textDecoration: "none", zIndex: 1 }} to={`/flowers/1`}>
        <Button color="primary" variant="contained" style={{ marginRight: 10 }}>
          Gėlės
        </Button>
      </Link>

      <Link style={{ textDecoration: "none", zIndex: 1 }} to={`/bouquets/1`}>
        <Button color="primary" variant="contained" style={{ marginRight: 10 }}>
          Puokštės
        </Button>
      </Link>

      <Link style={{ textDecoration: "none", zIndex: 1 }} to={`/landing/1`}>
        <Button color="primary" variant="contained">
          Visi
        </Button>
      </Link>
    </Box>
  );
}

export default NavBar;
