import React from "react";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

const Root = ({ store }) =>
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </AppContainer>;

export default Root;
