/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import _ from "lodash";
import { colors, createMuiTheme } from "@material-ui/core";
import typography from "./typography";
import { strongShadows } from "./shadows";

const baseConfig = {
  direction: "ltr",
  typography,

  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: "hidden",
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "rgba(0,0,0,0.075)",
      },
    },
  },
};

const themeConfigs = [
  {
    name: "Dark",

    palette: {
      type: "dark",
      action: {
        active: colors.blueGrey[600],
        hover: "rgba(255, 255, 255, 0.04)",
        selected: "rgba(255, 255, 255, 0.08)",
        disabled: "rgba(255, 255, 255, 0.26)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        focus: "rgba(255, 255, 255, 0.12)",
      },
      background: {
        default: "#282C34",
        dark: "#B9D6F2",
        paper: "#ffffff",
      },
      primary: {
        main: "#061A40",
      },
      secondary: {
        main: "#0353A4",
      },
      text: {
        primary: "#006DAA",
        secondary: "#006DAA",
      },
    },
    shadows: strongShadows,
  },
];

export function createTheme() {
  let themeConfig = themeConfigs[0];

  let theme = createMuiTheme(_.merge({}, baseConfig, themeConfig));

  return theme;
}
