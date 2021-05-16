import {
  CardContent,
  Card,
  Typography,
  createStyles,
  makeStyles,
  Box,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    cardNumber: {
      borderRadius: "50%",
      backgroundColor: "Green",
      color: "White",
      width: "35px",
      height: "35px",
      display: "flex",
      justifyContent: "center",
    },
    firstRow: {
      display: "flex",
      alignItems: "center",
      "&:before": {
        content: (props) => `"${props.cardNumber}"`,
        borderRadius: "50%",
        backgroundColor: "Green",
        color: "White",
        width: "35px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    carLabel: {
      marginLeft: "15px",
    },
    iconButtonText: {
      fontSize: "14px",
    },
    labelContainer: {
      justifyContent: "space-between",
      //direction="row"
      // justify="space-between"
      // alignItems="center"
    },
    contentCardsWrapper: {
      marginTop: "35px",
    },
  })
);

const AddressCard = ({ register, errors, control, cardNumber, cardLabel }) => {
  const classes = useStyles({ cardNumber });

  return (
    <Card style={{ backgroundColor: "#d8a56d" }}>
      <CardContent>
        <Box className={classes.labelContainer}>
          <Box item className={classes.firstRow}>
            <Typography className={classes.carLabel}>{cardLabel}</Typography>
          </Box>
        </Box>
        <Box>
          <Box mb={2} mt={2}>
            <TextField
              fullWidth
              label="šalis"
              name="country"
              inputRef={register({
                required: "laukas privalomas",
              })}
              variant="outlined"
              control={control}
              className={classes.inputField}
            />
            {errors.country && (
              <span style={{ color: "red" }}>{errors.country.message}</span>
            )}
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="miestas"
              name="city"
              inputRef={register({
                required: "laukas privalomas",
              })}
              variant="outlined"
              control={control}
              className={classes.inputField}
            />
            {errors.city && (
              <span style={{ color: "red" }}>{errors.city.message}</span>
            )}
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="adresas"
              name="street"
              inputRef={register({
                required: "laukas privalomas",
              })}
              variant="outlined"
              control={control}
              className={classes.inputField}
            />
            {errors.street && (
              <span style={{ color: "red" }}>{errors.street.message}</span>
            )}
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="pašto kodas"
              name="zipcode"
              inputRef={register({
                required: "laukas privalomas",
              })}
              variant="outlined"
              control={control}
              className={classes.inputField}
            />
            {errors.zipcode && (
              <span style={{ color: "red" }}>{errors.zipcode.message}</span>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddressCard;
