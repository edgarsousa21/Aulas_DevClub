/* 
DESAFIO FUNCTIONS 

Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

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

const yearFunction = (dateYear) =>{
      //console.log('O ano atual é de:',dateYear.getFullYear())
      console.log(`O ano atual é de: ${dateYear.getFullYear()} `)
}

let date = new Date()
yearFunction(date)










