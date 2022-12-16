/*   MAP / REDUCE / FILTER => CAI MUITO EM ENTREVISTAS
    REDUCE    
     - Retorna um valor (pode ser um novo array, um objeto, string, number, etc.).     
     - Aceita 4 parâmetros:
        - acumulador
        - valor atual
        - index
        - array completo 
*/

//========================================================================================================
// REDUCE DESAFIO:

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Natella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];

const sum = companies.reduce((acc, current) => acc + current.marketValue,0)
console.log(`A Soma dos Valores é de: ${sum}`)

//=========================================================================================================
// MODO 2: 

// const newValue = companies.map((companie) => companie.marketValue)

// console.log(newValue)

//  const sum = newValue.reduce((acc, current) =>{
//       return acc + current
//  },0)
// console.log(`A Soma dos Valores é de: ${sum}`)

//=========================================================================================================







// FORMAS DE FAZER:
// const list = [1,2,3,4];

// const sum0 = list.reduce((acc, current) => {
// return acc + current
// },0)
// console.log(sum0)

// // FUNÇÃO SIMILAR:

// const sum1 = list.reduce((acc, current) => acc + current, 0)
// console.log(sum1)

// // OU TAMBÉM:

// const myReduce = ((acc, current) => acc + current)
// const sum2 = list.reduce(myReduce, 0)
// console.log(sum2)
//========================================================================================================

//=========================================================================================================




//=========================================================================================================




//=========================================================================================================
