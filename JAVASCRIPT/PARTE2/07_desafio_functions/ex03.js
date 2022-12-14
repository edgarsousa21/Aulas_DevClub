/* 
DESAFIO FUNCTIONS 

Escreva um programa onde, você chame uma função, e ela diga a hora exata!

Para pegar data e hora utilizamos:
const date = new Date().toLocaleString();

Se você quer apenas a data, utilize:
const date = new Date().toLocaleDateString();

E se você quer apenas o horário, o código é:
const date = new Date().toLocaleTimeString();

let data  = new date() - data completa
console.log(data)

data.getDate() - retorna dia do mês da minha data.
data.getDay() - Dia da semana, iniciando 0 - domingo ao 6 - sabado.
data.getMonth() - Contagem dos meses - janeiro = 0 ao dezembro = 11.
data.getFullYear() - Retorna o ano em quatro dígitos.
data.getHours() - Retorna a hora no fuso horário que me encontro.
data.getMinutes() - Retorna os minutos.
data.getSeconds() - Retorna os segundos.
data.getMilliseconds() - Retorna os milisegundos.
data.getTime() = Mostra a quantidade de milisegundos do 01/01/1970 até a data atual.

*/


//  const dateFunction = (dateVar) => {       
   
//    //  console.log(dateVar.getHours(),':',dateVar.getMinutes(),':',dateVar.getSeconds())
//       //console.log(`A Hora Exata é de: ${dateVar.getHours()}:${dateVar.getMinutes()}:${dateVar.getSeconds()}`)
//       console.log(`A Hora Exata é de: ${dateVar.getHours()}:${dateVar.getMinutes()}:${dateVar.getSeconds()}`)
     
//     }

// let date = new Date()
// dateFunction(date)


//CORREÇÃO:

console.log(new Date().toLocaleTimeString('pt-br'))









