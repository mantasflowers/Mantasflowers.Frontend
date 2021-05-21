import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  createStyles,
  makeStyles,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";
import axios from "axios";
import FilesDropzone from "components/AdminComponents/FilesDropzone";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      fontSize: 32,
      fontWeight: 500,
      textAlign: "center",
    },
    root: {
      height: "100%",
      backgroundColor: theme.palette.background.paper,

      [theme.breakpoints.down("xs")]: {
        // padding: 10,
        // width: "90vw",
      },
    },

    button: {
      width: "100%",
      textTransform: "initial",
      height: 40,
      color: "#d8a56d",
      marginBottom: 20,
    },
    error: {
      color: "#d9534f",
    },
    inputField: {
      border: "1px solid lightblue",
      borderRadius: 4,
    },
  })
);

const ProductUpdateContent = ({ product, handleClose }) => {
  const classes = useStyles();
  const { register, handleSubmit, errors, control } = useForm();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const account = useSelector((state) => state.account);
  const [image, setImage] = useState(product.thumbnailPictureUrl);

  const onSubmit = async (data) => {
    const productData = {
      productInfo: {
        description: data.description,
        pictureUrl: image,
      },
      name: data.name,
      category: data.category,
      shortDescription: data.shortDescription,
      thumbnailPictureUrl: image,
      price: data.price,
      leftInStock: data.leftInStock,
      leftInStock: 0,
    };

    const response = await axios
      .put(
        `https://mantasflowers-backend.azurewebsites.net/product/${product.id}`,
        productData,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${account.user.idToken}`,
          },
        }
      )
      .catch((error) => {
        console.log({ error });
        enqueueSnackbar("Sistemos klaida!", {
          variant: "error",
        });
      });

    handleClose();
  };

  const handleImage = (image) => {
    setImage(image);
  };
  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      style={{ width: "50%", margin: "0 auto" }}
    >
      <Box mb={2}>
        <Typography variant="h2" component="h1" className={classes.pageTitle}>
          Produkto keitimas
        </Typography>
      </Box>

      <Box mb={4} style={{ display: "flex", justifyContent: "center" }}>
        <FilesDropzone
          handleImage={handleImage}
          imageBefore={product.thumbnailPictureUrl}
        />
      </Box>

      <Box mb={2}>
        <TextField
          fullWidth
          label="pavadinimas"
          name="name"
          inputRef={register({
            required: "laukas privalomas",
          })}
          variant="outlined"
          control={control}
          className={classes.inputField}
          defaultValue={product.name}
        />
        {errors.name && (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        )}
      </Box>

      <Box mb={2}>
        <TextField
          fullWidth
          label="aprašymas (ilgas)"
          name="description"
          type="description"
          inputRef={register({ required: "laukas privalomas" })}
          variant="outlined"
          control={control}
          className={classes.inputField}
          defaultValue={product.description}
        />
        {errors.description && (
          <span style={{ color: "red" }}>{errors.description.message}</span>
        )}
      </Box>

      <Box mb={2}>
        <TextField
          fullWidth
          label="aprašymas (trumpas)"
          name="shortDescription"
          type="shortDescription"
          inputRef={register({ required: "laukas privalomas" })}
          variant="outlined"
          control={control}
          className={classes.inputField}
          defaultValue={product.shortDescription}
        />
        {errors.shortDescription && (
          <span style={{ color: "red" }}>
            {errors.shortDescription.message}
          </span>
        )}
      </Box>

      <Box mb={2}>
        <TextField
          fullWidth
          label="kaina"
          name="price"
          type="price"
          inputRef={register({ required: "laukas privalomas" })}
          variant="outlined"
          control={control}
          className={classes.inputField}
          defaultValue={product.price}
        />
        {errors.price && (
          <span style={{ color: "red" }}>{errors.price.message}</span>
        )}
      </Box>

      <Box mb={2}>
        <TextField
          fullWidth
          label="kiekis"
          name="leftInStock"
          type="leftInStock"
          inputRef={register({ required: "laukas privalomas" })}
          variant="outlined"
          control={control}
          className={classes.inputField}
          defaultValue={product.leftInStock}
        />
        {errors.leftInStock && (
          <span style={{ color: "red" }}>{errors.leftInStock.message}</span>
        )}
      </Box>

      <Box mb={2}>
        <FormControl style={{ width: "100%", padding: 5 }}>
          <InputLabel id="category-select">kategorija</InputLabel>
          <Controller
            as={
              <Select labelId="category-select" label="kategorija">
                <MenuItem value="flower">Gėlė</MenuItem>
                <MenuItem value="bouquet">Puokštė</MenuItem>
              </Select>
            }
            name="category"
            control={control}
            defaultValue={product.category}
          />
        </FormControl>
      </Box>

      <Box>
        <Button
          variant="contained"
          id="login-button"
          type="submit"
          className={classes.button}
          color="primary"
        >
          Sukurti
        </Button>
      </Box>
    </form>
  );
};

export default ProductUpdateContent;
