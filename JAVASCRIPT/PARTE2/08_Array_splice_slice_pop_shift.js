/*
ARRAY MÉTODOS

*/

const students = ['João', 'Maria', 'Pedro', 'Carla', 'Bia', 'Maurício']

// push - Adiciona valor no Array
// length - tamanho do Array
// sort - Organiza em Ordem Alfabética
// delete - deleta valor

// splice (unir / ligar)
// slice fatiar
// pop  - tira o último item do array
// shift - tira o primeiro item do array

// students.splice(1,3) // tira a posição 1 e até a terceira posição
//students.splice(1,1,'Edgar') // tirou 'maria' que é a posição 1 e acrescentou o 'Edgar'

const newStudents = students.slice(2,5) // [ 'Pedro', 'Carla', 'Bia' ]

console.log(newStudents)