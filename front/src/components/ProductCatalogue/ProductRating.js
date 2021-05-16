import React, { useEffect, useState } from "react";
import { Box, Rating } from "@material-ui/core";

function ProductRating(props) {
  // const { user } = useSelector(state => state.account);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // cia reikia call'o i back'a pasiimti produkto ratinga;
    const getRating = async () => {
      // call get rating + props.id;
      // await call;
      // setRating(response);
    };
    getRating();
  }, []);

  //   const async handleRatingChange = (value) => {
  //      funkcija, kuri handlina zmogaus reitingavima;
  //      paimam value ir kazka dar, nezinau, reik paziuret back'o swaggeri.
  //      mes turbut darom post'a i back'a kad pareitinguot produkta.
  //      const data = {
  //         rating: value
  //      }
  //      const response = await axios.post("URL", data, {headers: pakopink is manes} );
  //      console.log(response);
  //   }

  return (
    <Box>
      {rating && (
        <Rating
          // readOnly={user || checkas_ar_jau_reitingavo ? false : true}
          precision={0.5}
          // onChange={(e, value) => handleRatingChange(value)}
          // defaultValue={rating}
        />
      )}
    </Box>
  );
}

export default ProductRating;
