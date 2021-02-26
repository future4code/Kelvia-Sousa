/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Bem vindo/a ao jogo de Blackjack')

if (window.confirm('Quer iniciar uma nova rodada?')){
  
   const cartaPc1 = comprarCarta()
   const cartaPc2 = comprarCarta()
   const usuario1 = comprarCarta()
   const usuario2 = comprarCarta()
   const usuarioNovaCarta = comprarCarta()
   const usuarioNovaCarta2 = comprarCarta()

   pontuacaoComputador = cartaPc1.valor + cartaPc2.valor


   
   if (window.confirm('Suas cartas são:'+usuario1.texto+ usuario2.texto+'\n'+'A carta revelada do computador é:'+ cartaPc1.texto +'\n'+ 'Deseja compar mais uma carta?')){
      if (window.confirm('Suas cartas são:'+usuario1.texto+ usuario2.texto+usuarioNovaCarta.texto+'\n'+'A carta revelada do computador é:'+ cartaPc1.texto +'\n'+ 'Deseja compar mais uma carta?')) {
         if (window.confirm('Suas cartas são: '+usuario1.texto+ usuario2.texto+usuarioNovaCarta.texto+usuarioNovaCarta2.texto+'\n'+' A carta revelada do computador é: '+ cartaPc1.texto)) {
            pontuacaoUsuario = usuario1.valor + usuario2.valor + usuarioNovaCarta.valor + usuarioNovaCarta2.valor
            console.log('Computador - cartas:', cartaPc1.texto, cartaPc2.texto, ' pontuação:', pontuacaoComputador)
            console.log('Usuário - cartas :', usuario1.texto, usuario2.texto,usuarioNovaCarta.texto, usuarioNovaCarta2.texto, ' pontuação:', pontuacaoUsuario)
         }else{
            pontuacaoUsuario = usuario1.valor + usuario2.valor + usuarioNovaCarta.valor
            console.log('Computador - cartas:', cartaPc1.texto, cartaPc2.texto, ' pontuação:', pontuacaoComputador)
            console.log('Usuário - cartas :', usuario1.texto, usuario2.texto, usuarioNovaCarta.texto, usuarioNovaCarta2.texto,' pontuação:', pontuacaoUsuario)
         }
      }else{
         pontuacaoUsuario = usuario1.valor + usuario2.valor + usuarioNovaCarta.valor
         console.log('Computador - cartas:', cartaPc1.texto, cartaPc2.texto, ' pontuação:', pontuacaoComputador)
         console.log('Usuário - cartas :', usuario1.texto, usuario2.texto, usuarioNovaCarta.texto,' pontuação:', pontuacaoUsuario)
      }
   } else {
      pontuacaoUsuario = usuario1.valor + usuario2.valor  
      console.log('Computador - cartas:', cartaPc1.texto, cartaPc2.texto, ' pontuação:', pontuacaoComputador)
      console.log('Usuário - cartas :', usuario1.texto, usuario2.texto, ' pontuação:', pontuacaoUsuario)
   }
      
      

      if (pontuacaoComputador > pontuacaoUsuario ) {
         console.log('O computador ganhou!')
      }else if (pontuacaoComputador === pontuacaoUsuario) {
         console.log('Empate!')
      }else {
            console.log("O usuário ganhou!")
      }
   

}else {
   console.log('O jogo acabou') 
}