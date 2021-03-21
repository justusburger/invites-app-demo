import React from "react";
import LeadCard from "./index";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import useUpdateJobStatus from "../../api/useUpdateJobStatus";
import LeadTitleBar from "../LeadTitleBar/index";
import LeadDetailsBar from "../LeadDetailsBar/index";
import LeadDescriptionBar from "../LeadDescriptionBar/index";

jest.mock("../../api/useUpdateJobStatus");
jest.mock("../LeadTitleBar/index");
jest.mock("../LeadDetailsBar/index");
jest.mock("../LeadDescriptionBar/index");

const updateStatus = jest.fn();
const onStatusChanged = jest.fn();

beforeEach(() => {
  updateStatus.mockReset();
  onStatusChanged.mockReset();
  useUpdateJobStatus.mockReturnValue([updateStatus]);
  updateStatus.mockReturnValue(new Promise((resolve) => setTimeout(resolve, 0)));
  LeadTitleBar.type.mockReturnValue(<div data-testid="title" />);
  LeadDetailsBar.type.mockReturnValue(<div data-testid="details" />);
  LeadDescriptionBar.type.mockReturnValue(<div data-testid="description" />);
});

const job = { id: "345" };

describe("LeadCard", () => {
  it("should allow one to click Accept", async () => {
    const { getByTestId } = render(<LeadCard job={job} onStatusChanged={onStatusChanged} />);
    const accept = getByTestId("accept");
    fireEvent.click(accept);
    await waitFor(() => screen.getByTestId("confirm-accept-text"));
  });
  it("should allow one to click Decline", async () => {
    const { getByTestId } = render(<LeadCard job={job} onStatusChanged={onStatusChanged} />);
    const accept = getByTestId("decline");
    fireEvent.click(accept);
    await waitFor(() => screen.getByTestId("confirm-decline-text"));
  });
  describe("after clicking Accept", () => {
    it("should update the job status when user clicks confirm", async () => {
      // Act
      const { getByTestId } = render(<LeadCard job={job} onStatusChanged={onStatusChanged} />);
      const accept = getByTestId("accept");
      fireEvent.click(accept);
      const confirm = screen.getByTestId("confirm");
      fireEvent.click(confirm);

      // Assert
      expect(updateStatus).toHaveBeenCalledWith({ status: "accepted" });
      await waitFor(() => expect(onStatusChanged).toHaveBeenCalled());
    });
    it("should cancel when the user clicks cancel", async () => {
      // Act
      const { getByTestId } = render(<LeadCard job={job} onStatusChanged={onStatusChanged} />);
      const accept = getByTestId("accept");
      fireEvent.click(accept);
      const cancel = screen.getByTestId("cancel");
      fireEvent.click(cancel);
      await waitFor(() => screen.getByTestId("accept"));

      // Assert
      expect(updateStatus).not.toHaveBeenCalled();
      await waitFor(() => expect(onStatusChanged).not.toHaveBeenCalled());
    });
  });
  describe("after clicking Decline", () => {
    it("should update the job status when user clicks confirm", async () => {
      // Act
      const { getByTestId } = render(<LeadCard job={job} onStatusChanged={onStatusChanged} />);
      const accept = getByTestId("decline");
      fireEvent.click(accept);
      const confirm = screen.getByTestId("confirm");
      fireEvent.click(confirm);

      // Assert
      expect(updateStatus).toHaveBeenCalledWith({ status: "declined" });
      await waitFor(() => expect(onStatusChanged).toHaveBeenCalled());
    });
    it("should cancel when the user clicks cancel", async () => {
      // Act
      const { getByTestId } = render(<LeadCard job={job} onStatusChanged={onStatusChanged} />);
      const accept = getByTestId("decline");
      fireEvent.click(accept);
      const cancel = screen.getByTestId("cancel");
      fireEvent.click(cancel);
      await waitFor(() => screen.getByTestId("accept"));

      // Assert
      expect(updateStatus).not.toHaveBeenCalled();
      await waitFor(() => expect(onStatusChanged).not.toHaveBeenCalled());
    });
  });
});
