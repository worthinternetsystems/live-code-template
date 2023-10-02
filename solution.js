const morseLetters = {
  oneLetter: ["T", "E"],
  twoLetters: ["N", "A", "I", "M"],
  threeLetters: ["D", "G", "K", "O", "R", "S", "U", "W"],
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

const possibilities = (signals) => {
  return morseToLetters[signals];
};
