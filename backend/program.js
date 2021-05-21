const fsPromises = require("fs").promises; 

// DRY and SOLID

// The distance of the person’s feet to the UFO is six rows, so unless you solve the codeword, you lose on the sixth incorrect guess.
// Every letter that was guessed but does not exist in the codeword is displayed and cannot be guessed again
// Every letter that was guessed that exists in the codeword replaces the dashes for all instances in which they exist in that word
// The game should identify whether a guess was correct or not
// The game should display the current state of abduction by the UFO.

// okay, scaffold your pseudo code, stupid

const getWordsAsString = async () => {
  return await fsPromises.readFile("data/nouns.txt", "utf-8"); 
  // the utf-8 bit is utilizing the encoding option outlined in the docs so it automatically encodes as a string and you can skip the buffer.toString bit 
};

const getCodeWord = async () => {
  let words = (await getWordsAsString()).split("\r\n"); //you made me use regex. not cool
  console.log(words);
  console.log(words.length);

let randomIndex = Math.floor(Math.random() * (words.length + 1));
let codeWord = words[randomIndex];
console.log(codeWord);

};

getCodeWord();
