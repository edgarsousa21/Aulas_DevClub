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

// Math.floor(Math.random() * (max - min) + min)

const funcDesconto = (nameClient, valueBuy, firstBuy, payInCash) =>{
        let discount
        let noDiscount = Math.floor(Math.random() * (20 - 10) + 10)

     if (firstBuy === true && payInCash === true && valueBuy >= 1000) {     // 1   
         discount = valueBuy - 30/100 * valueBuy
        console.log(`1 Parabéns, cliente ${nameClient}, você realizou a primeira compra e pagou a vista, 
        e comprou no valor de: ${valueBuy}, superior a R$ 1000,00, no entanto, terá 30% de desconto e você pagará R$${discount},00 `)
     }else if(firstBuy === true && payInCash === true && valueBuy <= 1000 && valueBuy >= 500){ // 2
        discount = valueBuy - 25/100 * valueBuy
        console.log(`2 Parabéns, cliente ${nameClient}, você realizou a primeira compra e pagou a vista, 
        e comprou no valor de: ${valueBuy}, entre R$500,00 e R$ 1000,00, no entanto, terá 25% de desconto e você pagará R$${discount},00 `)
     }else if(firstBuy === true && payInCash === false && valueBuy >= 1000){ // 3
        discount = valueBuy - 20/100 * valueBuy
        console.log(`3 Cliente ${nameClient}, você realizou a primeira compra e não pagou a vista, 
        e comprou no valor de: ${valueBuy}, acima de R$ 1000,00, no entanto, terá 20% de desconto e você pagará R$${discount},00 `)
     }else if(firstBuy === true && payInCash === false && valueBuy <= 1000 && valueBuy >= 500){ // 4
        discount = valueBuy - 15/100 * valueBuy
        console.log(`4 Cliente ${nameClient}, você realizou a primeira compra e não pagou a vista, 
        e comprou no valor de: ${valueBuy}, entre R$500,00 e R$ 1000,00, no entanto, terá 15% de desconto e você pagará R$${discount},00 `)
     }else if(firstBuy === true && payInCash === false && valueBuy <= 500){ // 5
        discount = valueBuy - 10/100 * valueBuy
        console.log(`5 Cliente ${nameClient}, você realizou a primeira compra e não pagou a vista, 
        e comprou no valor de: ${valueBuy}, menor que R$500,00, no entanto, terá 10% de desconto e você pagará R$${discount},00 `)
     }else if(firstBuy === false && payInCash === true && valueBuy >= 1000){ // 6
        discount = valueBuy - 20/100 * valueBuy
        console.log(`6 Cliente ${nameClient}, você não realizou a primeira compra e pagou a vista, 
        e comprou no valor de: ${valueBuy}, acima de R$ 1000,00, no entanto, terá 20% de desconto e você pagará R$${discount},00 `)
    }else if(firstBuy === false && payInCash === true && valueBuy >= 500 && valueBuy <= 1000){ // 7
        discount = valueBuy - 15/100 * valueBuy
        console.log(`7 Cliente ${nameClient}, você não realizou a primeira compra e pagou a vista, 
        e comprou no valor de: ${valueBuy}, entre R$500,00 e R$ 1000,00, no entanto, terá 15% de desconto e você pagará R$${discount},00 `)
    }else if(firstBuy === false && payInCash === true && valueBuy <= 500){ // 8
        discount = valueBuy - 10/100 * valueBuy
        console.log(`8 Cliente ${nameClient}, você não realizou a primeira compra e pagou a vista, 
        e comprou no valor de: ${valueBuy}, menor que R$500,00, no entanto, terá 10% de desconto e você pagará R$${discount},00 `)
    }else if(firstBuy === false && payInCash === false && valueBuy >= 1000){ // 9
        discount = valueBuy - 10/100 * valueBuy
        console.log(`9 Cliente ${nameClient}, você não realizou a primeira compra e não pagou a vista, 
        e comprou no valor de: ${valueBuy}, maior que R$1000,00, no entanto, terá 10% de desconto e você pagará R$${discount},00 `)
    }else if(firstBuy === false && payInCash === false && valueBuy >= 500 && valueBuy <= 1000){ // 10
        discount = valueBuy - 5/100 * valueBuy
        console.log(`10 Cliente ${nameClient}, você não realizou a primeira compra e não pagou a vista, 
        e comprou no valor de: ${valueBuy}, entre R$500,00 e R$ 1000,00, no entanto, terá 5% de desconto e você pagará R$${discount},00 `)
    }else if(firstBuy === false && payInCash === false && valueBuy <= 500){ // 11
        discount = valueBuy - 0/100 * valueBuy
        console.log(`11 Cliente ${nameClient}, obrigado pela comprea de: R$${valueBuy},00, e você receberá um cupon
        de desconto para a próxima compra de ${noDiscount}%, até a próxima. `)
    }
     
}

let nameClient = 'Edgar'
let value = 1000
let first = false
let modePay = false
 funcDesconto(nameClient, value, first, modePay)











