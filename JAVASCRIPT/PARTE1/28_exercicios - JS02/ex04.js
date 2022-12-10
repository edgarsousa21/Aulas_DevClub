/*DESAFIO 02 JAVA SCRIPT*/

// Faça um programa que receba 3 números inteiros, 
// e deve imprimir, qual é o maior, qual é o menor.

// const n1 = 16
// const n2 = 7
// const n3 = 23

// const maior = Math.max(n1,n2,n3)
// const menor = Math.min(n1,n2,n3)

// console.log(`O número maior é: ${maior}.`)  
// console.log(`O número menor é: ${menor}.`)  

const numbers = [26,7,15,44,23,2,41,15]
const maior = Math.max(...numbers)
const menor = Math.min(...numbers)

console.log(`O número maior é: ${maior}.`)  
console.log(`O número menor é: ${menor}.`) 
