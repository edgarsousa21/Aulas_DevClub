/*DESAFIO 01 JAVA SCRIPT

Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. 
João e João, imprime true. João e Maria, imprime false.
*/

const array = ["Edgar","Sandra"]

console.log(array[0] === array[1]) // Edgar e Sandra - false

console.log(array[0] === array[0]) // Edgar e Edgar - true

console.log(array[1] === array[1]) // Sandra e Sandra - true