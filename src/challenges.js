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
  // let contHighNumber = 0;
  //   let highNumber = Math.max(...numbers);

  //   for (let index2 in numbers) {
  //       if(highNumber === numbers[index2]) {
  //           contHighNumber += 1;
  //       }
  //   }
  //   return contHighNumber;
  // }
  let highNumberIndex = 0;
  let highNumber = numbers[highNumberIndex];
  let contHighNumber = 0;

  for (let index in numbers) {
    if (numbers[highNumberIndex] < numbers[index]) {
      highNumberIndex = index;
    }
  }

  for (let index2 in numbers) {
      if(numbers[highNumberIndex] === numbers[index2]) {
          contHighNumber += 1;
      }
  }
  return contHighNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzzArray = [];
  for (let index in numbers) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
      fizzBuzzArray.push("fizz");
    } else if (numbers[index] % 5 === 0 && numbers[index] % 3 !== 0) {
      fizzBuzzArray.push("buzz");
    } else if (numbers[index] % 5 === 0 && numbers[index] % 3 === 0) {
      fizzBuzzArray.push("fizzBuzz");
    } else {
      fizzBuzzArray.push("bug!");
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(phrase) {
  let newPhrase = phrase.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);
  return newPhrase;
}

function decode(phrase) {
  let newPhrase = phrase.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  return newPhrase;
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
