/*   MAP / REDUCE / FILTER => CAI MUITO EM ENTREVISTAS
    FILTER
     - Cria um novo array, a partir do array percorrido (array original)
     - Cria um novo array, apenas com os elementos filtrados
     - Aceita 3 parâmetros:
        - item do array
        - index
        - array completo 
*/

//========================================================================================================
const list = [20,3,234,12,17,541,6,87,275,1000]; // APENAS OS NÚMEROS PARES E DIVISÍVEIS POR 5

const companies = [ 
  { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 }, 
  { name: 'Microsoft', marketValue: 415, CEO: 'Satya Natella', foundedOn: 1975 }, 
  { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 }, 
  { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 }, 
  { name: 'spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 }, 
  { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 } 
];// FORAM FUNDADAS DEPOIS DE 1975 E QUE TENHA MAIS DE 2.000.000 DE VALOR DE MERCADO

// const newList = list.filter(number => { return number % 2 === 0 && number % 5 === 0; });
// console.log(newList)

// MODO 2 
const newList = list.filter(number => {
      if(number % 2 !==0 || number % 5 !==0) return false 
     return true
 });
console.log(newList)

//========================================================================================================
const listCompanies = companies.filter(companie =>{
      return (companie.foundedOn > 1975 && companie.marketValue > 200)
} )

console.log(listCompanies)



//========================================================================================================




  //========================================================================================================




 //=========================================================================================================
