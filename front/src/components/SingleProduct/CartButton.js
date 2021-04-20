import React, { useState } from "react";
import { makeStyles, Button, Grid, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  button: {
    zIndex: 100,
    borderRadius: 50,
    background: "#FFF",
    textTransform: "initial",
    color: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText, // default - balta
    },
  },
  fab: {
    backgroundColor: "unset",
    boxShadow: "unset",
    "&:hover": {
      background: "unset",
    },
    "&.Mui-disabled": {
      background: "unset",
    },
    color: theme.palette.primary.contrastText,
  },

  fabWrapper: {
    zIndex: 100,
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  fabIcon: {
    fontSize: 16,
  },
  buttonsWrapper: {
    justifyContent: "space-between",
    marginTop: theme.spacing(6),
  },
  rightSideWrapper: {
    borderLeft: "2px solid rgba(0,0,0,0.1)", // xaltura
  },
}));

function CartButton(props) {
  const classes = useStyles();

  const [clicked, setClicked] = useState(false);
  const [counter, setCounter] = useState(props.counter);

  const handleClick = () => {
    setClicked(!clicked);
    if (counter === 0) {
      setCounter((s) => s + 1);
    }
  };

  const handleIncrement = () => setCounter((s) => s + 1);

  const handleDecrement = () => {
    if (counter === 1) {
      setClicked(!clicked);
      setCounter(0);
    } else setCounter((s) => s - 1);
  };

  return (
    <>
      {clicked ? (
        <Grid className={classes.fabWrapper}>
          <Fab
            size="small"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              handleDecrement();
            }}
            onMouseDown={(event) => event.stopPropagation()}
            className={classes.fab}
          >
            <RemoveIcon className={classes.fabIcon} />
          </Fab>
          {counter}
          <Fab
            size="small"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              handleIncrement();
            }}
            onMouseDown={(event) => event.stopPropagation()}
            className={classes.fab}
          >
            <AddIcon className={classes.fabIcon} />
          </Fab>
        </Grid>
      ) : (
        <Button
          variant="contained"
          className={classes.button}
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            handleClick();
          }}
          onMouseDown={(event) => event.stopPropagation()}
        >
          <AddShoppingCartIcon />Į krepšelį
        </Button>
      )}
    </>
  );
}

export default CartButton;
