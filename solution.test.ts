import chai, { expect } from "chai";
import possibilities from "./solution";
chai.config.truncateThreshold = 0;

describe("Possibilities", () => {
  it("should work for a simple case", () => {
    const signals = ".";

    const result = possibilities(signals);

    expect(result).to.equal(["E"]);
  });
});
