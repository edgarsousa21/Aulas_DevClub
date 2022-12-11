/* 
DESAFIO FUNCTIONS 

Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo

1 - Escreva um programa onde, você cria uma função geradora de desconto.

2 - A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a 
primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)

3 - Os descontos funcionam da seguinte forma:

4 - Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto

5 - Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, 
e maior que R$ 500 => 25% de desconto

6 - Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%

7 - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de 
desconto

- Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, 
e maior que R$ 500 => 15% de desconto 

8 - Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%

9 - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto

10 - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior 
que R$ 500 => 15% de desconto

11 - Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%

12 - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% 
de desconto 
- Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que 
R$ 1000, e maior que R$ 500 => 5% de desconto

13 - Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => 
SEM DESCONTO- A função deve imprimir na tela:

14 - Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, 
o valor total com desconto e a porcentagem de desconto que ele recebeu.

15 - Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da 
sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.
*/



const funcDesconto = (nameClient, valueBuy, firstBuy, payInCash) =>{
     if (firstBuy === 1 && payInCash === 1 && valueBuy > 1000) {        
        valueBuy = valueBuy - 30/100 * valueBuy
        console.log(`Parabéns, cliente ${nameClient}, você realizou a primeira compra e pagou a vista, 
        e comprou no valor superior a R$ 1000,00, no entanto, terá 30% de desconto e você pagará R$${valueBuy},00 `)
     }else if(firstBuy === 1 && payInCash === 1 && valueBuy < 1000 && valueBuy > 500){
        valueBuy = valueBuy - 25/100 * valueBuy
        console.log(`Parabéns, cliente ${nameClient}, você realizou a primeira compra e pagou a vista, 
        e comprou no valor entre R$500,00  e  R$ 1000,00, no entanto, terá 25% de desconto e você pagará R$${valueBuy},00 `)
     }else if(firstBuy === 1 && payInCash !== 1 && valueBuy > 1000){
        valueBuy = valueBuy - 20/100 * valueBuy
        console.log(`Cliente ${nameClient}, você realizou a primeira compra e não pagou a vista, 
        e comprou no valor acima de  R$ 1000,00, no entanto, terá 20% de desconto e você pagará R$${valueBuy},00 `)
     }else if(firstBuy === 1 && payInCash !== 1 && valueBuy < 1000 && valueBuy > 500){
        valueBuy = valueBuy - 15/100 * valueBuy
        console.log(`Cliente ${nameClient}, você realizou a primeira compra e não pagou a vista, 
        e comprou no valor entre R$500,00  e  R$ 1000,00, no entanto, terá 15% de desconto e você pagará R$${valueBuy},00 `)
     }else if(firstBuy === 1 && payInCash !== 1 && valueBuy < 500){
        valueBuy = valueBuy - 10/100 * valueBuy
        console.log(`Cliente ${nameClient}, você realizou a primeira compra e não pagou a vista, 
        e comprou no valor menor que R$500,00, no entanto, terá 10% de desconto e você pagará R$${valueBuy},00 `)
     }else if(firstBuy !== 1 && payInCash === 1 && valueBuy > 1000){
        valueBuy = valueBuy - 20/100 * valueBuy
        console.log(`Cliente ${nameClient}, você não realizou a primeira compra e pagou a vista, 
        e comprou no valor acima de  R$ 1000,00, no entanto, terá 20% de desconto e você pagará R$${valueBuy},00 `)
    }else if(firstBuy !== 1 && payInCash === 1 && valueBuy > 500 &&valueBuy < 1000){
        valueBuy = valueBuy - 15/100 * valueBuy
        console.log(`Cliente ${nameClient}, você não realizou a primeira compra e pagou a vista, 
        e comprou no valor entre R$500,00 e R$ 1000,00, no entanto, terá 15% de desconto e você pagará R$${valueBuy},00 `)
    }else if(firstBuy !== 1 && payInCash === 1 && valueBuy < 500){
        valueBuy = valueBuy - 10/100 * valueBuy
        console.log(`Cliente ${nameClient}, você não realizou a primeira compra e pagou a vista, 
        e comprou no valor menor que R$500,00, no entanto, terá 10% de desconto e você pagará R$${valueBuy},00 `)
    }else if(firstBuy !== 1 && payInCash !== 1 && valueBuy > 1000){
        valueBuy = valueBuy - 10/100 * valueBuy
        console.log(`Cliente ${nameClient}, você não realizou a primeira compra e não pagou a vista, 
        e comprou no valor maior que R$1000,00, no entanto, terá 10% de desconto e você pagará R$${valueBuy},00 `)
    }else if(firstBuy !== 1 && payInCash !== 1 && valueBuy > 500 && valueBuy < 1000){
        valueBuy = valueBuy - 5/100 * valueBuy
        console.log(`Cliente ${nameClient}, você não realizou a primeira compra e não pagou a vista, 
        e comprou no valor entre R$500,00 e R$ 1000,00, no entanto, terá 5% de desconto e você pagará R$${valueBuy},00 `)
    }else if(firstBuy !== 1 && payInCash !== 1 && valueBuy < 500){
        valueBuy = valueBuy - 0/100 * valueBuy
        console.log(`Cliente ${nameClient}, você não realizou a primeira compra e não pagou a vista, 
        e comprou no valor menor que  R$500,00, no entanto, não terá desconto e você pagará R$${valueBuy},00 `)
    }
     
}

let nameClient = 'Edgar'
let value = 400
let first = 0
let modePay = 0
 funcDesconto(nameClient, value, first, modePay)











