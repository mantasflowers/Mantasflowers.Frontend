import React, { useState } from "react";
import {
  makeStyles,
  Paper,
  Button,
  Typography,
  Grid,
  Box,
  IconButton,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    padding: 25,
    // height: 600,
    width: "90%",
  },
  productDescription: {
    fontSize: "20px",
    color: "red",
    width: "50%",
    margin: "0 auto",
  },
  text: {
    color: "#000000",
  },
  productImageBox: {
    margin: "120px auto",
    textAlign: "center",
  },
  button: {
    color: "red",
  },
}));

function ProductInformationCard(props) {
  const classes = useStyles();

  const [clicked, setClicked] = useState(false);
  const [counter, setCounter] = useState(1);

  console.log("counter ->", counter);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Paper className={classes.root}>
      <Grid container spacing={3}>
        <Grid xs={12} md={6}>
          <Box className={classes.productImageBox}>
            <img src={props.flower.image} alt="product" />
          </Box>
        </Grid>

        <Grid xs={12} md={6}>
          <Box></Box>
          {/* <Typography className={classes.text}>
            {props.flower.description}
          </Typography> */}

          {clicked ? (
            <Box>
              <Button className={classes.button}>minusiukas</Button>
              <Button className={classes.button}>pliusiukas</Button>
            </Box>
          ) : (
            <Button className={classes.button} onClick={() => handleClick()}>
              1 mygtukas
            </Button>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProductInformationCard;
