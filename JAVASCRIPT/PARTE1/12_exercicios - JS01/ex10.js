/*DESAFIO 01 JAVA SCRIPT

Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
Porém, os dois nomes devem estar em dois objetos separados. 
Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. 
João e João, imprime true. João e Maria, imprime false.
Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
Porém, os dois nomes devem estar em um objeto.
 Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true.
João e Maria, imprime false.
*/
const object01 = {name:"Edgar"}
const object02 = {name: "Sandra"}

console.log(object01.name == object02.name)

const space = `


`
console.log(space)
//___________________________________________________________________________________
const object1 = {
    firstName: "Edgar",
    secondName: "Sandra"    
}

object1.firstName == object1.secondName

console.log(object1.firstName == object1.secondName)