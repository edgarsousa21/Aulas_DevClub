/*DESAFIO 01 JAVA SCRIPT

Faça um programa onde toda vez que ele rodar, 
coloca na tela um número aleatório entre 1 e 100
*/
const max = 100
const min = 1
const aleatory = Math.floor(Math.random() * (max - min) + min)

console.log(aleatory)