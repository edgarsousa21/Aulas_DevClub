/*
ESTRUTURAS DE REPETIÇÃO - FOR IN
*/

const student = {
    name: 'caio',
    age: 26,
    genre: 'male'
}

console.log(student.name)  //ambos são iguais
console.log(student["name"])  //ambos são iguais

for(let property in student){
    console.log(`${property}:${student[property]}`)
}