/*
FOR EACH
*/



//=======================================================================================================================
const students = [
  {name: "Rodolfo", age: 25 },
  {name: "Maria", age: 43 },
  {name: "João", age: 21 },
  {name: "Bruno", age: 43 },
  {name: "Carla", age: 13 },
  {name: "Ana", age: 20 },
  {name: "Julio", age: 26 },

];

// students.forEach((student, index, array) => {
//     console.log(array)
// })

//========================================================================================================================

// CALCULAR A IDADE MÉDIA DOS ALUNOS:
// let allStudentsAge = 0
// students.forEach((student, index) => {
//     allStudentsAge += student.age
// })

// const averageAge = allStudentsAge / students.length

// console.log(`A Média dos alunos é de: ${averageAge.toFixed(0)} `) // toFixed(0) Limita casas decimais

//========================================================================================================================


// let allStudentsAge = 0
// students.forEach((student, index) => {
//    console.log(`O aluno chama-se: ${student.name}, tem ${student.age} anos e está na posição ${index} do array.`)
// })

//========================================================================================================================
// SEM ARROW FUNCTION:

let allStudentsAge = 0
students.forEach(function(student, index) {
   console.log(`O aluno chama-se: ${student.name}, tem ${student.age} anos e está na posição ${index} do array.`)
})