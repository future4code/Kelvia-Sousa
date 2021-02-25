/* Exercícios de interpretação de código

1
O resultado será 10, pois ele irá somar  i com valor, ambas começam do 0 e a soma se repetirá até somar com o 4, pois está determinando somar até  menor que 5(i<5)
0+0 =0
0+1 =1
1+2 =3
3+3 =6
6+4 = 10

2.
a. Será impresso os múmeros maiores que 18 da lista ou seja: [19, 21, 23, 25, 27, 30]
b. Não consegui saber como seria com for... of... 
}

Desafio interpretação


*/

/* Exercícios de escrita de código
3.

a.
const arrayOriginal = [10, 2, 30, 42, 57, 68, 79, 54, 98]

for (let index = 0; index < arrayOriginal.length; index++) {
  console.log(arrayOriginal[index])
}

b.
const arrayOriginal = [10, 2, 30, 42, 57, 68, 79, 54, 98]

for (let index = 0; index < arrayOriginal.length; index++) {
  console.log(arrayOriginal[index]/10)
}

c.
let arrayOriginal = [10, 2, 30, 42, 57, 68, 79, 54, 98]
pares =[]

for(numeros of arrayOriginal) {
  if(numeros%2===0){
    pares.push(numeros)
  }
}
console.log(pares)

d.
let arrayOriginal = [10, 2, 30, 42, 57, 68, 79, 54, 98]
for (let index = 0; index < arrayOriginal.length; index++) {
  console.log("O elemento do índex", index, "é:", arrayOriginal[index])
}

e
let arrayOriginal = [10, 2, 30, 42, 57, 68, 79, 54, 98]
let maiorNumero = 0
let menorNumero = arrayOriginal[0]

for (let numero of arrayOriginal){
  if(numero > maiorNumero){
    maiorNumero = numero
  } else if (numero < menorNumero){
    menorNumero = numero
  }
}

console.log('O maior número é', maiorNumero ,' e o menor é', menorNumero)
*/

/* Desafio 1

const jogador1 = prompt('Escolha um número')
console.log('Vamos jogar!')

let jogador2 = 0
let tentativa = 1

while (jogador1 !== jogador2) {
  jogador2 = Number(prompt('Descubra o número digitador pelo jogador1'))
  console.log('O número chutado foi:', jogador2)

  if(jogador2 > jogador1){
    console.log('Errrrrrrrou, é maior')
  }else if (jogador2 < jogador1){
    console.log('Errrrrrrrou, é menor')
  }else {
    console.log('Acertou!!')
    break
  }
  
  tentativa++
  
}
console.log('o numero de tentativas foi:', tentativa)

Desafio 2 */



