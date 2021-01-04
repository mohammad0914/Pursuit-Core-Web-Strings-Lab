/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 * 
 * example: firstChar("banana") returns "b"
 * example: firstChar("pinapple") returns "p"
 */
function firstChar() {}


/**
 * Returns the length of a string
 * @param {string} - str
 * @returns {number} - length of string
 * 
 * example: stringLength("what") returns 4
 * example: stringLength("sixteen") returns 7
 */
function stringLength() {}


/**
 * Returns the last character of any string
 * @param {string} - an input string
 * @returns {string} - last letter of the input string
 * 
 * example: lastLetter("zappa") returns "a"
 * example: lastLetter("sit on a potato pan otis") returns "s"
 */

function lastLetter() {}

/**
 * Takes a string and returns a copy of the string with the last
 * letter capitalized.
 * @param {string} - an input string
 * @returns {string} - the input string with the last letter capitalized
 * 
 * example: capitalizeLastLetter("jimmy") returns "jimmY"
 * example: capitalizeLastLetter("what is the meaning of life") returns "what is the meaning of lifE"
 */
function capitalizeLastLetter() {}


/**
 *  Create a drEvil function that takes in a number
 * and returns "${number} dollars"
 * if the number is greater than 1 million, add (pinky) at the end
 * 
 * @param {number}
 * @returns {string}
 * example: drEvil(10) returns "10 dollars"
 * example: drEvil(100000000) returns "100000000 dollars (pinky)"
 */
function drEvil() {}

/**
 * 
 * Create a `verbing` function.
 * It should take a single string variable. 
 * If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', 
 * in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. 
 * @param {string}
 * @returns {string}
 * verbing('box') returns 'boxing'
 * verbing('swimming') returns  'swimmingly'
 * verbing('go') returns  'go'
 */
function verbing() {}


/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 * 
 * example: removeLastWord("Hello!") returns ""
 * example: removeLastWord("I eat cake") returns "I eat"
 */
function removeLastWord() {}


/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string}
 * @returns {string}
 * 
 * example: everyOtherLetter("Corey") returns "Cry"
 * example: everyOtherLetter("Skull candy") returns "Sulcny"
 */
function everyOtherLetter() {}


/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 * 
 * example: disemvowel("aeiou") returns ""
 * example: disemvowel("Hello world!") returns "Hll wrld!"
 */
function disemvowel() {}


/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string}
 * @returns {string}
 * 
 * example: disemvowelLongWords("hi i am your friend") returns "hi i am your frnd"
 * example: disemvowelLongWords("amber is the color of your energy") returns "mbr is the clr of your nrgy"
 */
 function disemvowelLongWords(){}


/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 * 
 * example: middleCharacter("hello") returns "l"
 * example: middleCharacter("ostentatious") returns "ta"
 */
function middleCharacter() {}


/**
 * Takes in a string and reverses it.
 * Do not use .split()
 * 
 * example: reverseString("hello") returns "olleh"
 * example: reverseString("sit on a potato pan otis") returns "sito nap otatop a no tis"
 * 
 * @param {string}
 * @returns {string}
 */
function reverseString() {}

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string}
 * @returns {string}
 * 
 * example: reverseSentenceWords("hello world") returns "olleh dlrow"
 * example: reverseSentenceWords("i am a racecar") returns "i ma a racecar"
 */

function reverseSentenceWords() {}

module.exports = {
  firstChar,
  stringLength,
  lastLetter,
  capitalizeLastLetter,
  drEvil,
  verbing,
  removeLastWord,
  everyOtherLetter,
  disemvowel,
  disemvowelLongWords,
  middleCharacter,
  reverseString,
  reverseSentenceWords,
};
