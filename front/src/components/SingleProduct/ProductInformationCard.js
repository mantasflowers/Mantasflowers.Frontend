import React from "react";
import {
  makeStyles,
  Paper,
  Typography,
  Grid,
  Chip,
  Box,
  Divider,
} from "@material-ui/core";

import CartButton from "./CartButton";

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

    [theme.breakpoints.down("sm")]: {
      margin: "20px auto",
    },
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

    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
      textAlign: "center",
    },
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
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    marginTop: theme.spacing(6),
  },
  chip: {
    color: "#000",
    marginRight: 8,
  },
}));

function ProductInformationCard(props) {
  const classes = useStyles();

  const chips = [{}, {}, {}, {}];

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

          <Box>
            {chips.map((chip) => (
              <Chip label="Geles" className={classes.chip} />
            ))}
          </Box>

          <Box className={classes.buttonsWrapper}>
            <Typography variant="h3" className={classes.subtitle}>
              1.5$
            </Typography>
            <Box>
              <CartButton counter={0} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProductInformationCard;
