//Escreva uma função recursiva que consiga imprimir todos os elementos de um array

const printArray = (array: number[], index: number = array.length - 1) => {
  if(index >= 0) {
    printArray(array, index -1)
    console.log(`index ${index}: `, array[index]);
    
  }
}

const array1 = [5,6,7,8];
printArray(array1);