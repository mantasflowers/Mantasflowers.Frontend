import React, { useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import axios from "axios";

import Page from "../../components/Page";
import ProductInformationCard from "../../components/SingleProduct/ProductInformationCard";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    paddingTop: 80,
  },
  productInformationBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(3),
  },
}));

function Index() {
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
      </Page>
    </>
  );
}

export default Index;
