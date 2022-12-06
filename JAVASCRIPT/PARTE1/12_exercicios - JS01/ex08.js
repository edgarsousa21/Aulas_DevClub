/*DESAFIO 01 JAVA SCRIPT

Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. 
Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. 
João e João, imprime false. João e Maria, imprime true.
*/
const array = ["Edgar","Sandra"]

                   //!= -> diferente
console.log(array[0] !== array[1])// Edgar é diferente de Sandra. Essa afirmação é verdadeira.

console.log(array[0] !== array[0]) // Edgar diferente de Edgar, afirmação falsa.

console.log(array[1] !== array[1]) // Sandra diferente de Sandra, afirmação falsa.


