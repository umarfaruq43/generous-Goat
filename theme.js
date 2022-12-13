import { extendTheme } from "@chakra-ui/react";

const colors = {
    brand: {
        primary: "#1f2937",
        purple: "#6366f1",
        cyan: "#0d9488",
        white: "#FFF",
        blurBg: "rgb(31 41 55/.4)",
        blurText: "rgb(209 213 219)",
        fadeGray: "#D1D5DB",
        gray: "#6b7280",
        primaryLight: "#818cf8",
        opacityBg: "rgba(17, 24, 39, .71)",
    },
};

export const theme = extendTheme({ colors });
