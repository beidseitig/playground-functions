function highestCount(numbers) {
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

  console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));