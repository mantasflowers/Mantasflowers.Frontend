import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";

const cityOptions = ["Vilnius", "Kaunas", "NYC"];

const useStyles = makeStyles(() => ({
  root: {},
}));

function GeneralSettings({ className, ...rest }) {
  const classes = useStyles();

  const { register, handleSubmit, errors, control } = useForm();

  const onSubmit = (data) => {
    console.log("data ->", data);
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <Card className={clsx(classes.root, className)} {...rest}>
        <CardHeader title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                required
                type="firstName"
                variant="outlined"
                control={control}
                inputRef={register}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                required
                type="lastName"
                variant="outlined"
                control={control}
                inputRef={register}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                required
                type="email"
                variant="outlined"
                control={control}
                inputRef={register}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                variant="outlined"
                control={control}
                inputRef={register}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select City"
                name="city"
                select
                SelectProps={{ native: true }}
                variant="outlined"
                control={control}
                inputRef={register}
              >
                {cityOptions.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                required
                type="country"
                variant="outlined"
                control={control}
                inputRef={register}
              />
            </Grid>
          </Grid>
          {errors.submit && (
            <Box mt={3}>
              <FormHelperText error>{errors.submit}</FormHelperText>
            </Box>
          )}
        </CardContent>
        <Divider />
        <Box p={2} display="flex" justifyContent="flex-end">
          <Button
            color="secondary"
            type="submit"
            variant="contained"
            style={{ textTransform: "initial" }}
          >
            Save Changes
          </Button>
        </Box>
      </Card>
    </form>
  );
}

GeneralSettings.propTypes = {
  className: PropTypes.string,
};

export default GeneralSettings;
