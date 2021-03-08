import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import initialState from "./store/initialState";
import { Provider } from "react-redux";

const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Events Dashboar/i);
  expect(linkElement).toBeInTheDocument();
});
