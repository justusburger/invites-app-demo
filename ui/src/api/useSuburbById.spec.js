import { renderHook } from "@testing-library/react-hooks";
import useSuburbById from "./useSuburbById";
import { rest } from "msw";
import { setupServer } from "msw/node";
import QueryClientProvider from "../components/QueryClientProvider";

const suburb = { id: "301", name: "Sydney", postcode: "2000" };
const server = setupServer(
  rest.get("/api/suburbs/301", (req, res, ctx) => {
    return res(ctx.json(suburb));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useSuburbById", () => {
  it("calls /api/suburbs/301", async () => {
    // Arrange
    const wrapper = ({ children }) => <QueryClientProvider>{children}</QueryClientProvider>;

    // Act
    const { result, waitForValueToChange } = renderHook(() => useSuburbById("301"), { wrapper });
    await waitForValueToChange(() => result.current[1]);

    // Assert
    expect(result.current[0]).toEqual(suburb);
  });
});
