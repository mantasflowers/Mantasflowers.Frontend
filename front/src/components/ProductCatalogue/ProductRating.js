import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";
import { useSelector } from "react-redux";

function ProductRating(props) {
  const { user } = useSelector((state) => state.account);
  const [avgRating, setAvgRating] = useState(2);
  const [count, setCount] = useState(1);
  const [isRated, setIsRated] = useState(false); //flag for user input
  const [isReadOnly, setIsReadOnly] = useState(false);

  const handleIsReadOnly = (value) => {
    if (!user) {
      setIsReadOnly(true);
      console.log("osiujdfoisdf");
    } else {
      setIsReadOnly(value);
    }
  };

  console.log(!user, user);

  useEffect(() => {
    handleIsReadOnly(false); //initial readonly check

    async function getProductRating() {
      try {
        const response = await axios.get(
          "/review/71a4e7f6-333b-4dd1-997f-ce38efa3aee4"
        );
        // const rating = isRated ? 1.5 : response.data.averageScore;
        // setAvgRating(rating);
        setAvgRating(response.data.averageScore);
        setCount(response.data.count);
      } catch (error) {}
    }

    async function getUserRating() {
      try {
        const response = await axios.get("/review", {
          params: {
            productId: "71a4e7f6-333b-4dd1-997f-ce38efa3aee4",
          },
        });
        if (response.status === 200) {
          handleIsReadOnly(true);
        }
      } catch (error) {
        if (error.response.status === 404) {
          handleIsReadOnly(false);
        }
      }
    }

    getProductRating();
    getUserRating();
  }, [isRated, user]);

  //71a4e7f6-333b-4dd1-997f-ce38efa3aee4

  const handleRatingChange = async (event) => {
    try {
      const data = {
        productId: "71a4e7f6-333b-4dd1-997f-ce38efa3aee4",
        score: parseInt(event.currentTarget.value),
      };

      const response = await axios.post("/review", data, {
        headers: {
          accept: "application/json",
        },
      });

      setIsRated(true);
    } catch (error) {}
  };

  return (
    <Box>
      <Rating
        onChange={handleRatingChange}
        readOnly={isReadOnly}
        name="half-rating"
        value={avgRating}
        precision={0.5}
      />
    </Box>
  );
}

export default ProductRating;
