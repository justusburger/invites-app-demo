import React from "react";
import LeadsListLayout from "./index";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("LeadsListLayout", () => {
  it("should render 2 tabs", () => {
    // Act
    const { getByTestId } = render(
      <Router>
        <LeadsListLayout>Content</LeadsListLayout>
      </Router>
    );

    // Assert
    const invited = getByTestId("invited-tab-button");
    expect(invited).toBeInTheDocument();
    expect(invited.href).toEqual("http://localhost/leads/new");
    const accepted = getByTestId("accepted-tab-button");
    expect(accepted).toBeInTheDocument();
    expect(accepted.href).toEqual("http://localhost/leads/accepted");
  });
});
