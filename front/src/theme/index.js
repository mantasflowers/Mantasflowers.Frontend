/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { createMuiTheme } from "@material-ui/core";
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
        active: "rgba(255, 255, 255, 0.54)",
        hover: "rgba(255, 255, 255, 0.04)",
        selected: "rgba(255, 255, 255, 0.08)",
        disabled: "rgba(255, 255, 255, 0.26)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        focus: "rgba(255, 255, 255, 0.12)",
      },
      background: {
        default: "#282C34",
        dark: "#1c2025",
        paper: "#282C34",
      },
      primary: {
        main: "#8a85ff",
      },
      secondary: {
        main: "#8a85ff",
      },
      text: {
        primary: "#e6e5e8",
        secondary: "#adb0bb",
      },
    },
    shadows: strongShadows,
  },
];

export function createTheme() {
  let themeConfig = themeConfigs[0];

  let theme = createMuiTheme({ ...baseConfig, ...themeConfig });

  return theme;
}
