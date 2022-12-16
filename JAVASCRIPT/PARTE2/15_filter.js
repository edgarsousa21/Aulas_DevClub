/*   MAP / REDUCE / FILTER => CAI MUITO EM ENTREVISTAS
    FILTER
     - Cria um novo array, a partir do array percorrido (array original)
     - Cria um novo array, apenas com os elementos filtrados
     - Aceita 3 parâmetros:
        - item do array
        - index
        - array completo 
*/

//========================================================================================================

const list = [
    { name: "Rodolfo", vip: true },
    { name: "Maria", vip: false },
    { name: "João", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false },
];

const justVips = list.filter( client => { 
      return client.vip

})
console.log(justVips)

//========================================================================================================
const students = [
  { name: "Rodolfo", testgrade: 7 },
  { name: "Maria", testgrade: 5 },
  { name: "João", testgrade: 8 },
  { name: "Bruno", testgrade: 9 },
  { name: "Carla", testgrade: 3 },
  { name: "Ana", testgrade: 2 },
  { name: "Julio", testgrade: 10 }
];

  const newStudentList = students.filter( student => {
    return student.testgrade >= 7

  })
console.log(newStudentList)
//=========================================================================================================




//=========================================================================================================




//=========================================================================================================
