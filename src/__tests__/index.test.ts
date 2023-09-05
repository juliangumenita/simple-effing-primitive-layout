import { describe, expect, it } from "vitest";

describe("is this the real life?", () => {
  describe("or is this just fantasy?", () => {
    const first = 1;
    const second = 1;

    it("is 1 equals 1?", () => {
      expect(first).toEqual(second);
    });
  });
});
