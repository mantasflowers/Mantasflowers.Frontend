import React, { useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import axios from "axios";

import Page from "../../components/Page";
import ProductInformationCard from "../../components/SingleProduct/ProductInformationCard";
import CartPopUp from "../../features/carts/CartPopup";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    paddingTop: 80,
    background: theme.palette.background.paper,
  },
  productInformationBox: {
    minHeight: 832,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(3),
  },
}));

function Index({ deviceType }) {
  const classes = useStyles();

  const [flowerData, setFlowerData] = React.useState(null);

  useEffect(() => {
    const getProductData = async () => {
      let path = window.location.pathname.split("/");
      let productId = path[2];

      const response = await axios.get(`/product/${productId}`, {
        headers: {
          accept: "application/json",
        },
      });

      setFlowerData(response.data);
    };

    getProductData();
  }, []);

  return (
    <>
      <Page className={classes.root} title="Produkto informacija">
        <Box className={classes.productInformationBox}>
          <ProductInformationCard flowerData={flowerData} />
        </Box>
        <CartPopUp deviceType={deviceType} />
      </Page>
    </>
  );
}

export default Index;
