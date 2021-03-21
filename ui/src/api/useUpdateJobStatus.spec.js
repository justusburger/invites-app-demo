import { renderHook, act } from "@testing-library/react-hooks";
import useUpdateJobStatus from "./useUpdateJobStatus";
import { rest } from "msw";
import { setupServer } from "msw/node";
import QueryClientProvider from "../components/QueryClientProvider";

const job = { id: "301", status: "accepted" };
const server = setupServer(
  rest.put("/api/jobs/301", (req, res, ctx) => {
    if (req.body.status === "accepted") return res(ctx.json(job));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useUpdateJobStatus", () => {
  it("calls PUT /api/jobs/301", async () => {
    // Arrange
    const wrapper = ({ children }) => <QueryClientProvider>{children}</QueryClientProvider>;

    // Act
    const { result, waitForValueToChange } = renderHook(() => useUpdateJobStatus("301"), { wrapper });
    act(() => {
      result.current[0]({ status: "accepted" });
    });
    await waitForValueToChange(() => result.current[2]);

    // Assert
    expect(result.current[2]).toEqual(true);
  });
});
