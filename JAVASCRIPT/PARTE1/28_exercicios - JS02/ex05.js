/*DESAFIO 02 JAVA SCRIPT*/

// Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
//Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve 
//ser maior de idade e brasileira para ser aprovada.Faça um programa onde os jurados vão dar a 
//explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const person = [{
   name: "Edgar",
   age: 41,
   genre: "Masculino",
   profission: "Programador",
   nationality: "Brasileiro"
},
{
   name: "João",
   age: 14,
   genre: "Masculino",
   profission: "Estudante",
   nationality: "Brasileiro"
},

{
   name: "Maria",
   age: 23,
   genre: "Feminino",
   profission: "Secretária",
   nationality: "Americana"
},

{
   name: "Gilberto",
   age: 17,
   genre: "Masculino",
   profission: "Estudante",
   nationality: "Portugal"
},

{
   name: "Gabriela",
   age: 33,
   genre: "Feminino",
   profission: "Nutricionista",
   nationality: "Brasileiro"
}]


for (let i = 0; i <= 5; i++) {
   if (person[i].age >= 18 && (person[i].nationality === "brasileiro" || person[i].nationality === "Brasileiro" || person[i].nationality === "BRASILEIRO")) {
      console.log(`A pessoa ${person[i].name} está aprovada no processo.`)
   } 
   else {
      console.log(`A pessoa ${person[i].name} não está aprovada no processo.`)
   }
}



const notaJurados = 7
switch (notaJurados) {
   case 0:
      console.log(` Nota ${notaJurados} mensagem 0`)
      break;

   case 1:
      console.log(` Nota ${notaJurados} mensagem 1`)
      break;

   case 2:
      console.log(` Nota ${notaJurados} mensagem 2`)
      break;

   case 3:
      console.log(` Nota ${notaJurados} mensagem 3`)
      break;

   case 4:
      console.log(` Nota ${notaJurados} mensagem 4`)
      break;

   case 5:
      console.log(` Nota ${notaJurados} mensagem 5`)
      break;

   case 6:
      console.log(` Nota ${notaJurados} mensagem 6`)
      break;

   case 7:
      console.log(` Nota ${notaJurados} mensagem 7`)
      break;

   case 8:
      console.log(` Nota ${notaJurados} mensagem 8`)
      break;

   case 9:
      console.log(` Nota ${notaJurados} mensagem 9`)
      break;

   case 10:
      console.log(` Nota ${notaJurados} mensagem 10`)
      break;

   default:
      console.log("Nota não encontrada.")
      break;

}


