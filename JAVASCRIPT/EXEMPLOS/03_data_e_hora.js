/*
https://www.youtube.com/watch?v=BKYQjBoSNVo&t=2s

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

const dataFunction = (dateCalc) =>{
      console.log(`Hoje é: ${dateCalc.getDate()}/${dateCalc.getMonth()+1}/${dateCalc.getFullYear()} às ${dateCalc.getHours()}:${dateCalc.getMinutes()}:${dateCalc.getSeconds()} `)
}


let data = new Date()
dataFunction(data)
