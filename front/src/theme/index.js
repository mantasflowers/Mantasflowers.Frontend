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
        default: "#d8a56d",
        dark: "#b5cb9f",
        paper: "#b5cb9f",
      },
      primary: {
        main: "#422426",
      },
      secondary: {
        main: "#F28166",
      },
      text: {
        primary: "#B95953",
        secondary: "#B95953",
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
