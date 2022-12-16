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

const list = [20,3,234,12,17,541,6,87,275,1000]


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Natella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];
// ADICIONAR 10% DO VALOR DE DADA EMPRESA, SELECIONAR AS FUNDADAS ANTES DO ANO 2000 E SOMAR OS VALORES 
// DA ENPRESA




// const newValue = companies.map(companie => companie.marketValue += companie.marketValue / 10)
// console.log(newValue)

// const valueYear = companies.filter(companie => companie.foundedOn < 2000 )
// console.log(valueYear)

// const sum = valueYear.reduce((acc, current) => acc + current.marketValue,0)
// console.log(`A Soma dos Valores das Empresas é de: ${sum}`)

//=========================================================================================================
//MODO DO RODOLFO:
const add10PercentMarketValue = company => {
    company.marketValue += company.marketValue / 10
    return company
}

const oldCompanies = company => company.foundedOn < 2000

const allOldCompaniesMarketValue = (acc, company) => acc + company.marketValue

const myBestCompanies = companies
      .map(add10PercentMarketValue)
      .filter(oldCompanies)
      .reduce(allOldCompaniesMarketValue,0)

console.log(myBestCompanies)





//=========================================================================================================





