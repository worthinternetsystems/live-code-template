import chai, { assert } from "chai";
import possibilities, { MorseTree } from "./solution";
chai.config.truncateThreshold = 0;

describe("MorseTree", () => {
  it("should return the possible characters of a signal of length 1", () => {
    assert.deepEqual(MorseTree.traverse("."), ["E"]);
    assert.deepEqual(MorseTree.traverse("-"), ["T"]);
    assert.deepEqual(MorseTree.traverse("?"), ["E", "T"]);
    assert.deepEqual(MorseTree.traverse(""), [""]);
  });
  
  it("should return the possible characters for a signal length of 2", () => {
    assert.deepEqual(MorseTree.traverse(".."), ["I"]);
    assert.deepEqual(MorseTree.traverse("-."), ["N"]);
    assert.deepEqual(MorseTree.traverse(".-"), ["A"]);
    assert.deepEqual(MorseTree.traverse("--"), ["M"]);
    assert.deepEqual(MorseTree.traverse("??"), ["I", "A", "N", "M"]);
    assert.deepEqual(MorseTree.traverse(".?"), ["I", "A"]);
    assert.deepEqual(MorseTree.traverse("-?"), ["N", "M"]);
    assert.deepEqual(MorseTree.traverse("?."), ["I", "N"]);
    assert.deepEqual(MorseTree.traverse("?-"), ["A", "M"]);
  })
});

describe("Possibilities", () => {
  it("should work on basic cases", () => {
    assert.deepEqual(possibilities("."), ["E"]);
    assert.deepEqual(possibilities(".-"), ["A"]);
  });
  
  it('should work on examples', () => {
    assert.deepEqual(possibilities("."), ["E"]);
    assert.deepEqual(possibilities("-"), ["T"]);
    assert.deepEqual(possibilities("-."), ["N"]);
    assert.deepEqual(possibilities("..."), ["S"]);
    assert.deepEqual(possibilities("..-"), ["U"]);
    assert.deepEqual(possibilities("?"), ["E", "T"]);
    assert.deepEqual(possibilities(".?"), ["I", "A"]);
    assert.deepEqual(possibilities("?-?"), ["R", "W", "G", "O"]);
  })
});
