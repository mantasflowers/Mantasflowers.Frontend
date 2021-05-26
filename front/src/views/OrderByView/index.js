import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box, CircularProgress } from "@material-ui/core";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

// Components
import Page from "../../components/Page";
import Hero from "../../components/LandingPage/Hero";
import ProductGrid from "../../components/ProductCatalogue/ProductGrid";
import NavBar from "../../components/LandingPage/NavBar";
import CartPopUp from "../../features/carts/CartPopup";
import FeedbackForm from "components/LandingPage/FeedbackForm";

const Inner = styled.div`
  max-width: 1140;
  margin: 0 auto;
  padding: 2rem;
  background: #b5cb9f;
  position: relative;

  @media (max-width: 580px) {
    max-width: none !important;
    width: 100% !important;
    padding: 10px;
  }
`;

function Index({ deviceType }) {
  const [products, setProducts] = useState(null);

  const params = useParams();

  useEffect(() => {
    const getProductData = async () => {
      const [, orderBy] = params.by.split("=");

      const response = await axios.get(
        `/product?page=1&pageSize=30&orderBy=${orderBy}&categories=flower&categories=bouquet`,
        {
          headers: {
            accept: "application/json",
          },
        }
      );

      setProducts(response.data.items);
    };

    getProductData();
  }, [params]);

  return (
    <Page>
      <Hero />
      <Inner>
        <Box style={{ marginTop: "600px" }}>
          <NavBar />
          {products ? (
            <ProductGrid products={products} />
          ) : (
            <Box
              style={{ textAlign: "center", marginBottom: 40, marginTop: 40 }}
            >
              <CircularProgress />
            </Box>
          )}
        </Box>
      </Inner>

      <FeedbackForm />
      <CartPopUp deviceType={deviceType} />
    </Page>
  );
}

export default Index;
