import { renderHook } from "@testing-library/react-hooks";
import useContactById from "./useContactById";
import { rest } from "msw";
import { setupServer } from "msw/node";
import QueryClientProvider from "../components/QueryClientProvider";

const contact = { id: "101", firstName: "Tim", lastName: "Smith" };
const server = setupServer(
  rest.get("/api/contacts/101", (req, res, ctx) => {
    return res(ctx.json(contact));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useContactById", () => {
  it("calls /api/contacts/201", async () => {
    // Arrange
    const wrapper = ({ children }) => <QueryClientProvider>{children}</QueryClientProvider>;

    // Act
    const { result, waitForValueToChange } = renderHook(() => useContactById("101"), { wrapper });
    await waitForValueToChange(() => result.current[1]);

    // Assert
    expect(result.current[0]).toEqual(contact);
  });
});
