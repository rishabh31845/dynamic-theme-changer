import { themeGet } from "@styled-system/theme-get";

export const PRIMARY = themeGet("colors.primary");

const colors = {
  primary: "#fff",
};

// https://github.com/jxnblk/styled-system#api
export const theme = {
  colors,
};

export const getDefaultThemeValue = (getter) => getter({ theme });
