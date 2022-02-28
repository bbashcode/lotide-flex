/**
 * letterPosition is a method that returns all the indices (zero-based positions) in the string where each character is found 
 * @param  {string} sentence Provided string parameter
 * @return {object} the return object contains all the indices (zero-based positions) in the string where each character is found 
 */ 
const letterPositions = function findAllIndicesOfAllCharacters(sentence) {
  const results = {};

  for(let i = 0; i < sentence.length; i++){
    if(results[sentence[i]]){
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

//Exporting module
module.exports = letterPositions;