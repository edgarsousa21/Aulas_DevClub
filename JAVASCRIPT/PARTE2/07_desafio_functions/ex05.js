/* 
DESAFIO FUNCTIONS 

Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, 
e a função responde qual número é maior

*/

const numbers = (number1, number2) =>{
      if(number1 > number2){
        console.log(`O número ${number1} é o maior`)
      } else if(number2 > number1){
        console.log(`O número ${number2} é o maior`)
      }else{
        console.log(`Ambos os números são iguais`)
      }

}
 

const num1 = 30
const num2 = 50

numbers(num1,num2)










