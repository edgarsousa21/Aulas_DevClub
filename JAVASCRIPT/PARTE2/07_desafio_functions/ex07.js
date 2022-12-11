/* 
DESAFIO FUNCTIONS 

 Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.
  taxa(i) = juros(j) / (capital(c) * Tempo(t) )
  juros(j) = montante(m) - Capital(c)
*/
 const taxaJuros = (capital, tempoMes, montante) => {     
      
  
        
       let taxa = (montante - capital) /(capital * tempoMes)

       console.log(`O valor da taxa em ${tempoMes} meses é de: ${taxa} ou ${taxa*100} % ao mês `)

 } 
 let invest = 2500 // investimento
 let timeMonth = 10 // meses
 let amount = 3400

taxaJuros(invest, timeMonth, amount)









