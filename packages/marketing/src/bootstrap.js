import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const mount = (element) => {
  ReactDOM.render(<App />, element);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// If Running through Container
export { mount };
