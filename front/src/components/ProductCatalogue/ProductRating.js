import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";
import { useSelector } from "react-redux";

function ProductRating(props) {
  const account = useSelector((state) => state.account);
  const [avgRating, setAvgRating] = useState(2);
  const [count, setCount] = useState(1);
  const [isRated, setIsRated] = useState(false); //flag for user input
  const [isReadOnly, setIsReadOnly] = useState(account ? false : true);

  // const handleIsReadOnly = (value) => {
  //   if (!user) {
  //     setIsReadOnly(true);
  //     console.log("osiujdfoisdf");
  //   } else {
  //     setIsReadOnly(value);
  //   }
  // };

  //console.log(!account, account);

  useEffect(() => {
    async function getProductRating() {
      try {
        const response = await axios.get(
          `https://mantasflowers-backend.azurewebsites.net/review/${props.id}`
        );
        // const rating = isRated ? 1.5 : response.data.averageScore;
        // setAvgRating(rating);
        setAvgRating(response.data.averageScore);
        setCount(response.data.count);
      } catch (error) {
        setAvgRating(5);
        setCount(1);
      }
    }

    async function getUserRating() {
      try {
        const response = await axios.get(
          `https://mantasflowers-backend.azurewebsites.net/review`,
          {
            params: {
              productId: props.id,
            },
            headers: {
              Authorization: `Bearer ${account.user.idToken}`,
            },
          }
        );
        if (response.status === 200) {
          setIsReadOnly(true);
        }
      } catch (error) {
        if (error.message === "Cannot read property 'idToken' of null") {
          setIsReadOnly(true);
        } else if (error.response.data === "Review not found") {
          setIsReadOnly(false);
        } else {
          setIsReadOnly(true);
        }
      }
    }
    getProductRating();
    getUserRating();
  }, [isRated, account]);

  //71a4e7f6-333b-4dd1-997f-ce38efa3aee4

  const handleRatingChange = async (event) => {
    try {
      const data = {
        productId: props.id,
        score: parseInt(event.currentTarget.value),
      };

      const response = await axios.post(
        `https://mantasflowers-backend.azurewebsites.net/review/`,
        data,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${account.user.idToken}`,
          },
        }
      );

      setIsRated(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      {avgRating && count && (
        <Rating
          onChange={handleRatingChange}
          readOnly={isReadOnly}
          name="half-rating"
          value={avgRating}
          precision={0.5}
        />
      )}
    </Box>
  );
}

export default ProductRating;
