// Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente

const printNumbersDescendingOrder = (input: number): void => {
  if (input === 0) return;
  console.log(input);
  printNumbersDescendingOrder(input - 1);
};

printNumbersDescendingOrder(4);
