import { login } from "./login.js";
import { save } from "../../storage/index.js";

jest.mock("../../storage/index.js", () => ({
  save: jest.fn(),
  load: jest.fn().mockReturnValue("mock_token"),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: "mock_token" }),
    statusText: "OK",
  }),
);

describe("login", () => {
  beforeEach(() => {
    fetch.mockClear();
    save.mockClear();
  });

  it("stores a token when provided with valid credentials", async () => {
    const email = "test@example.com";
    const password = "password123";

    await login(email, password);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("/social/auth/login"),
      {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: expect.anything(),
      },
    );

    expect(save).toHaveBeenCalledTimes(2);
    expect(save).toHaveBeenNthCalledWith(1, "token", "mock_token");
  });
});
