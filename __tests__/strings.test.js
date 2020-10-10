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

describe("capitalizeLastLetter", () => {
    test("returns the string with a captialized last latter", () => {
        expect(capitalizeLastLetter("")).toBe("");
        expect(capitalizeLastLetter("jimmy")).toBe("jimmY");
        expect(capitalizeLastLetter("cat")).toBe("caT");
        expect(capitalizeLastLetter("bird")).toBe("birD");
    })
});

describe(("drEvil"), () => {
    test("adds dollars to amounts less than 1 million", () => {
        expect(drEvil(10)).toBe("10 dollars")
        expect(drEvil(125)).toBe("125 dollars")
    })
    test("adds (pinky) to amounts 1 million or greater", () => {
        expect(drEvil(1_000_000)).toBe("1000000 dollars (pinky)")
        expect(drEvil(1_000_000_000)).toBe("1000000000 dollars (pinky)")
    } )
})

describe("verbing", () => {
    test("words less than three are unchanged", () => {
        expect(verbing("I")).toBe("I")
        expect(verbing("am")).toBe("am")
    })
    test("adds ing to the end of words", () => {
        expect(verbing("box")).toBe("boxing")
        expect(verbing("traing")).toBe("trainging")
    })
    test("adds ly to words that already end in ing", () => {
        expect(verbing("swimming")).toBe("swimmingly")
        expect(verbing("skipping")).toBe("skippingly")
    })
})