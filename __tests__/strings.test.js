const { test, expect } = require("@jest/globals");
const { describe } = require("yargs");
const {
  firstChar,
  stringLength,
  lastLetter,
  capitalizeLastLetter,
  drEvil,
  verbing,
  removeLastWord,
  everyOtherLetter,
  disemvowel,
  middleCharacter,
  reverseString,
  reverseSentenceWords,
} = require("../problems/strings");

describe("firstChar", () => {
    test("returns the first character", () => {
        expect(firstChar("")).toBe("");
        expect(firstChar("Corey")).toBe("C");
        expect(firstChar("cat")).toBe("c");
        expect(firstChar("bird")).toBe("b");
    })
});

describe("stringLength", () => {
    test("returns the length of the string", () => {
        expect(stringLength("Corey")).toBe(5);
        expect(stringLength("cat")).toBe(3);
        expect(stringLength("bird")).toBe(4);
        expect(stringLength("")).toBe(0);
    })
});

describe("lastLetter", () => {
    test("returns the last letter of the string", () => {
        expect(lastLetter("Corey")).toBe("y");
        expect(lastLetter("cat")).toBe("t");
        expect(lastLetter("bird")).toBe("d");
        expect(lastLetter("")).toBe("");
    })
});