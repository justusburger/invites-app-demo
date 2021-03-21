import React from "react";
import DefaultLayout from "./index";
import { render } from "@testing-library/react";

describe("DefaultLayout", () => {
  it("renders", () => {
    // Act
    render(<DefaultLayout>Content</DefaultLayout>);
  });
});
