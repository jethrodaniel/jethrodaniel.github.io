import {describe, it, expect} from "@jest/globals";

// import App from "../src/app";

const sum = (a, b) => a + b;

describe("something", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
