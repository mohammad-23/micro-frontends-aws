import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StyledProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <BrowserRouter>
      <StyledProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StyledProvider>
    </BrowserRouter>
  );
};
