/*
Fazendo uma calculadora com  / Functions
*/

const calculate = (number1, number2, operation) => {
    
    let result
    switch (operation) {
        case "+":
            result = number1 + number2
            break;
        
        case "-":
            result = number1 - number2
            break;
            
        case "*":
            result = number1 * number2
            break;

        case "/":
            result = number1 / number2
            break;

        default:
            result = number1 + number2
            break;
    }
    return result


}

const valor1 = 14
const valor2 = 7

console.log(`Soma: ${calculate(valor1,valor2,"+")} `)
console.log(`Subtração: ${calculate(valor1,valor2,"-")} `)
console.log(`Multiplicação: ${calculate(valor1,valor2,"*")} `)
console.log(`Divisão: ${calculate(valor1,valor2,"/")} `)

console.log(`Default: ${calculate(valor1,valor2,"a")} `)



