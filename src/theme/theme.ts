"use client";

import {
  Badge,
  Button,
  Card,
  Container,
  createTheme,
  MantineTheme,
  MantineThemeOverride,
  Title,
} from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "blue",
  colors: {
    dark: [
      "#009B92",
      "#008A80",
      "#00796E",
      "#00685D",
      "#00574C",
      "#00473C",
      "#00372D",
      "#00271E",
      "#00160F",
      "#000201",
    ],
  },
  components: {
    Title: Title.extend({
      defaultProps: {
        styles: (theme) => ({
          root: {
            color: `light-dark(${theme.colors.gray[8]}, ${theme.colors.gray[0]})`,
          },
        }),
      },
    }),
    Text: {
      styles: (theme: MantineTheme) => ({
        root: {
          color: `light-dark(${theme.colors.gray[8]}, ${theme.colors.gray[0]})`,
        },
      }),
    },
    Card: Card.extend({
      defaultProps: {
        styles: (theme) => ({
          root: {
            backgroundColor: `light-dark(${theme.colors.teal[0]}, ${theme.colors.dark[5]})`,
          },
        }),
      },
    }),
    Container: Container.extend({
      defaultProps: {
        styles: (theme, { variant = "" }) => ({
          root: {
            backgroundColor:
              variant === "blue"
                ? `light-dark(${theme.colors.blue[0]}, #093B68)`
                : variant === "teal"
                  ? `light-dark(${theme.colors.teal[0]}, ${theme.colors.teal[9]})`
                  : "unset",
          },
        }),
      },
    }),
    Button: Button.extend({
      defaultProps: {
        styles: (theme, { variant = "" }) => ({
          root: {
            transform: "none",
            "&:active": {
              transform: "none",
            },
            borderRadius: 30,
            color:
              variant !== "outline"
                ? theme.colors.cyan[0]
                : `light-dark(${theme.colors.cyan[9]}, ${theme.colors.cyan[0]})`,
            backgroundColor:
              variant !== "outline" ? theme.colors.cyan[9] : "transparent",
            "&:hover": {
              backgroundColor: theme.colors.cyan[9],
            },
            borderWidth: variant !== "outline" ? "none" : "2px",
            borderColor:
              variant !== "outline"
                ? "transparent"
                : `light-dark(${theme.colors.cyan[9]}, ${theme.colors.cyan[0]})`,
          },
          input: {
            transform: "none",
            "&:active": {
              transform: "none",
            },
          },
        }),
      },
    }),
    Badge: Badge.extend({
      defaultProps: {
        styles: (theme: MantineTheme) => ({
          root: {
            color: theme.colors.cyan[0],
            background: theme.colors.cyan[9],
          },
        }),
      },
    }),
  },
} as MantineThemeOverride);
