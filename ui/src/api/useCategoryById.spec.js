import { renderHook } from "@testing-library/react-hooks";
import useCategoryById from "./useCategoryById";
import { rest } from "msw";
import { setupServer } from "msw/node";
import QueryClientProvider from "../components/QueryClientProvider";

const category = { id: "201", name: "Plumbing", parentCategoryId: null };
const server = setupServer(
  rest.get("/api/categories/201", (req, res, ctx) => {
    return res(ctx.json(category));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useCategoryById", () => {
  it("calls /api/categories/201", async () => {
    // Arrange
    const wrapper = ({ children }) => <QueryClientProvider>{children}</QueryClientProvider>;

    // Act
    const { result, waitForValueToChange } = renderHook(() => useCategoryById("201"), { wrapper });
    await waitForValueToChange(() => result.current[1]);

    // Assert
    expect(result.current[0]).toEqual(category);
  });
});
