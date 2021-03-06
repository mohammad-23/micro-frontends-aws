import React from "react";
import ReactDOM from "react-dom";
// react-router-dom uses this library internally
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  // memory history in case of production
  // in case of developement mode inside of our remote
  // we use the browserHistory
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });

  // For Communication from remote to container
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    // When container navigates, the container should call this function
    // so that the remote can update its memory history also
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
