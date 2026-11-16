import { hello } from "./hello_world";

describe("test hello", () => {
  it("should return hello world", () => {
    expect(hello()).toBe("Hello world!");
  });

  it("should return the WebAcademy greeting", () => {
    expect(hello("WebAcademy")).toBe("Hi WebAcademy!");
  });
});

