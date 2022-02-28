/**
 * countLetters is a method used to get the letter count in a given string
 * @param  {string} sentence The given param, is a string
 * @return {object} this object contains the count of each character in the given string
 */
const countLetters = function getMeLetterCountInGivenString(sentence){
  let letterCount = {};
  let splitSentence = sentence.split(" ");

  for(let word of splitSentence){
    for(let character of word){
      if(letterCount[character]){
        letterCount[character] += 1;
      } else {
        letterCount[character] = 1;
      }
    }
  }

  return letterCount;
};

module.exports = countLetters;