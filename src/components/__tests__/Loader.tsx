import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Loader from "../loader";

let container: any = null;
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

it("should render correctly", () => {
  act(() => {
    render(<Loader />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<div id=\\"loader\\"></div>"`
  );
});
