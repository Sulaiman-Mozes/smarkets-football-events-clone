import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import NotFound from "../notFound";

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
    render(<NotFound />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"flex mt-64 w-screen items-center justify-center\\">
      <div>
        <h3 class=\\"text-xl my-4\\">Page Not Found</h3>
        <p class=\\"text-sm text-gray-500\\">Go Back to Home Page</p>
      </div>
    </div>"
  `);
});
