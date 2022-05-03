import React, { useState } from "react";
import Routes from "routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, useTheme } from "styled-components";
import { ThemeContext } from "./context";
import { theme } from "theme";
import GlobalStyles from "./GlobalStyles";
import "antd/dist/antd.css";

const App = () => {
  const [selectedTheme, setTheme] = useState(theme);
  return (
    <ThemeContext.Provider value={setTheme}>
      <ThemeProvider theme={selectedTheme}>
        <Router>
          <GlobalStyles />
          <Routes />
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
