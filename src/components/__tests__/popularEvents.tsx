import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import PopularEvents from "../popularEvents";

let container: any = null;

describe("Card component", () => {
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

  it("Should render correctly when loading data", async () => {
    await act(async () => {
      render(
        <PopularEvents
          {...{
            popularEvents: { isLoading: true, items: [], error: "" },
            onChangeHandler: jest.fn,
            selectedValue: "",
          }}
        />,
        container
      );
    });
    const div = container.querySelector("div");
    expect(div).toBeTruthy();
    expect(div.textContent).toBe("Loading ...");
  });

  it("Should render correctly when failed to load data", async () => {
    await act(async () => {
      render(
        <PopularEvents
          {...{
            popularEvents: {
              isLoading: false,
              items: [],
              error: "An error occured, try again later",
            },
            onChangeHandler: jest.fn,
            selectedValue: "",
          }}
        />,
        container
      );
    });
    const div = container.querySelector("div");
    expect(div).toBeTruthy();
    expect(div.textContent).toBe("An error occured, try again later");
  });

  it("Should render correctly when no available items", async () => {
    await act(async () => {
      render(
        <PopularEvents
          {...{
            popularEvents: { isLoading: false, items: [], error: "" },
            onChangeHandler: jest.fn,
            selectedValue: "",
          }}
        />,
        container
      );
    });
    const div = container.querySelector("p");
    expect(div).toBeTruthy();
    expect(div.textContent).toBe("No popular events available");
  });
});
