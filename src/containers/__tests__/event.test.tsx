import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import EventDetails from "../event";
import { Provider } from "react-redux";
import initialState from "../../store/initialState";
import ReactRouter from "react-router";

let container: any = null;

const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

describe("Event Details component", () => {
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("Should render correctly", async () => {
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ eventId: "1234" });
    await act(async () => {
      render(
        <Provider store={store}>
          <EventDetails />
        </Provider>,
        container
      );
    });
    const div = container.querySelector("div");
    expect(div).toBeTruthy();
    expect(div.textContent).toBe("Events Details");
  });
});
