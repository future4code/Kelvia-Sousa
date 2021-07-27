// Transforme a função desenvolvida no Exercício 2 em iterativa (ou seja, não use recursividade).

const interactiveSum = (input: number): number => {
  let sum = 0
  for(let i = 0; i <= input; i++) {
    sum += i
  }
  return sum
}

console.log(interactiveSum(10));