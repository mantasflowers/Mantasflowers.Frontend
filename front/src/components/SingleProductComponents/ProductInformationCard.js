import React, { useState } from "react";
import {
  makeStyles,
  Paper,
  Button,
  Typography,
  Grid,
  Chip,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    padding: 25,
    width: "1020px",
  },
  description: {
    color: "#000",
    marginTop: theme.spacing(4),
    lineHeight: 2,
  },
  productImageBox: {
    margin: "120px auto", // xaltura
    textAlign: "center",
  },
  button: {
    borderRadius: 50,
    background: "#FFF",
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
  title: {
    color: "#000",
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    color: "#000",
  },
  fabWrapper: {
    backgroundColor: theme.palette.primary.main,
    width: "20%",
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

function ProductInformationCard(props) {
  const classes = useStyles();

  const [clicked, setClicked] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setClicked(!clicked);
    if (counter === 0) {
      setCounter((s) => s + 1);
    }
  };
  const chips = [{}, {}, {}, {}];

  const handleIncrement = () => setCounter((s) => s + 1);

  const handleDecrement = () => {
    if (counter === 1) {
      setClicked(!clicked);
      setCounter(0);
    } else setCounter((s) => s - 1);
  };

  return (
    <Paper className={classes.root}>
      <Grid container spacing={3} direction="row">
        <Grid item className={classes.productImageBox}>
          <img src={props.flower.image} alt="product" />
        </Grid>
        <Grid xs={12} md={6} item className={classes.rightSideWrapper}>
          <Typography className={classes.title} variant="h3">
            Rožė
          </Typography>
          <Typography className={classes.subtitle} variant="subtitle1">
            1 vnt.
          </Typography>
          <Typography className={classes.description}>
            {props.flower.description}
          </Typography>
          <Grid style={{ marginTop: 30 }} container spacing={1}>
            {chips.map((chip) => (
              <Grid item>
                <Chip label="Geles" className={classes.subtitle} />
              </Grid>
            ))}
          </Grid>
          <Grid className={classes.buttonsWrapper} container>
            <Typography variant="h3" className={classes.subtitle}>
              1.5$
            </Typography>
            {clicked ? (
              <Grid className={classes.fabWrapper}>
                <Fab
                  size="small"
                  onClick={handleDecrement}
                  className={classes.fab}
                >
                  <RemoveIcon className={classes.fabIcon} />
                </Fab>
                {counter}
                <Fab
                  size="small"
                  onClick={handleIncrement}
                  className={classes.fab}
                >
                  <AddIcon className={classes.fabIcon} />
                </Fab>
              </Grid>
            ) : (
              <Button
                variant="contained"
                className={classes.button}
                onClick={() => handleClick()}
              >
                <AddShoppingCartIcon />Į krepšelį
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProductInformationCard;
