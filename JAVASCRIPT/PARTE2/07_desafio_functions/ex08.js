/* 
DESAFIO FUNCTIONS 

Você deve enviar como argumentos da função - Valor inicial investido - Valor atual do investimento - 
Tempo em meses, que o valor está investidoA função deve RETORNAR a taxa de juros, já formatada.
Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo.
*/
 const taxaJuros = (capital, tempoMes, montante) => {     
      
  
        
       let taxa = (montante - capital) /(capital * tempoMes)

       console.log(`O valor da taxa em ${tempoMes} meses é de: ${taxa} ou ${taxa*100} % ao mês `)

 } 
 let invest = 2500 // investimento
 let timeMonth = 12 // meses
 let amount = 3400

taxaJuros(invest, timeMonth, amount)









