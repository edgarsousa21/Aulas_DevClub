/*DESAFIO 02 JAVA SCRIPT*/

/*
Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: 
- Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES 
- Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 
Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.
*/

const numbers = [2,4,6,8]
const impar = `TODOS OS NÚMEROS SÃO ÍMPARES`
const par = `TODOS OS NÚMEROS SÃO PARES`
const parimpar = `HÁ NÚMEROS IMPARES E PARES`
let contpar = 0
let contimpar = 0

for (let i = 0;i < 4; i++){
   if(numbers[i] % 2 !==0){
     contimpar++
   } else{
      contpar++
   }   
}
if(contimpar === 0){
   console.log(par)
} else if(contpar === 0){
   console.log(impar)
}else if (contimpar !==0 && contpar!==0){
   console.log(parimpar)
}