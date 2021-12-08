// Desafio 10
function techList(tech, name) {
  tech = tech.sort();
  let sortedTechList = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index in tech) {
    sortedTechList.push({ tech: tech[index], name: name})
  }
  return sortedTechList;
  
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Só consegui resolver graças ao código de Allan Carvalho da Turma 19 - Tribo C, não sabia como dava o push em object na linha 9, e depois de olhar o código dele eu consegui entender o método.

// Desafio 11
function generatePhoneNumber(numbers) {

  let sameNumber;
  if (numbers.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] > 9 || numbers[i] < 0) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    sameNumber = 0;
    for (let j = 0; j < numbers.length; j += 1) {
      if(numbers[i] === numbers[j]) {
          sameNumber += 1;
      }
      console.log(sameNumber);
      if (sameNumber >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }

    }
    
  }
  let newPhoneNumber = "(" + numbers[0] + numbers[1] + ")" + " " + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + "-" + numbers[7] + numbers[8] + numbers[9] + numbers[10];

  return newPhoneNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
