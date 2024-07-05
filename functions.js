function evenNumbers(numbers) {
  const evens = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      evens.push(number);
    }
  }
  return evens;
}

const numbers = [1, 2, 4, 23, 34, 45, 67];
const evens = evenNumbers(numbers);
//console.log(evens);
