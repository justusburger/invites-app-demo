import { renderHook } from "@testing-library/react-hooks";
import useJobsSearch, { JOB_STATUS_NEW, JOB_STATUS_ACCEPTED } from "./useJobsSearch";
import { rest } from "msw";
import { setupServer } from "msw/node";
import QueryClientProvider from "../components/QueryClientProvider";

const newJobs = [{ id: "1" }, { id: "3" }, { id: "4" }];
const acceptedJobs = [{ id: "2" }, { id: "5" }, { id: "6" }];
const server = setupServer(
  rest.get("/api/jobs/search", (req, res, ctx) => {
    const query = req.url.searchParams;
    const status = query.get("status");
    if (status === JOB_STATUS_NEW) return res(ctx.json(newJobs));
    if (status === JOB_STATUS_ACCEPTED) return res(ctx.json(acceptedJobs));
    return res(ctx.json([]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useJobsSearch", () => {
  it("calls /api/jobs/search?status=new", async () => {
    // Arrange
    const wrapper = ({ children }) => <QueryClientProvider>{children}</QueryClientProvider>;

    // Act
    const { result, waitForValueToChange } = renderHook(() => useJobsSearch(JOB_STATUS_NEW), { wrapper });
    await waitForValueToChange(() => result.current[0]);

    // Assert
    expect(result.current[0]).toEqual(newJobs);
  });

  it("calls /api/jobs/search?status=accepted", async () => {
    // Arrange
    const wrapper = ({ children }) => <QueryClientProvider>{children}</QueryClientProvider>;

    // Act
    const { result, waitForValueToChange } = renderHook(() => useJobsSearch(JOB_STATUS_ACCEPTED), { wrapper });
    await waitForValueToChange(() => result.current[0]);

    // Assert
    expect(result.current[0]).toEqual(acceptedJobs);
  });
});
