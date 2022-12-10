 function sum(number1, number2){ // METODO TRADICIONAL
                                // OBS: AMBAS FAZEM O MESMO,   
const result =  number1 + number2
return result

}

//==========================================================================================================


const sum = function (number1, number2){ // METODO TRADICIONAL
                                         // OBS: AMBAS FAZEM O MESMO,   
    const result =  number1 + number2
    return result

}
                                 // METODO ARROW - ECONOMIZA CODIGO - MAIS USADA
//==========================================================================================================

sum = (number1, number2) => number1 + number2 // RETORNA AUTOMATICAMENTE //NÃO PRECISA USAR RETURN
                                              // => SETA DO ARROW

//==========================================================================================================

sum = (number1, number2) => { // COM AS CHAVES, PRECISA DO RETURN
       return number1 + number2
    }