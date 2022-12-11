/*
    ARRAY - vetor - lista
*/
const list = new Array(10) // declara array com 10 posições
const numbers = [10,5,234,345] // ou const numbers new Array(10,5,234,345)
// NOS ARRAYS COMEÇAMOS PEÇA POSIÇÃO ZERO (0).
console.log(numbers[0])

const people = [{
    name: "Edgar Raphael de Sousa",
    age: 41,
    sex: "male",
    height: 1.87,
    address: "Rua Bias Fortes, 350, ap 52."
},

{
    name: "Sandra Rocha Vargas",
    age: 53,
    sex: "female",
    height: 1.70,
    address: "Rua 5, Olimpia"
},
{
    name: "Sueli da Costa Sousa",
    age: 68,
    sex: "female",
    height: 1.72,
    address: "Rua Bias Fortes, 350, ap 52."
},
{
    name: "Sebastiao Pereira de Sousa",
    age: 69,
    sex: "male",
    height: 1.76,
    address: "Rua Bias Fortes, 350, ap 52."
}
]
 console.log(people[1].age)

 console.log(people.length) // tamanho do array

 console.log(list[1])

