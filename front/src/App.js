import { create } from "jss";
import rtl from "jss-rtl";
import { BrowserRouter as Router } from "react-router-dom";
import {
  createStyles,
  jssPreset,
  makeStyles,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import { useMedia } from "./utils/useMedia";

// Base theme ~
import { createTheme } from "./theme";

// Routes ~
import Routes from "./Routes";

import Auth from "./components/Auth";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
      },
      body: {
        height: "100%",
        width: "100%",
      },
      "#root": {
        height: "100%",
        width: "100%",
      },
    },
  })
);

function App() {
  useStyles();
  const mobile = useMedia("(max-width: 580px)");
  const tablet = useMedia("(max-width: 991px)");
  const desktop = useMedia("(min-width: 992px)");

  return (
    <ThemeProvider theme={createTheme()}>
      <StylesProvider jss={jss}>
        <SnackbarProvider maxSnack={1}>
          <Auth>
            <Router>
              <Routes deviceType={{ mobile, tablet, desktop }} />
            </Router>
          </Auth>
        </SnackbarProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
