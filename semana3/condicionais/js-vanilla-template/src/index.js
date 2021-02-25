/* Exercícios de interpretação de código 

1.
  // O código pede ao usuário digitar um numero e transforma essa resposta em tipo Number e testa se o número informado é par ou impar
  //Para os números pares a mensagem, "Passou no teste", aparece.
  //Para os números ímpares a mensagem, "Não passou no teste", aparece.

2.
  a. O código acima serve para mostrar ao usuário qual valor da fruta que ele escolher.
  b. O preço da fruta Maçã é R$ 2.25
  c. Imprime todos os casos.

3. 
  a. Pedindo informação ao usuário e já transfomando a resposta em um tipo Number
  b. Se digitar 10 aparecerá: Esse número passou no teste. Se -10 não apresentará nada, pois ñão foi definido retonro para valores abaixo de 0.
  c. Sim erro sobre a ultima linha, pois mensagem esta sendo definido dentro do escopo do if que acaba no '}'
*/

/* Exercícios de escrita de código
4.

  const drivingAge = Number(prompt("Quantos anos você tem"))
  console.log(drivingAge)

  if(drivingAge >= 18) {
    console.log('Você pode dirigir.')
  } else {
    console.log('Você não pode dirigir.')
  }

5.

  const shift = prompt('Em qual turno estamos nesse momento? Digite M para Matutino(manhã), V para Vespertino(tarde) ou N para Noturno(noite).')

  console.log(shift)

  if(shift === 'M'){
    console.log('Bom Dia')
  }else if(shift === 'V'){
    console.log('Boa Tarde')
  }else if (shift === 'N'){
    console.log('Boa Noite')
  }else{
    console.log('Por favor, digite um Turno válido!')
  }

6.

  const shift = prompt('Em qual turno estamos nesse momento? Digite M para Matutino(manhã), V para Vespertino(tarde) ou N para Noturno(noite).')

  console.log(shift)

  switch(shift) {
    case 'M':
      console.log('Bom Dia')
      break
    case 'V':
      console.log('Boa Tarde')
      break
    case 'N':
      console.log('Boa Noite')
      break
    default:
      console.log('Por favor, digite um Turno válido!')
  }

7.

  const movieGenre = prompt('Olá, qual o gênero de filme vão assistir?')
  const movieTicketPrice = Number(prompt('Qual o preço do ingresso?'))

  if(movieGenre === 'fantasia' && movieTicketPrice <= 15 ){
    console.log('Bom filme!')
  } else {
    console.log('Escolha outro gênero :(')
  }

*/

/* Desafios 

1.
  const movieGenre = prompt('Olá, qual o gênero de filme vão assistir?')
  const movieTicketPrice = Number(prompt('Qual o preço do ingresso?'))

  if(movieGenre === 'fantasia' && movieTicketPrice <= 15 ){
    const snack = prompt('Qual Lanche você escolherá ?')
    console.log('Bom filme! Com...', snack)
  } else {
    console.log('Escolha outro gênero :(')
  }

2.
  */

  const userName = prompt('Por favor, digite seu nome completo: ')
  const gameType = prompt('Agora informe o tipo de jogo. Digite IN para internacional e DO para doméstico')
  const gameStep = prompt('Informe também a Etapa do jogo. Digite SF para Semi-final, DT para Decisão ou FI para Final')
  const  gameCategory= prompt('Escolha a categoria: Digite 1, 2, 3 ou 4')
  const numberOfTicket = prompt('para finlizar, informe a qauntidade de ingressos que desejar')

  if(gameType === 'DO' && gameStep === 'SF' && gameCategory === '1'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const doSf1 = 1320.00
    console.log('Valor do ingresso: R$', doSf1 )
    console.log('Valor total: R$', doSf1 * numberOfTicket)
  } else if(gameType === 'DO' && gameStep === 'SF' && gameCategory === '2'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const doSf2 = 880.00
    console.log('Valor do ingresso: R$ ', doSf2 )
    console.log('Valor total: R$', doSf2 * numberOfTicket)
  } else if(gameType === 'DO' && gameStep === 'SF' && gameCategory === '3'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const doSf3 = 550.00
    console.log('Valor do ingresso: R$', doSf3 )
    console.log('Valor total: R$', doSf3 * numberOfTicket)
  } else if(gameType === 'DO' && gameStep === 'SF' && gameCategory === '4'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const doSf4 = 220.00
    console.log('Valor do ingresso: R$'+ doSf4 )
    console.log('Valor total: R$'+ doSf4 * numberOfTicket)
  } else if(gameType === 'DO' && gameStep === 'DT' && gameCategory === '1'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const doDt1 = 660.00
    console.log('Valor do ingresso: R$'+ doDt1 )
    console.log('Valor total: R$'+ doDt1 * numberOfTicket)
  } else if(gameType === 'DO' && gameStep === 'DT' && gameCategory === '2'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const doDt2 = 440.00
    console.log('Valor do ingresso: R$'+ doDt2 )
    console.log('Valor total: R$'+ doDt2 * numberOfTicket)
  } else if(gameType === 'DO' && gameStep === 'DT' && gameCategory === '3'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const doDt3 = 330.00
    console.log('Valor do ingresso: R$'+ doDt3 )
    console.log('Valor total: R$'+ doDt3 * numberOfTicket)
  } else if(gameType === 'DO' && gameStep === 'DT' && gameCategory === '4'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const doDt4 = 170.00
    console.log('Valor do ingresso: R$'+ doDt4 )
    console.log('Valor total: R$'+ doDt4 * numberOfTicket)
  }else if(gameType === 'DO' && gameStep === 'FI' && gameCategory === '1'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const doFi1 = 1980.00
    console.log('Valor do ingresso: R$'+ doFi1 )
    console.log('Valor total: R$'+ doFi1 * numberOfTicket)
  }else if(gameType === 'DO' && gameStep === 'FI' && gameCategory === '2'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const doFi2 = 1320.00
    console.log('Valor do ingresso: R$'+ doFi2 )
    console.log('Valor total: R$'+ doFi2 * numberOfTicket)
  }else if(gameType === 'DO' && gameStep === 'FI' && gameCategory === '3'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const doFi3 = 880.00
    console.log('Valor do ingresso: R$'+ doFi3 )
    console.log('Valor total: R$'+ doFi3 * numberOfTicket)
  }else if(gameType === 'DO' && gameStep === 'FI' && gameCategory === '4'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const doFi4 = 330.00
    console.log('Valor do ingresso: R$'+ doFi4 )
    console.log('Valor total: R$'+ doFi4 * numberOfTicket)
  }else if(gameType === 'IN' && gameStep === 'SF' && gameCategory === '1'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const inSf1 = 1320.00 * 4.10
    console.log('Valor do ingresso: R$'+ inSf1 )
    console.log('Valor total: R$'+ inSf1 * numberOfTicket)
  }else if(gameType === 'IN' && gameStep === 'SF' && gameCategory === '2'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const inSf2 = 880.00 * 4.10
    console.log('Valor do ingresso: R$'+ inSf2 )
    console.log('Valor total: R$'+ inSf2 * numberOfTicket)
  }else if(gameType === 'IN' && gameStep === 'SF' && gameCategory === '3'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const inSf3 = 550.00 * 4.10
    console.log('Valor do ingresso: R$'+ inSf3 )
    console.log('Valor total: R$'+ inSf3 * numberOfTicket)
  }else if(gameType === 'IN' && gameStep === 'SF' && gameCategory === '4'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const inSf4 = 220.00 * 4.10
    console.log('Valor do ingresso: R$'+ inSf4 )
    console.log('Valor total: R$'+ inSf4 * numberOfTicket)
  }else if(gameType === 'IN' && gameStep === 'DT' && gameCategory === '1'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const inDt1 = 660.00 * 4.10
    console.log('Valor do ingresso: R$'+ inDt1 )
    console.log('Valor total: R$'+ inDt1 * numberOfTicket)
  }else if(gameType === 'IN' && gameStep === 'DT' && gameCategory === '2'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const inDt2 = 440.00 * 4.10
    console.log('Valor do ingresso: R$'+ inDt2 )
    console.log('Valor total: R$'+ inDt2 * numberOfTicket)
  }else if(gameType === 'IN' && gameStep === 'DT' && gameCategory === '3'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const inDt3 = 330.00 * 4.10
    console.log('Valor do ingresso: R$'+ inDt3 )
    console.log('Valor total: R$'+ inDt3 * numberOfTicket)
  }else if(gameType === 'IN' && gameStep === 'DT' && gameCategory === '4'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const inDt4 = 170.00 * 4.10
    console.log('Valor do ingresso: R$'+ inDt4 )
    console.log('Valor total: R$'+ inDt4 * numberOfTicket)
  }else if(gameType === 'IN' && gameStep === 'FI' && gameCategory === '1'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const inFi1 = 1980.00 * 4.10
    console.log('Valor do ingresso: R$'+ inFi1 )
    console.log('Valor total: R$'+ inFi1 * numberOfTicket)
  }else if(gameType === 'IN' && gameStep === 'FI' && gameCategory === '2'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const inFi2 = 1320.00 * 4.10
    console.log('Valor do ingresso: R$'+ inFi2 )
    console.log('Valor total: R$'+ inFi2 * numberOfTicket)
  }else if(gameType === 'IN' && gameStep === 'FI' && gameCategory === '3'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const inFi3 = 880.00 * 4.10
    console.log('Valor do ingresso: R$'+ inFi3 )
    console.log('Valor total: R$'+ inFi3 * numberOfTicket)
  }else if(gameType === 'IN' && gameStep === 'FI' && gameCategory === '4'){
    console.log('---Dados da compra--- ')
    console.log('Nome do cliente:', userName)
    console.log('Tipo do jogo:',gameType)
    console.log('Etapa do jogo:', gameStep)
    console.log('Categoria:', gameCategory)
    console.log('Quantidade de Ingressos:', numberOfTicket)
    console.log('---Valores--- ')
    const inFi4 = 330.00 * 4.10
    console.log('Valor do ingresso: R$'+ inFi4 )
    console.log('Valor total: R$'+ inFi4 * numberOfTicket)
  }
  else{
    console.log('Algo não foi digitado corretamente')
  }