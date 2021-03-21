import React from "react";
import FormattedDate from "./index";
import { render } from "@testing-library/react";

describe("FormattedDate", () => {
  it("renders", () => {
    // Arrange
    const date = new Date(2021, 3, 1, 12, 35, 0);

    // Act
    const { getByText } = render(<FormattedDate>{date}</FormattedDate>);

    // Assert
    expect(getByText("April 01 @ 12:35 pm")).toBeInTheDocument();
  });
});
