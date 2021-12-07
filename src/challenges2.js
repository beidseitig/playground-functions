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
//   if (numbers.length !== 11) {
//     return "Array com tamanho incorreto.";
//   }
//   for (let index of numbers) {
//     if(numbers[index] > 9 || numbers[index] < 0) {
//       return "não é possível gerar um número de telefone com esses valores";
//     }
//   }
//   for (let index of numbers) {
//     let number = numbers[index];
//     for (let index2 of numbers) {
//       if(number === )
//     }
}

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
