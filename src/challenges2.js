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
console.log(techList([''],'Lucas'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
