// Receba um número e imprima todos os inteiros de 0 até esse número em ordem crescente.

const printNumbersAscendingOrder = (input: number): void => {
  if (input > 0) {
    printNumbersAscendingOrder(input - 1);
  }
  console.log(input);
};

printNumbersAscendingOrder(10);
