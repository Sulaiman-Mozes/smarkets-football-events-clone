import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import EventsTable from "../eventsTable";

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
        <EventsTable
          {...{ allEvents: { isLoading: true, items: [], error: "" } }}
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
        <EventsTable
          {...{
            allEvents: {
              isLoading: false,
              items: [],
              error: "An error occured, try again later",
            },
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
        <EventsTable
          {...{ allEvents: { isLoading: false, items: [], error: "" } }}
        />,
        container
      );
    });
    const div = container.querySelector("p");
    expect(div).toBeTruthy();
    expect(div.textContent).toBe("No events available");
  });
});
