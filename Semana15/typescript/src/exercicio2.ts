//a) Entrada  e Saída 

function obterEstatisticas(numeros: number): Function{
  const numerosOrdenados: number = numeros.sort((a: number, b: number) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  type  tamanho = {
    maior: number,
    menor: number,
    media: number
  } 

  const estatisticas: tamanho = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

type amostra = {
  numeros: number[],
  obterEstatisticas: (numero: number[]) => object
}

const amostraDeIdade: amostra = {

  numeros: [21, 18, 65, 44, 15, 18],
  obterEstatisticas: (numeros) => {...}
}

console.log(obterEstatisticas(amostraDeIdade.numeros))
