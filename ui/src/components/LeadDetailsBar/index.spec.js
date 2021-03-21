import React from "react";
import { render } from "@testing-library/react";
import LeadDetailsBar from "./index";
import useCategoryById from "../../api/useCategoryById";
import useSuburbById from "../../api/useSuburbById";

jest.mock("../../api/useCategoryById");
jest.mock("../../api/useSuburbById");

describe("LeadDetailsBar", () => {
  it("should render correctly", () => {
    // Arrange
    useCategoryById.mockReturnValue([{ id: "1", name: "Plumbing" }, false]);
    useSuburbById.mockReturnValue([{ id: "2", name: "Sydney", postcode: "2000" }, false]);

    // Act
    const { getByText } = render(<LeadDetailsBar categoryId="1" suburbId="2" id="3" price={55} />);

    // Assert
    expect(useCategoryById).toHaveBeenCalledWith("1");
    expect(useSuburbById).toHaveBeenCalledWith("2");
    expect(getByText("Plumbing")).toBeInTheDocument();
    expect(getByText("Sydney 2000")).toBeInTheDocument();
    expect(getByText("$55.00 Lead Invitation")).toBeInTheDocument();
    expect(getByText("Job ID: 3")).toBeInTheDocument();
  });
});
