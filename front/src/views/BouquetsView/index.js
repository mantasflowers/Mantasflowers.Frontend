import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router";

// Components
import Page from "../../components/Page";
import Hero from "../../components/LandingPage/Hero";
import ProductGrid from "../../components/ProductCatalogue/ProductGrid";
import NavBar from "../../components/LandingPage/NavBar";

const Inner = styled.div`
  max-width: 1140;
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  position: relative;
`;

function Index() {
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const history = useHistory();

  const paginationClick = (e, number) => {
    history.push(`/bouquets/${number}`);
    setPage(page + 1);
  };

  useEffect(() => {
    const getProductData = async () => {
      let path = window.location.pathname.split("/");
      setPage(path[2]);

      let page = path[2];

      const response = await axios.get(
        `/product?page=${page}&pageSize=3&categories=bouquet`,
        {
          headers: {
            accept: "application/json",
          },
        }
      );

      console.log("response.data", response.data);

      setPageCount(response.data.totalPages);
      setProducts(response.data.items);
    };

    getProductData();
  }, [page]);

  return (
    <Page>
      <Hero />
      <Inner>
        <Box style={{ marginTop: "600px" }}>
          <NavBar />
          {products && <ProductGrid products={products} />}
        </Box>

        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            count={pageCount}
            page={parseInt(page)}
            onChange={paginationClick}
            color="primary"
          />
        </Box>
      </Inner>
    </Page>
  );
}

export default Index;
