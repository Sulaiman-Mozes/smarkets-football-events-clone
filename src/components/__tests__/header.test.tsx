import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Header from "../header";
import { BrowserRouter } from "react-router-dom";

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
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      container
    );
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<nav class=\\"bg-gray-900\\">
      <div class=\\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\\">
        <div class=\\"flex items-center justify-between h-16\\">
          <div class=\\"flex items-center\\">
            <div class=\\"flex-shrink-0\\"><img class=\\"h-32 w-32\\" src=\\"smarkets-logo.svg\\" alt=\\"Workflow\\"></div>
            <div class=\\"hidden md:block\\">
              <div class=\\"ml-10 flex items-baseline space-x-4\\"><a class=\\"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium\\" href=\\"/\\">Dashboard</a></div>
            </div>
          </div>
          <div class=\\"-mr-2 flex md:hidden\\"><button type=\\"button\\" class=\\"bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white\\" aria-controls=\\"mobile-menu\\" aria-expanded=\\"false\\"><span class=\\"sr-only\\">Open main menu</span><svg class=\\"block h-6 w-6\\" xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\" aria-hidden=\\"true\\">
                <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M4 6h16M4 12h16M4 18h16\\"></path>
              </svg><svg class=\\"hidden h-6 w-6\\" xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\" aria-hidden=\\"true\\">
                <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M6 18L18 6M6 6l12 12\\"></path>
              </svg></button></div>
        </div>
      </div>
      <div class=\\"md:hidden\\" id=\\"mobile-menu\\">
        <div class=\\"px-2 pt-2 pb-3 space-y-1 sm:px-3\\"><a class=\\"bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium\\" href=\\"/\\">Dashboard</a></div>
      </div>
    </nav>"
  `);
});
