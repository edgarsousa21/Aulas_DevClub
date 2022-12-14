/* 
DESAFIO FUNCTIONS 

A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o 
salário e número de filhos. A prefeitura deseja saber: - média do salário da população; - média do 
número de filhos; - maior salário; - O final da leitura de dados se dará com a entrada de um 
salário negativo. - Faça isso usando uma função!

*/
const mediaSalChildren = (people, quant) => {
  
  let contSalary = 0
  let contChildren = 0
  let sal = new Array(quant - 1)  
 
  for (let i = 0; i < quant; i = i + 1) {       
    sal[i] = people[i].salary
    contSalary = contSalary + people[i].salary
    contChildren = contChildren + people[i].children
  }//for


  let mediaSalary = contSalary / quant
  let mediaChildren = contChildren / quant
  let salMax = Math.max(...sal)



  console.log(`A média dos salários é de: ${mediaSalary}, e a média dos filhos é de: ${Math.ceil(mediaChildren)}
        e o salário maior é de ${salMax} `)
  

  
}
//console.log('Salário Inválido')


//console.log(Math.ceil(mediaChildren)) 



const habitante = [
  {
    name: "João",
    salary: 1200,
    children: 3
  },

  {
    name: "maria",
    salary: 1100,
    children: 2
  },

  {
    name: "Manoel",
    salary: 2000,
    children: 4
  },

  {
    name: "jesus",
    salary: 1800,
    children: 13
  },

  {
    name: "Sebastiana",
    salary: 1050,
    children: 2
  }


]

mediaSalChildren(habitante, 5)













