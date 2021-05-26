import {
  CardContent,
  Card,
  Typography,
  createStyles,
  makeStyles,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import { Controller } from "react-hook-form";

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

const ScheduleCard = ({ register, control, errors, cardNumber, cardLabel }) => {
  const classes = useStyles({ cardNumber });

  return (
    <Card style={{ backgroundColor: "#d8a56d" }}>
      <CardContent>
        <Box className={classes.labelContainer} container>
          <Box item className={classes.firstRow}>
            <Typography className={classes.carLabel}>{cardLabel}</Typography>
          </Box>

          <Box mb={2}>
            <FormControl style={{ width: "100%", padding: 5 }}>
              <InputLabel id="shipment-select">
                pasirinkite pristatymą
              </InputLabel>
              <Controller
                as={
                  <Select
                    labelId="shipment-select"
                    label="pasirinkite pristatymą"
                  >
                    <MenuItem value="lp_express">LP Express</MenuItem>
                  </Select>
                }
                name="shipment"
                control={control}
                defaultValue="lp_express"
              />
            </FormControl>
          </Box>

          <Box mb={2} mt={2}>
            <TextField
              fullWidth
              label="žinutė prie gėlių"
              name="message"
              inputRef={register}
              variant="outlined"
              control={control}
              className={classes.inputField}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ScheduleCard;
