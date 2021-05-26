import React from "react";
import { makeStyles, Box, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "0 auto",
    padding: "5px",
    width: "83%",
    maxWidth: 1140,
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
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Link style={{ textDecoration: "none", zIndex: 1 }} to={`/flowers/1`}>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
          >
            Gėlės
          </Button>
        </Link>

        <Link style={{ textDecoration: "none", zIndex: 1 }} to={`/bouquets/1`}>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
          >
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
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography style={{ marginRight: 10 }}>Rušiuoti pagal: </Typography>
        <Link
          style={{ textDecoration: "none", zIndex: 1 }}
          to={`/products/by=price`}
        >
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
          >
            Kainą
          </Button>
        </Link>
        <Link
          style={{ textDecoration: "none", zIndex: 1 }}
          to={`/products/by=left_in_stock`}
        >
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
          >
            Kiekį
          </Button>
        </Link>
        <Link
          style={{ textDecoration: "none", zIndex: 1 }}
          to={`/products/by=name`}
        >
          <Button
            color="primary"
            variant="contained"
            className={classes.thirdButton}
          >
            Pavadinimą
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default NavBar;
