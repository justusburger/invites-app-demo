import React from "react";
import LeadDescriptionBar from "./index";
import { render } from "@testing-library/react";
import useContactById from "../../api/useContactById";

jest.mock("../../api/useContactById");

describe("LeadDescriptionBar", () => {
  it("renders correctly", () => {
    // Arrange
    useContactById.mockReturnValue([{ id: "33", phone: "0987654321", email: "tim@gmail.com" }, false]);
    const description = "Some lead description";

    // Act
    const { getByText } = render(<LeadDescriptionBar contactId="33" description={description} />);

    // Assert
    expect(getByText(description)).toBeInTheDocument();
    expect(getByText("0987654321")).toBeInTheDocument();
    expect(getByText("tim@gmail.com")).toBeInTheDocument();
    expect(useContactById).toHaveBeenCalledWith("33");
  });
});
