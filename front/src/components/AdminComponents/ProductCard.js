import React, { useState } from "react";
import {
  Card,
  Typography,
  makeStyles,
  Box,
  CardActionArea,
  Dialog,
  Button,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import axios from "axios";

import ProductUpdateContent from "./ProductUpdateContent";

const useStyles = makeStyles((theme) => ({
  mainCard: {
    backgroundColor: theme.palette.background.default,

    // padding: 10,
  },

  contentBox: {
    padding: 10,
  },

  productTitle: {
    fontFamily: "Noto Sans",
    textAlign: "center",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },

  productStock: {
    fontFamily: "Noto Sans",
    color: theme.palette.primary.main,
  },
  productPrice: {
    fontFamily: "Noto Sans",
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  productImageBox: {
    textAlign: "center",
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
}));

function ProductCard(props) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const account = useSelector((state) => state.account);
  let product = props.product;

  const { enqueueSnackbar } = useSnackbar();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCloseDelete = () => {
    setIsOpenDelete(false);
  };

  const handleDeleteProduct = async () => {
    const response = await axios
      .delete(
        `https://mantasflowers-backend.azurewebsites.net/product/${product.id}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${account.user.idToken}`,
          },
        }
      )
      .catch((error) => {
        console.log({ error });
      });

    if (response) {
      handleCloseDelete();
      enqueueSnackbar("F5, kad pamatytumėte pakeitimus!", {
        variant: "success",
      });
    }
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
        <Card className={classes.mainCard}>
          <CardActionArea>
            <Box className={classes.productImageBox} mb={1}>
              <img
                src={product.thumbnailPictureUrl}
                alt="rose"
                className={classes.productImage}
              />
            </Box>
            <Box className={classes.contentBox}>
              <Box mb={1}>
                <Typography
                  variant="h4"
                  component="h2"
                  className={classes.productTitle}
                >
                  {product.name}
                </Typography>
              </Box>

              <Box mb={1}>
                <Typography className={classes.productStock}>
                  Liko: {product.leftInStock}
                </Typography>
              </Box>

              <Box
                mb={1}
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  justifyContent: "space-between",
                }}
              >
                <Typography className={classes.productPrice}>
                  {product.price}€
                </Typography>

                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ color: "#d8a56d", textTransform: "initial" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpenDelete(true);
                    }}
                  >
                    Trinti
                  </Button>
                </Box>
              </Box>
            </Box>
          </CardActionArea>
        </Card>
      </div>
      <Dialog open={isOpen} onClose={handleClose} maxWidth="md" fullWidth>
        <ProductUpdateContent product={product} handleClose={handleClose} />
      </Dialog>
      <Dialog
        open={isOpenDelete}
        onClose={handleCloseDelete}
        maxWidth="sm"
        fullWidth
      >
        <Typography
          variant="h4"
          component="h2"
          className={classes.productTitle}
        >
          Ar tikrai norite ištrinti produktą?
        </Typography>

        <Box
          mt={2}
          style={{ display: "flex", flexWrap: "nowrap", padding: 10 }}
        >
          <Button
            variant="contained"
            color="primary"
            style={{
              color: "#d8a56d",
              textTransform: "initial",
              width: "50%",
              marginRight: 10,
            }}
            onClick={handleDeleteProduct}
          >
            Ištrinti
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ color: "#d8a56d", textTransform: "initial", width: "50%" }}
            onClick={(e) => {
              handleCloseDelete();
            }}
          >
            Atšaukti
          </Button>
        </Box>
      </Dialog>
    </>
  );
}

export default ProductCard;
