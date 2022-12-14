/*   MAP / REDUCE / FILTER => CAI MUITO EM ENTREVISTAS
    MAP
     - Cria um novo array, a partir do array percorrido (array original)
     - Cria um novo array, com a mesma quantidade de itens do array original 
     - Aceita 3 parâmetros:
        - item do array
        - index
        - array completo 
*/

//========================================================================================================

const numbers = [1,2,3,4]
const students = [
    {name: "Rodolfo", age: 25 },
    {name: "Maria", age: 43 },
    {name: "João", age: 21 },
    {name: "Bruno", age: 43 },
    {name: "Carla", age: 13 },
    {name: "Ana", age: 20 },
    {name: "Julio", age: 26 },
  
  ];

 //========================================================================================================


//   const newArray = numbers.map((number) =>{
//     return number * 10
//   })
//   console.log(numbers)  
//   console.log(newArray)

  //========================================================================================================
// AGORA COM ARRAY DE STUDENTS
// const newStudents = students.map((student) =>{
//     const newStudent = {
//         name: student.name + 'da Silva',
//         age: student.age - 5
//     }
//     return newStudent
//   })
//   console.log(students)
//   console.log(newStudents)



 //=========================================================================================================
// ARRAY PT.2

// const newArray0 = numbers.map( function(number) {
//       return number * 10
//     })
  
//     const newArray1 = numbers.map((number) =>{
//       return number * 10
//     })
//     const newArray2 = numbers.map(number => number * 10)

const double  = number => number * 20
const toReals  = number => `R$ ${number.toFixed(2)}`

const newArray2 = numbers.map(double).map(toReals)

console.log(newArray2)   
    
  
