import React from "react";
import JobCard from "./index";
import { render } from "@testing-library/react";
import LeadTitleBar from "../LeadTitleBar/index";
import LeadDetailsBar from "../LeadDetailsBar/index";
import LeadDescriptionBar from "../LeadDescriptionBar/index";

jest.mock("../LeadTitleBar/index");
jest.mock("../LeadDetailsBar/index");
jest.mock("../LeadDescriptionBar/index");

describe("JobCard", () => {
  it("should render", () => {
    // Arrange
    const now = new Date();
    const job = {
      contactId: "1",
      suburbId: "2",
      categoryId: "3",
      created: now,
      id: "4",
      description: "some description",
    };
    LeadTitleBar.type.mockReturnValue(<div data-testid="title" />);
    LeadDetailsBar.type.mockReturnValue(<div data-testid="details" />);
    LeadDescriptionBar.type.mockReturnValue(<div data-testid="description" />);

    // Act
    const { getByTestId } = render(<JobCard job={job} />);

    // Assert
    expect(getByTestId("title")).toBeInTheDocument();
    expect(getByTestId("details")).toBeInTheDocument();
    expect(getByTestId("description")).toBeInTheDocument();
  });
});
