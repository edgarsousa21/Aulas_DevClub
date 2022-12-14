/*
MAP DESAFIO
 - Cria um novo array, a partir do array percorrido (array original)
     - Cria um novo array, com a mesma quantidade de itens do array original 
     - Aceita 3 parâmetros:
        - item do array
        - index
        - array completo 
*/

//===========================================================================================================
// const list = [
//     { name: "Rodolfo", vip: true },
//     { name: "Maria", vip: false },
//     { name: "João", vip: true },
//     { name: "Bruno", vip: true },
//     { name: "Carla", vip: false },
//     { name: "Ana", vip: true },
//     { name: "Julio", vip: false },
// ];


// const newList = list.map( client => {    
//          const newList = {
//             name: client.name,
//             vip: client.vip,
//             sector: client.vip ? 'Black' : 'Green'
//         }

//     return newList
// })
// console.log(list)
// console.log(newList)




//===========================================================================================================

const students = [
    { name: "Rodolfo", testgrade: 7 },
    { name: "Maria", testgrade: 5 },
    { name: "João", testgrade: 8 },
    { name: "Bruno", testgrade: 9 },
    { name: "Carla", testgrade: 3 },
    { name: "Ana", testgrade: 2 },
    { name: "Julio", testgrade: 10 }
];

const approvedStudents = students.map(student => {
    let approvedOrNot

    if (student.testgrade >= 7) {
        approvedOrNot = 'approved'
    } else {
        approvedOrNot = 'disapproved'
    }

    const students = {
        name: student.name,
        finalResult: approvedOrNot
    }
    return students

})

console.log(approvedStudents)






//===========================================================================================================




