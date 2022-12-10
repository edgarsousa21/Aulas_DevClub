/*DESAFIO 02 JAVA SCRIPT*/

// Faça um programa que verifica se uma pessoa é brasileira ou não. 
// DEVE SER UM OBJETO

const person1 = {
   name: 'Edgar',
   Age:'41',
   genre:'Male',
   address:'Rua Bias Fortes, n350',
   country:"brasil"
}

if (person1.country === 'Brasil' || person1.country === 'BRASIL' || person1.country === 'brasil'){
   console.log(`A pessoa ${person1["name"]} é brasileira`)
}else{
   console.log(`A pessoa ${person1["name"]} não é brasileira`)   
}