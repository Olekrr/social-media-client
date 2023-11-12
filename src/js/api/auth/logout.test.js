import { logout } from "./logout.js";
import { remove } from "../../storage/index.js";

jest.mock("../../storage/index.js", () => ({
  remove: jest.fn(),
}));

describe("logout", () => {
  beforeEach(() => {
    remove.mockClear();
  });

  it("should clear the token and profile from storage", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
  });
});
