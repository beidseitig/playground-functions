// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(phrase) {
  let splitPhrase = phrase.split(' ');
  return splitPhrase;
}

// Desafio 4
function concatName(list) {
  let listExtremes = list[list.length -1] + ', ' + list[0];
  return listExtremes;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties*1;
}

// Desafio 6
function highestCount(numbers) {
  let highNumberIndex = 0;
  let highNumber = 0;
  let contHighNumber = 0;

  for (let index of numbers) {
    if (numbers[highNumberIndex] < numbers[index]) {
      highNumber =numbers[index];
    }
    return highNumber;
  }
  
}
console.log(highestCount[9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
