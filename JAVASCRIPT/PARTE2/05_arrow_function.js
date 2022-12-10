/*
Arrow / Functions
*/

// const sum = function (number1, number2){
   
//     const result =  number1 + number2
//     return result

// }

//sum = (number1, number2) => number1 + number2 // RETORNA AUTOMATICAMENTE //NÃO PRECISA USAR RETURN
                                              // => SETA DO ARROW


sum = (number1, number2) => { // COM AS CHAVES, PRECISA DO RETURN
    return number1 + number2
}

const firstNumber = 10
const seccondNumber = 20

console.log(`O primeiro número é: ${firstNumber}`)
console.log(`O segundo número é: ${seccondNumber}`)

const result = sum(firstNumber, seccondNumber)

console.log(`E a soma dos dois é: ${result}`)