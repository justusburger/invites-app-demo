import React from "react";
import { render } from "@testing-library/react";
import LeadTitleBar from "./index";
import QueryClientProvider from "../QueryClientProvider";
import useContactById from "../../api/useContactById";

jest.mock("../../api/useContactById");

describe("LeadTitleBar", () => {
  it("should render", () => {
    // Arrange
    useContactById.mockReturnValue([{ firstName: "John", lastName: "Smith" }, false]);

    // Act
    const { getByTestId, getByText } = render(
      <QueryClientProvider>
        <LeadTitleBar contactId="201" date={new Date()} showLastname />
      </QueryClientProvider>
    );

    // Assert
    expect(getByTestId("avatar")).toBeInTheDocument();
    expect(getByText("John Smith")).toBeInTheDocument();
    expect(useContactById).toHaveBeenCalledWith("201");
  });
});
