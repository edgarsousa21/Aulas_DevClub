/*DESAFIO 02 JAVA SCRIPT*/

//Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
//Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
//Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

const number = 4
const max = 10
const min = 1
const aleatory = Math.floor(Math.random() * (max - min) + min)


if(number === aleatory){
   console.log('Parabéns, vc é o ganhador de "1 Milhão de Reais"')
   console.log(`Número apostado: ${number}, número sorteado: ${aleatory}`) 
} else{
   console.log('Você não foi sorteado, tente outra vez.')
   console.log(`Número apostado: ${number}, número sorteado: ${aleatory}.`) 
} 

