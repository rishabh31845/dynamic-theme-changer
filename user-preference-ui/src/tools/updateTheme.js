import { theme } from "theme";

const updateTheme = ({ primary }) => {
  const newTheme = Object.assign({}, theme);
  newTheme.colors.primary = primary;
  return newTheme;
};

export default updateTheme;
