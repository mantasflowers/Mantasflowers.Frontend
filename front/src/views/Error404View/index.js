import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";
import Page from "../../components/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(3),
    paddingTop: 80,
    paddingBottom: 80,
    backgroundColor: theme.palette.background.default,
  },
}));

function Error404View() {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Page title="404:)">
      <Container maxWidth="lg" style={{ minHeight: 700, marginTop: 65 }}>
        <Typography
          align="center"
          variant={mobileDevice ? "h4" : "h1"}
          color="textPrimary"
          style={{ fontSize: 80 }}
        >
          404 :)
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          Kitą kartą bandykite naviguoti
        </Typography>
        <Box mt={6} display="flex" justifyContent="center">
          <Button
            color="secondary"
            component={RouterLink}
            to="/"
            variant="outlined"
          >
            atgal
          </Button>
        </Box>
      </Container>
    </Page>
  );
}

export default Error404View;
