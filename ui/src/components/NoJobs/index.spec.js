import React from "react";
import { render } from "@testing-library/react";
import NoJobs from "./index";
import QueryClientProvider from "../QueryClientProvider";

describe("NoJobs", () => {
  it("should render", () => {
    // Arrange
    const content = "No more new jobs found";

    // Act
    const { getByText } = render(
      <QueryClientProvider>
        <NoJobs>{content}</NoJobs>
      </QueryClientProvider>
    );

    // Assert
    const title = getByText(/no jobs/i);
    expect(title).toBeInTheDocument();
    const description = getByText(content);
    expect(description).toBeInTheDocument();
  });
});
