//Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n

const recursiveSum = (input: number, accumulator: number = 0): number => {
  if(input === 0) {
    return accumulator
  }
  return recursiveSum(input -1 , accumulator + input)
}

console.log(recursiveSum(10));

