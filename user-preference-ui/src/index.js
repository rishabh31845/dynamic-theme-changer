import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "global/App";

function renderToDOM() {
  const root = document.getElementById("root");
  if (root !== null) {
    ReactDOM.render(<App />, root);

    if (module.hot) {
      module.hot.accept('global/App', () => {
        const NextApp = require('global/App').default;
        ReactDOM.render(<NextApp />, root);
      });
    }
  }
}
renderToDOM();
export { renderToDOM };
