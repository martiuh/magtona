import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import Home from "./index";
import configureStore from "store";

test("Home shows items length", () => {
    const store = configureStore({ cart: { items: [1, 2, 3] } });
  const { getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const cartLength = getByText(/3/);
  expect(cartLength).toBeInTheDocument();
});
