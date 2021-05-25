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

const AddressCard = ({
  contactDetails,
  register,
  errors,
  control,
  cardNumber,
  cardLabel,
}) => {
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
              label="el. paštas"
              name="email"
              inputRef={register({
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
                  message: "neteisingas el. pašto adresas",
                },
              })}
              variant="outlined"
              control={control}
              className={classes.inputField}
              defaultValue={contactDetails ? contactDetails.email : ""}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="telefono numeris"
              name="phone"
              inputRef={register({
                required: "laukas privalomas",
              })}
              variant="outlined"
              control={control}
              className={classes.inputField}
              defaultValue={contactDetails ? contactDetails.phone : ""}
            />
            {errors.phone && (
              <span style={{ color: "red" }}>{errors.phone.message}</span>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddressCard;
