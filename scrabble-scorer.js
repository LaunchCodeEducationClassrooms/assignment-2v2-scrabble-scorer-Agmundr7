// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
};

const vowelPointStructure = {
    vowels: ['A', 'E', 'I', 'O', 'U'],
    consonants: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
};


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //






let scrabbleScore = function(word) {
  debugger;
    word = word.toLowerCase();
    console.log(word);
    let points = 0;
    newPointStructure = transform(oldPointStructure);
    console.log(newPointStructure);

    for (let i = 0; i < word.length; i++) {
      points += Number(newPointStructure[word[i]]);
    }
    console.log(points);
    return points;
};




function simpleScore(word) {
    let brokenWord = word.toUpperCase().split('');
    let pointTotal = brokenWord.length;
    return pointTotal;
}

function vowelBonusScore(word) {
    let pointTotal = 0;
    for (let w of word.toUpperCase()) {
        if (vowelPointStructure['vowels'].includes(w)) {
            pointTotal += 3;
        } else if (vowelPointStructure['consonants'].includes(w)) {
            pointTotal += 1;
        }

    }
    return pointTotal;
}

function oldScrabbleScorer(word) {

    word = word.toUpperCase();
    let letterPoints = "";

    for (let i = 0; i < word.length; i++) {

        for (const pointValue in oldPointStructure) {

            if (oldPointStructure[pointValue].includes(word[i])) {
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`
            }

        }
    }
    return letterPoints;
}
let algoObject1 = {
  name:'Simple Score',
  description:'Each letter is worth 1 point.',
  scoringFunction:simpleScore
};
let algoObject2 = {
  name:'Bonus Vowels',
  description:'Vowels are 3 pts, consonants are 1 pt.',
  scoringFunction:vowelBonusScore
};
let algoObject3 = {
  name:'Scrabble',
  description:'The traditional scoring algorithm.',
  scoringFunction:scrabbleScore
};

let scoringAlgorithms = [
  algoObject1, algoObject2, algoObject3
]

function printAlgo(algoObject) {
  console.log(algoObject.name);
  console.log(algoObject.description);
  console.log(algoObject.scoringFunction);
}

function initialPrompt() {
    let scrabbleWord = input.question("Let's play some scrabble! Enter a word:");
    return scrabbleWord;
};



function scorerPrompt(word) {
    let selectionInteger = input.question('enter a number to select scorer');
    let score = 0;
    if (selectionInteger == 0) {
        let score = scoringAlgorithms[0].scoringFunction(word);
    } else if (selectionInteger == 1) {
        let score = scoringAlgorithms[1].scoringFunction(word);
    } else if (selectionInteger == 2) {
        let score = scoringAlgorithms[2].scoringFunction(word);
    }
    return score;
    }
  


function transform() {
  let theNewPointStructure = {}
  for (let key in oldPointStructure) {
	let array = oldPointStructure[key]
	for(let i =0; i < array.length; i++) {
	let letter = array[i].toLowerCase();
	theNewPointStructure[letter] = Number(key);
    }
}
return theNewPointStructure;
};
let newPointStructure = transform();
function runProgram() {
  printAlgo(scoringAlgorithms[1]);
  scorerPrompt(initialPrompt());

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};