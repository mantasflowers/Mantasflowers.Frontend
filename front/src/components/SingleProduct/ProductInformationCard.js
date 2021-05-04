import React from "react";
import {
  makeStyles,
  Paper,
  Typography,
  Grid,
  Chip,
  Box,
  CircularProgress,
} from "@material-ui/core";

import GoBackButton from "../GoBackButton";
import CartButton from "./CartButton";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: 25,
    // width: "1020px",
  },
  description: {
    color: "#000",
    marginTop: theme.spacing(4),
    lineHeight: 2,
  },
  productImageBox: {
    // margin: "120px auto", // xaltura
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
  productImage: {
    width: "60%",
    height: "100%",
  },
}));

function ProductInformationCard(props) {
  const classes = useStyles();

  const chips = [{}, {}, {}, {}];

  let product = props.flowerData;

  return (
    <>
      {product === null ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        <Box mb={7}>
          <Box style={{ paddingBottom: "20px" }}>
            <GoBackButton />
          </Box>
          <Paper className={classes.root}>
            <Grid container spacing={3} direction="row">
              <Grid item md={6} className={classes.productImageBox}>
                <img
                  src={product.pictureUrl}
                  alt="product"
                  className={classes.productImage}
                />
              </Grid>
              <Grid xs={12} md={6} item className={classes.rightSideWrapper}>
                <Typography className={classes.title} variant="h3">
                  {product.name}
                </Typography>
                <Typography className={classes.subtitle} variant="subtitle1">
                  {product.leftInStock}
                </Typography>
                <Typography className={classes.description}>
                  {product.shortDescription}
                </Typography>

                <Box mt="20px">
                  {chips.map((chip) => (
                    <Chip label="Geles" className={classes.chip} />
                  ))}
                </Box>

                <Box className={classes.buttonsWrapper}>
                  <Typography variant="h3" className={classes.subtitle}>
                    {product.price}
                  </Typography>
                  <Box>
                    <CartButton product={product} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      )}
    </>
  );
}

export default ProductInformationCard;
