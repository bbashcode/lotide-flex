/**
 * assertEqual method is used to compare actual vs expected when testing
 * @param  {any except array} actual The first param
 * @param  {any except array} expected The second param
 * @return {void/undefined}      this method does not return anything, rather the side effect is to console log test pass or fail based on comparison
 */
 const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};


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




// TEST CODE
// console.log(countLetters("lighthouse in the house"));
assertEqual({
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}, countLetters("lighthouse in the house"));