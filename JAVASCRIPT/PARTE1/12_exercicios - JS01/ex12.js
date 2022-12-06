/*DESAFIO 01 JAVA SCRIPT

Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão. 
Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.
Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é maior que o segundo. 
Ex: 2 e 5. Imprime: false.Faça um programa onde entramos com dois números, 
e ele imprime se o primeiro número é menor que o segundo. Ex: 2 e 5. Imprime: true.
*/

const number1 = 7
const number2 = 3
const res = number1 % number2

//const result  = number1 - Math.floor(number1/number2) * number2

//console.log(result)

console.log(res) 

const number3 = 2
const number4 = 5

console.log(number3 > number4)
console.log(number3 < number4)