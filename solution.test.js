const { assert, config } = require("chai");
config.truncateThreshold = 0;
const possibilities = require("./solution");

const morseLetters = {
  oneLetter: ["E", "T"],
  twoLetters: ["A", "I", "M", "N"],
  threeLetters: ["D", "G", "K", "O", "R", "S", "U", "W"],
};

const lettersToMorse = {
  A: "*-",
  D: "-**",
  E: "*",
  G: "--*",
  I: "**",
  K: "-*-",
  M: "--",
  N: "-*",
  O: "---",
  R: "*-*",
  S: "***",
  T: "-",
  U: "**-",
  W: "*--",
};

const morseToLetters = {
  "*-": "A",
  "-**": "D",
  "*": "E",
  "--*": "G",
  "**": "I",
  "-*-": "K",
  "--": "M",
  "-*": "N",
  "---": "O",
  "*-*": "R",
  "***": "S",
  "-": "T",
  "**-": "U",
  "*--": "W",
};

const morseToLettersKeys = Object.keys(morseToLetters);
const morseToLettersValues = Object.values(morseToLetters);

describe("Possibilities", () => {
  it("should work simple cases", () => {
    assert.deepEqual(possibilities("."), ["E"]);
    assert.deepEqual(possibilities(".-"), ["A"]);
  });
  it.each([
    [morseToLettersKeys[0], [morseToLettersValues[0]]],
    [morseToLettersKeys[1], [morseToLettersValues[1]]],
    [morseToLettersKeys[2], [morseToLettersValues[2]]],
    [morseToLettersKeys[3], [morseToLettersValues[3]]],
    [morseToLettersKeys[4], [morseToLettersValues[4]]],
    [morseToLettersKeys[5], [morseToLettersValues[5]]],
    [morseToLettersKeys[6], [morseToLettersValues[6]]],
    [morseToLettersKeys[7], [morseToLettersValues[7]]],
    [morseToLettersKeys[8], [morseToLettersValues[8]]],
    [morseToLettersKeys[9], [morseToLettersValues[9]]],
    [morseToLettersKeys[10], [morseToLettersValues[10]]],
    [morseToLettersKeys[11], [morseToLettersValues[11]]],
    [morseToLettersKeys[12], [morseToLettersValues[12]]],
    [morseToLettersKeys[13], [morseToLettersValues[13]]],
    ["*?", ["A", "I"]],
    ["?*", ["I", "N"]],
    ["-?", ["M", "N"]],
    ["?-", ["A", "M"]],
    ["?--", ["W", "O"]],
    ["?-*", ["G", "R"]],
    ["?**", ["S", "D"]],
    ["?*-", ["K", "U"]],
    ["-?-", ["K", "O"]],
    ["*?-", ["U", "W"]],
    ["-?*", ["G", "D"]],
    ["*?*", ["R", "S"]],
    ["--?", ["G", "O"]],
    ["-*?", ["N", "K"]],
    ["*-?", ["R", "W"]],
    ["**?", ["U", "S"]],
    ["??-", ["U", "W", "O", "K"]],
    ["??*", ["D", "G", "R", "S"]],
    ["?-?", ["G", "O", "R", "W"]],
    ["?*?", ["U", "S", "K", "D"]],
    ["-??", ["D", "G", "K", "O"]],
    ["*??", ["R", "S", "U", "W"]],
  ])("", (input, possibilities) => {
    // tried to test.each from jest but its chai, not sure how to here so syntax error, sorry!
    const possOutput = possibilities(input);
    possOutput.sort();
    possibilities.sort();
    assert.deepEqual(possOutput, possibilities);
  });
});
