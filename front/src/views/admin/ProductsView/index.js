import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box, CircularProgress } from "@material-ui/core";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router";

// Components
import ProductGrid from "components/ProductCatalogue/ProductGrid";

const Inner = styled.div`
  padding: 2rem;
  margin-left: 45px;
  background: #b5cb9f;
  width: 100%;

  @media (max-width: 580px) {
    max-width: none !important;
    width: 100% !important;
    padding: 10px;
  }
`;

function Index({ deviceType }) {
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const history = useHistory();

  const paginationClick = (e, number) => {
    history.push(`/dashboard/${number}`);
    setPage(page + 1);
  };

  useEffect(() => {
    const getProductData = async () => {
      let path = window.location.pathname.split("/");
      setPage(path[3]);

      let page = path[3];

      const response = await axios.get(
        `/product?page=${page}&pageSize=10&categories=flower&categories=bouquet`,
        {
          headers: {
            accept: "application/json",
          },
        }
      );

      setPageCount(response.data.totalPages);
      setProducts(response.data.items);
    };

    getProductData();
  }, [page]);

  return (
    <Inner>
      <Box>
        {products ? (
          <ProductGrid products={products} />
        ) : (
          <Box style={{ textAlign: "center", marginBottom: 40, marginTop: 40 }}>
            <CircularProgress />
          </Box>
        )}
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
  );
}

export default Index;
