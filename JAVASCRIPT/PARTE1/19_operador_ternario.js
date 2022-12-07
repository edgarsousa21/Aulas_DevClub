/* OPERADOR TERNÁRIO OU CONDICIONAL

? Se
: Se não
*/

const rain = false

const umbrela = rain ? 'Levar guarda-chuva' : 'Deixar guarda-chuva'

console.log(umbrela)

// PRECISO TRANSFERIR MEU DINHEIRO

const balance = true
const isNotBlocked = true
const accountExist = true

const transferOk = (balance && isNotBlocked && accountExist) ? 'TRANSFERÊNCIA REALIZADA' :'TRANSFERÊNCIA NEGADA'

console.log(transferOk)