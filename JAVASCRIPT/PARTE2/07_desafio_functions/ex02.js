/* 
DESAFIO FUNCTIONS 


 Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) 
 e escrever a tabuada de 1 a 10 do valor lido.
*/

const tabuada = number =>{
      if(number >= 1 && number <=10){
        for (let i = 1; i <=number; i++ ){
        console.log(`${i} * ${number} =  ${i * number} `)
       }

      }else{
        console.log("Número Inválido")
      }

   
}  
tabuada(10)









