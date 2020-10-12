const { test, expect, describe } = require("@jest/globals");
const {
  replaceVowels,
  makeStringEvenLength,
  lastThreeLetters,
  doesStartWithVowel,
  combineStrings,
  mashUp,
  includesVowel,
  vowelCount,
} = require("./bonus.js");

describe("replaceVowels", () => {
  test("replaces all the vowels with an asterisk", () => {
    expect(replaceVowels("aeiou")).toBe("*****");
    expect(replaceVowels("AEIOU")).toBe("*****");
    expect(replaceVowels("Hello World")).toBe("H*ll* W*rld");
  });
});

describe("makeStringEvenLength", () => {
  test("leaves even length strings alone", () => {
    expect(makeStringEvenLength("cats")).toBe("cats");
    expect(makeStringEvenLength("")).toBe("");
  });
  test("adds # to odd length strings", () => {
    expect(makeStringEvenLength("cat")).toBe("cat#");
    expect(makeStringEvenLength("I")).toBe("I#");
  });
});

describe("lastThreeLetters", () => {
  test("returns the last three letters when able", () => {
    expect(lastThreeLetters("cat")).toBe("cat");
    expect(lastThreeLetters("Hello World")).toBe("rld");
  });
  test("throws error when input is less than three characters", () => {
    expect(() => {
      lastThreeLetters("hi");
    }).toThrow("Input less than three characters");
    expect(() => {
      lastThreeLetters("I");
    }).toThrow("Input less than three characters");
  });
});

describe("doesStartWithVowel", () => {
  test("returns true for words that start with a vowel", () => {
    expect(doesStartWithVowel("apple")).toBe(true);
    expect(doesStartWithVowel("emu")).toBe(true);
    expect(doesStartWithVowel("iguana")).toBe(true);
    expect(doesStartWithVowel("oyster")).toBe(true);
    expect(doesStartWithVowel("urchin")).toBe(true);
  });

  test("returns false for non vowel words", () => {
    expect(doesStartWithVowel("cat")).toBe(false);
    expect(doesStartWithVowel("dog")).toBe(false);
    expect(doesStartWithVowel("hippo")).toBe(false);
    expect(doesStartWithVowel("whale")).toBe(false);
  });
});

describe("combineStrings", () => {
  test("combines two strings", () => {
    expect(combineStrings("hello", "word")).toBe("hello world");
    expect(combineStrings("taco", "cat")).toBe("taco cat");
  });
});

describe("mashUp", () => {
  test("adds second word to middle of first", () => {
    expect(mashUp("help", "me")).toBe("hemelp");
    expect(mashUp("taco", "cat")).toBe("tacatco");
  });
  test("works with odd length first words", () => {
    expect(mashUp("hello", "world")).toBe("helwordlo");
    expect(mashUp("eat", "cat")).toBe("eacatt");
  });
});

describe("includesVowel", () => {
  test("correctly determines if string contains a vowel", () => {
    expect(includesVowel("cats")).toBe(true);
    expect(includesVowel("cry")).toBe(false);
    expect(includesVowel("rock and roll")).toBe(true);
  });
  test("does not use the || operator", () => {
    const funcString = includesVowel.toString();
    expect(funcString.includes("||")).toBe(false);
  });
});

describe("vowelCount", () => {
  test("returns the number of vowels include", () => {
    expect(vowelCount("cat")).toBe(1);
    expect(vowelCount("cry")).toBe(0);
    expect(vowelCount("aeiou")).toBe(5);
    expect(vowelCount("DREAMER")).toBe(3);
  });
});
