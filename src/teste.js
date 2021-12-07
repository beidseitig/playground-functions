function generatePhoneNumber(numbers) {
    let sameNumber = 0;
    if (numbers.length !== 11) {
      return "Array com tamanho incorreto.";
    }
    for (let index of numbers) {
      if(numbers[index] > 9 || numbers[index] < 0) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
    
    for (let index of numbers) {
      let number = numbers[index];
      for (let index2 of numbers) {
        if(number === numbers[index2]) {
            sameNumber += 1
        }
        if (sameNumber >= 3) {
            return "não é possível gerar um número de telefone com esses valores";
        }
      }
    }
}