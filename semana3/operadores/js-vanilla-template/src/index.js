/*Exercícios de interpretação de código
1.
  a. false
  b. false
  c. false
  e. boolean

2. 
a. undefined
b. null
c. 11
d. ?
e. ?
f. array[i+6]

*/

/*  Exercícios de escrita de código 

1.

const age = prompt('Qual sua idade')
console.log(age)
const friendAge = prompt('Qual a idade do/a melhor amigo/a?')
console.log(friendAge)

console.log(typeof Number(age))
console.log(typeof Number (friendAge))

const question = age > friendAge
console.log('Sua idade é maior do que seu aigo?', question)

const dif = age - friendAge
console.log(dif)

2.

const numeroPar= prompt('Digite um número par')
console.log(numeroPar)
console.log(typeof Number(numeroPar))
const resto = numeroPar % 2
console.log(resto)
// Todo número par dividido por 2 resta 0. Pois terão como resultado um número inteiro
// todo número ímpar dividido por 2 resta 1. 

3. 

let listaDeTarefas = []
console.log(listaDeTarefas)
const yourTasks = prompt('O que você precisa fazer hoje?')
listaDeTarefas.push(yourTasks)
const yourTasks2 = prompt('O que você precisa fazer hoje?')
listaDeTarefas.push(yourTasks2)
const yourTasks3 = prompt('O que você precisa fazer hoje?')
listaDeTarefas.push(yourTasks3)
console.log(listaDeTarefas)

const done = prompt('Quais das tarefas você já realizou? (Digite 0, 1 ou 2)')
listaDeTarefas.splice(done,1)
console.log(listaDeTarefas)

4. 

const name = prompt('Qual seu nome?')
const email = prompt('Qual o seu e-mail?')

const message = 'O e-mail '+ email +' foi cadastrado com sucesso. Seja bem-vinda(o), ' + name + '!'
console.log(message)

*/

/* DESAFIOS
Escrita de código!  
1 

a.
const F = 77
const k = (F - 32) *5/9 + 273.15
console.log('77ºF em Kelvin é: ', k,'K')

b.
const C = 80
const F = (C) * 9/5 + 32
console.log('80ºC em Graus Fahrenheit é: ', F, 'ºF')

c.
const C = 30
const F = (C) * 9/5 + 32
const K = C + 273.15
console.log('30ºC em Graus Fahrenheit é: ', F, 'ºF. E em Kelvin é: ', K,'K')

d.
const C = prompt('Digite um valor em ºC para converter em ºF e K')
console.log(C)
const F = (C) * 9/5 + 32
const K = C + 273.15
console.log(C+' em Graus Fahrenheit é: '+ F+ 'ºF. E em Kelvin é: '+ K+30 + 'K')

2.
const consumoEnergia = prompt('Quantos quilowatts foram gastos esse mês em sua residencia?')
console.log(consumoEnergia)

a. 
const consumo = 280
const valorQuilowatt = 0.05
const conta = consumo * valorQuilowatt
console.log('O valor da conta de energia de uma residencia que gasta 280Qh é: R$', conta)

b.
let consumo = 280
let valorQuilowatt = 0.05
let percentagem = 15/100
let conta = consumo * valorQuilowatt - percentagem
console.log('O valor da conta de energia de uma residencia que gasta 280Qh e recebe um desconto de 15% é: R$ ', conta)

3.

a.
const libra = 20
const conversao = libra / 2.2046
console.log('20lb equivalem a', conversao, 'Kg')

b.
const oz = 10.5
const conver = oz * 0.02835
console.log('10.5oz equivalem a', conver+'Kg')

c.
const mi = 100
const conver = mi * 1609
console.log('100mi equivale a ', conver+'m')


d.
const pes = 50
const conver = pes * 0.3048
console.log('50ft equivalem a', conver+'m')

e.
const gal = 103.56
const conver = gal * 3.785
console.log('103.5gal equivalem a', conver,'l')

f.
const xic = 450
const conver = (xic * 6) / 25  
console.log('450xic equivalem a ', conver,'l')

g.
const xic = prompt ('digite uma quantidade de xícara para converter em litros')

const conver = (xic * 6) / 25  
console.log( xic+'xic equivalem a '+ conver+'l')
*/ 









